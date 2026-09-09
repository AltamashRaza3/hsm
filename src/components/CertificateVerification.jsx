import { useState } from "react";
import { BadgeCheck, Search } from "lucide-react";

export default function CertificateVerification({ standalone = false }) {
  const [certNumber, setCertNumber] = useState("");
  const [result, setResult] = useState(null); // null | "checking" | "not_connected"

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certNumber.trim()) return;
    setResult("not_connected");
  };

  return (
    <section className={`bg-navy-950 text-white py-20 md:py-28 ${!standalone ? "border-t border-white/5" : ""}`}>
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="max-w-md mx-auto text-center">
          <BadgeCheck className="w-8 h-8 text-green-400 mx-auto mb-5" strokeWidth={1.5} />
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-3">
            Verify Your Certificate
          </h2>
          <p className="text-stone-400 mb-8">
            Enter a certificate number to confirm its authenticity.
          </p>

          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={certNumber}
              onChange={(e) => setCertNumber(e.target.value)}
              placeholder="Certificate Number"
              className="flex-1 bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-stone-500 focus:border-green-400 outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium px-6 py-3 rounded-sm transition-colors shrink-0"
            >
              <Search className="w-4 h-4" /> Verify Certificate
            </button>
          </form>

          {result === "not_connected" && (
            <p className="text-xs text-stone-500 mt-4">
              Certificate verification isn't connected to a records system
              yet — this is a frontend-only preview ready to be wired to a
              backend or API.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
