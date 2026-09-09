import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { contact } from "../data/site";
import { courses } from "../data/courses";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

export default function ContactSection({ standalone = false }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));

    if (error) {
      setError("");
    }
  };

  // Build enquiry message
  const getEnquiryMessage = () => {
    return `Hello HSM Health & Safety Management,

I would like to enquire about your training programs.

Name: ${form.name}
Email: ${form.email}
Phone / WhatsApp: ${form.phone || "Not provided"}
Interested Course: ${form.course || "Not specified"}

Message:
${form.message || "I would like to know more about your courses."}

Thank you.`;
  };

  // Validate form
  const validateForm = () => {
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return false;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return false;
    }

    return true;
  };

  // Open Gmail Compose
  const handleEmail = () => {
    if (!validateForm()) return;

    const subject = form.course
      ? `Course Enquiry - ${form.course}`
      : "Course Enquiry - HSM";

    const body = getEnquiryMessage();

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(contact.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  // Open WhatsApp
  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const message = getEnquiryMessage();

    const whatsappNumber = contact.whatsapp.replace(/\D/g, "");

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Phone
  const phoneUrl = `tel:${contact.phone.replace(/[^\d+]/g, "")}`;

  // WhatsApp
  const whatsappNumber = contact.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  // Email
  const emailUrl = `mailto:${contact.email}`;

  // Google Maps
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.location,
  )}`;

  return (
    <section
      className={`bg-stone-50 py-20 md:py-28 ${
        !standalone ? "border-t border-stone-100" : ""
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-16">
        {/* LEFT SIDE */}
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-green-600 mb-3">
            CONTACT
          </p>

          <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-4">
            Get In Touch
          </h2>

          <p className="text-stone-600 max-w-md mb-8 leading-relaxed">
            Have questions about our courses, eligibility or career
            opportunities? Send us an enquiry and our team will get back to you.
          </p>

          <ul className="space-y-6">
            {/* PHONE */}
            <li>
              <a href={phoneUrl} className="group flex items-start gap-3.5">
                <Phone
                  className="w-[20px] h-[20px] mt-0.5 shrink-0 text-green-600 group-hover:text-green-500 transition-colors"
                  strokeWidth={1.75}
                />

                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Phone</p>

                  <p className="text-sm font-medium text-charcoal group-hover:text-green-600 transition-colors">
                    {contact.phone}
                  </p>
                </div>
              </a>
            </li>

            {/* WHATSAPP */}
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5"
              >
                <MessageCircle
                  className="w-[20px] h-[20px] mt-0.5 shrink-0 text-green-600 group-hover:text-green-500 transition-colors"
                  strokeWidth={1.75}
                />

                <div>
                  <p className="text-xs text-stone-500 mb-0.5">WhatsApp</p>

                  <p className="text-sm font-medium text-charcoal group-hover:text-green-600 transition-colors">
                    {contact.whatsapp}
                  </p>
                </div>
              </a>
            </li>

            {/* EMAIL */}
            <li>
              <a href={emailUrl} className="group flex items-start gap-3.5">
                <Mail
                  className="w-[20px] h-[20px] mt-0.5 shrink-0 text-green-600 group-hover:text-green-500 transition-colors"
                  strokeWidth={1.75}
                />

                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Email</p>

                  <p className="text-sm font-medium text-charcoal group-hover:text-green-600 transition-colors break-all">
                    {contact.email}
                  </p>
                </div>
              </a>
            </li>

            {/* LOCATION */}
            <li>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5"
              >
                <MapPin
                  className="w-[20px] h-[20px] mt-0.5 shrink-0 text-green-600 group-hover:text-green-500 transition-colors"
                  strokeWidth={1.75}
                />

                <div>
                  <p className="text-xs text-stone-500 mb-0.5">Location</p>

                  <p className="text-sm font-medium text-charcoal group-hover:text-green-600 transition-colors">
                    {contact.location}
                  </p>
                </div>
              </a>
            </li>

            {/* WORKING HOURS */}
            <li className="flex items-start gap-3.5">
              <Clock
                className="w-[20px] h-[20px] mt-0.5 shrink-0 text-green-600"
                strokeWidth={1.75}
              />

              <div>
                <p className="text-xs text-stone-500 mb-0.5">Working Hours</p>

                <p className="text-sm font-medium text-charcoal">
                  {contact.hours}
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* FORM */}
        <div className="bg-white border border-stone-200 rounded-sm p-6 md:p-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {/* NAME + EMAIL */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                autoComplete="name"
                className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition"
              />

              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                autoComplete="email"
                className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition"
              />
            </div>

            {/* PHONE + COURSE */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone / WhatsApp"
                autoComplete="tel"
                className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition"
              />

              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition text-stone-600"
              >
                <option value="">Interested Course (optional)</option>

                {courses.map((course) => (
                  <option key={course.slug} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              rows={5}
              className="w-full border border-stone-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition resize-none"
            />

            {/* ERROR */}
            {error && <p className="text-xs text-red-600">{error}</p>}

            {/* ACTIONS */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              {/* GMAIL */}
              <button
                type="button"
                onClick={handleEmail}
                className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                Send via Gmail
              </button>

              {/* WHATSAPP */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </button>
            </div>

            <p className="text-[11px] text-stone-400 text-center pt-1">
              Your enquiry will open in Gmail or WhatsApp with the message
              already prepared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
