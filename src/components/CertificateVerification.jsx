import { useMemo, useState } from "react";
import {
  BadgeCheck,
  ExternalLink,
  Search,
  ChevronDown,
  AlertCircle,
} from "lucide-react";

const providers = {
  iosh: {
    name: "IOSH",
    description: "Verify an IOSH training certificate.",
    fields: [
      {
        name: "certificateNumber",
        label: "Certificate Number",
        placeholder: "Enter certificate number",
        type: "text",
        autoComplete: "off",
      },
      {
        name: "firstName",
        label: "First Name",
        placeholder: "Enter first name",
        type: "text",
        autoComplete: "given-name",
      },
      {
        name: "surname",
        label: "Surname",
        placeholder: "Enter surname",
        type: "text",
        autoComplete: "family-name",
      },
    ],
    url: "https://iosh.com/business/certificate-validation/training-certificate-verifier",
  },

  nebosh: {
    name: "NEBOSH",
    description: "Verify a NEBOSH qualification through the official service.",
    fields: [
      {
        name: "certificateNumber",
        label: "Certificate / Master Log Number",
        placeholder: "Enter certificate number",
        type: "text",
        autoComplete: "off",
      },
      {
        name: "name",
        label: "Learner Name",
        placeholder: "Enter learner name",
        type: "text",
        autoComplete: "name",
      },
    ],
    url: "https://nebosh-validation.verisecure.org/#/",
  },
};

const initialFormData = {};

const getInitialErrors = () => ({});

const NAME_PATTERN = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;

function validateField(fieldName, value, provider) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "This field is required.";
  }

  if (fieldName === "certificateNumber") {
    if (trimmed.length < 3) {
      return "Enter a valid certificate number.";
    }

    if (trimmed.length > 50) {
      return "Certificate number is too long.";
    }

    // Allows letters, numbers, spaces and common certificate separators.
    if (!/^[A-Za-z0-9][A-Za-z0-9 ./_-]*$/.test(trimmed)) {
      return "Use only letters, numbers, spaces, /, -, _, or .";
    }

    return "";
  }

  if (
    fieldName === "firstName" ||
    fieldName === "surname" ||
    fieldName === "name"
  ) {
    if (trimmed.length < 2) {
      return "Please enter at least 2 characters.";
    }

    if (trimmed.length > 60) {
      return "Name is too long.";
    }

    if (!NAME_PATTERN.test(trimmed)) {
      return "Use letters, spaces, hyphens, or apostrophes only.";
    }

    return "";
  }

  return "";
}

function sanitizeName(value) {
  // Prevent numbers and other unwanted characters from being entered.
  return value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g, "");
}

function sanitizeCertificateNumber(value) {
  // Allow common certificate-number characters.
  return value.replace(/[^A-Za-z0-9 ./_-]/g, "");
}

