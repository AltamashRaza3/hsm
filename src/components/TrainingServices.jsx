import { Link } from "react-router-dom";
import { corporateTraining, consultancy } from "../data/services";
import { getIcon } from "../lib/icons";

function ServiceList({ title, items, to }) {
  return (
    <div className="bg-white border border-stone-100 rounded-sm p-7 md:p-8">
      <h3 className="font-display font-semibold text-xl text-charcoal mb-6">{title}</h3>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-7">
        {items.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <li key={item.name} className="flex items-center gap-2.5 text-sm text-stone-700">
              <Icon className="w-4 h-4 text-green-600 shrink-0" strokeWidth={1.75} />
              {item.name}
            </li>
          );
        })}
      </ul>
      <Link to={to} className="text-sm font-medium text-navy-900 hover:text-green-600">
        Enquire about this →
      </Link>
    </div>
  );
}

export default function TrainingServices() {
  return (
    <section className="bg-stone-50 py-20 md:py-28 border-t border-stone-100">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal tracking-tight mb-3">
          Training &amp; Corporate Services
        </h2>
        <p className="text-stone-600 max-w-lg mb-12">
          Only services actually offered are shown here once confirmed —
          on-site corporate training and HSE consultancy for organisations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceList title="Corporate Safety Training" items={corporateTraining} to="/contact" />
          <ServiceList title="HSE Consultancy" items={consultancy} to="/contact" />
        </div>
      </div>
    </section>
  );
}
