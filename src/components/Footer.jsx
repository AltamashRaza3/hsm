import { Link } from "react-router-dom";
import { ShieldCheck, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { brand, contact, socialLinks } from "../data/site";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "About", to: "/about" },
      { label: "Courses", to: "/courses" },
      { label: "Training", to: "/training" },
      { label: "Director", to: "/director" },
      { label: "Our Journey", to: "/journey" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Hub", to: "/resources" },
      { label: "Safety Quiz", to: "/quiz" },
      { label: "Gallery", to: "/gallery" },
      { label: "Success Stories", to: "/success-stories" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", to: "/contact" },
      {
        label: "Certificate Verification",
        to: "/certificate-verification",
      },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export default function Footer() {
  // Clean WhatsApp number for wa.me
  const whatsappNumber = contact.whatsapp.replace(/\D/g, "");

  // Google Maps search
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.location,
  )}`;

  return (
    <footer className="bg-navy-950 text-stone-300 border-t border-white/5">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          {/* BRAND */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-sm bg-green/15 text-green-400">
                <ShieldCheck className="w-5 h-5" strokeWidth={2} />
              </span>

              <span className="font-display font-semibold text-white text-lg">
                {brand.shortName}
              </span>
            </Link>

            <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
              Practical Health, Safety & Environment training and consultancy —
              built around real workplaces, not just certificates.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-stone-500 hover:text-green-400 border border-white/10 rounded-sm px-3 py-1.5 transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* FOOTER COLUMNS */}
          {columns.map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-1">
              <h4 className="text-white text-sm font-medium mb-4">
                {col.title}
              </h4>

              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-stone-500 hover:text-green-400 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white text-sm font-medium mb-4">Contact</h4>

            <ul className="space-y-3 text-sm">
              {/* PHONE */}
              <li>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-start gap-2 text-stone-500 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-green-400" />

                  <span>{contact.phone}</span>
                </a>
              </li>

              {/* WHATSAPP */}
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-stone-500 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-green-400" />

                  <span>{contact.whatsapp}</span>
                </a>
              </li>

              {/* EMAIL */}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-2 text-stone-500 hover:text-green-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-green-400" />

                  <span>{contact.email}</span>
                </a>
              </li>

              {/* LOCATION */}
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-stone-500 hover:text-green-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-green-400" />

                  <span>{contact.location}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-600">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>

          <p>Built for a safer tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
