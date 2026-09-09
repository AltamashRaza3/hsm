import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-white py-32 text-center">
      <p className="text-xs tracking-[0.18em] text-green-600 font-medium mb-4">404</p>
      <h1 className="font-display font-semibold text-3xl text-charcoal mb-4">Page Not Found</h1>
      <p className="text-stone-600 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors">
        Back to Home
      </Link>
    </section>
  );
}
