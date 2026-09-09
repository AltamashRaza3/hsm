import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import { brand } from "../data/site";

export function PrivacyPolicy() {
  return (
    <>
      <Helmet><title>Privacy Policy | {brand.name}</title></Helmet>
      <PageHeader eyebrow="LEGAL" title="Privacy Policy" />
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8 max-w-2xl">
          <p className="text-stone-600 leading-relaxed">
            [Placeholder — replace with the client's actual privacy policy
            covering data collection, use, storage and contact information
            before launch.]
          </p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <Helmet><title>Terms of Service | {brand.name}</title></Helmet>
      <PageHeader eyebrow="LEGAL" title="Terms of Service" />
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8 max-w-2xl">
          <p className="text-stone-600 leading-relaxed">
            [Placeholder — replace with the client's actual terms of service
            before launch.]
          </p>
        </div>
      </section>
    </>
  );
}