export default function CertificateVerification({ standalone = false }) {
  const [provider, setProvider] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(getInitialErrors);
  const [touched, setTouched] = useState({});
  const [showProviderMenu, setShowProviderMenu] = useState(false);

  const selectedProvider = providers[provider];

  const isFormValid = useMemo(() => {
    if (!selectedProvider) return false;

    return selectedProvider.fields.every((field) => {
      const value = formData[field.name] || "";
      return !validateField(field.name, value, provider);
    });
  }, [selectedProvider, formData, provider]);

  const handleProviderChange = (value) => {
    setProvider(value);
    setFormData({});
    setErrors({});
    setTouched({});
    setShowProviderMenu(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const isNameField =
      name === "firstName" || name === "surname" || name === "name";

    const cleanedValue = isNameField
      ? sanitizeName(value)
      : sanitizeCertificateNumber(value);

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));

    // Only display validation errors after the user has interacted
    // with the field.
    if (touched[name]) {
      const error = validateField(name, cleanedValue, provider);

      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    const value = formData[name] || "";

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value, provider),
    }));
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (!selectedProvider) return;

    const newErrors = {};
    const newTouched = {};

    selectedProvider.fields.forEach((field) => {
      const value = formData[field.name] || "";

      newTouched[field.name] = true;

      const error = validateField(field.name, value, provider);

      if (error) {
        newErrors[field.name] = error;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    // Never open the verification service when the form is invalid.
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    window.open(selectedProvider.url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className={`bg-navy-950 text-white py-20 md:py-28 ${
        !standalone ? "border-t border-white/5" : ""
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <BadgeCheck
              className="w-8 h-8 text-green-400 mx-auto mb-5"
              strokeWidth={1.5}
            />

            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-3">
              Verify Your Certificate
            </h2>

            <p className="text-stone-400 mb-8">
              Select your certification provider and verify your certificate
              through the official verification service.
            </p>
          </div>

          {/* Provider Selector */}
          <div className="relative text-left mb-6">
            <label
              htmlFor="certificate-provider"
              className="block text-xs font-medium text-stone-400 mb-2"
            >
              Certification Provider
            </label>

            <button
              id="certificate-provider"
              type="button"
              aria-haspopup="listbox"
              aria-expanded={showProviderMenu}
              onClick={() => setShowProviderMenu((prev) => !prev)}
              className="w-full flex items-center justify-between bg-white/5 border border-white/15 rounded-sm px-4 py-3.5 text-sm hover:border-white/25 transition-colors"
            >
              <span className={provider ? "text-white" : "text-stone-500"}>
                {selectedProvider
                  ? selectedProvider.name
                  : "Select certification provider"}
              </span>

              <ChevronDown
                className={`w-4 h-4 text-stone-400 transition-transform ${
                  showProviderMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {showProviderMenu && (
              <div
                role="listbox"
                className="absolute z-20 left-0 right-0 mt-2 bg-navy-900 border border-white/10 rounded-sm overflow-hidden shadow-xl"
              >
                {Object.entries(providers).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    role="option"
                    aria-selected={provider === key}
                    onClick={() => handleProviderChange(key)}
                    className="w-full text-left px-4 py-3 text-sm text-stone-300 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <span className="block font-medium text-white">
                      {item.name}
                    </span>

                    <span className="block text-xs text-stone-500 mt-1">
                      {item.description}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Verification Form */}
          {selectedProvider && (
            <form onSubmit={handleVerify} noValidate className="space-y-4">
              {selectedProvider.fields.map((field) => {
                const error = errors[field.name];
                const hasError = touched[field.name] && error;

                return (
                  <div key={field.name}>
                    <label
                      htmlFor={`certificate-${field.name}`}
                      className="block text-xs font-medium text-stone-400 mb-2"
                    >
                      {field.label}
                    </label>

                    <input
                      id={`certificate-${field.name}`}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      maxLength={field.name === "certificateNumber" ? 50 : 60}
                      aria-invalid={Boolean(hasError)}
                      aria-describedby={
                        hasError ? `error-${field.name}` : undefined
                      }
                      className={`w-full bg-white/5 border rounded-sm px-4 py-3 text-sm text-white placeholder:text-stone-500 outline-none transition-colors ${
                        hasError
                          ? "border-red-400 focus:border-red-400"
                          : "border-white/15 focus:border-green-400"
                      }`}
                    />

                    {hasError && (
                      <p
                        id={`error-${field.name}`}
                        className="flex items-center gap-1.5 text-xs text-red-400 mt-2"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {error}
                      </p>
                    )}
                  </div>
                );
              })}

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3.5 rounded-sm transition-colors ${
                  isFormValid
                    ? "bg-green-500 hover:bg-green-400 text-white"
                    : "bg-white/10 text-stone-500 cursor-not-allowed"
                }`}
              >
                <Search className="w-4 h-4" />
                Verify with {selectedProvider.name}
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          {/* Information */}
          {selectedProvider && (
            <div className="flex items-start gap-2 text-xs text-stone-500 mt-5 leading-relaxed">
              <BadgeCheck className="w-3.5 h-3.5 mt-0.5 shrink-0" />

              <p>
                Verification is completed through the official{" "}
                {selectedProvider.name} verification service. HSM does not
                modify or independently validate records issued by the
                certification body.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
