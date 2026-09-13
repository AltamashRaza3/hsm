import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import { brand, contact } from "../data/site";

function ContactDetails() {
  return (
    <div className="border border-stone-200 rounded-sm p-5 bg-stone-50 mt-5">
      <p className="font-medium text-charcoal">{brand.name}</p>
      <p>{contact.location}</p>

      <p>
        Email:{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-green-600 hover:text-green-700 transition-colors"
        >
          {contact.email}
        </a>
      </p>

      <p>
        Phone:{" "}
        <a
          href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
          className="text-green-600 hover:text-green-700 transition-colors"
        >
          {contact.phone}
        </a>
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* PRIVACY POLICY                                                             */
/* -------------------------------------------------------------------------- */

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | {brand.name}</title>
        <meta
          name="description"
          content={`Privacy Policy for ${brand.name}. Learn how we collect, use and protect your personal information.`}
        />
      </Helmet>

      <PageHeader
        eyebrow="LEGAL"
        title="Privacy Policy"
        description="How we collect, use and protect information when you use our website and services."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <article className="max-w-3xl mx-auto text-stone-700 leading-relaxed">
            <p className="text-sm text-stone-500 mb-10">
              Last updated: September 2026
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="legal-heading">1. Introduction</h2>

                <p>
                  {brand.name} ("HSM", "we", "our" or "us") respects your
                  privacy and is committed to protecting the personal
                  information you provide when using our website, contacting us,
                  or enquiring about our training and consultancy services.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">2. Information We Collect</h2>

                <p className="mb-4">
                  Depending on how you interact with us, we may collect
                  information such as:
                </p>

                <ul className="legal-list">
                  <li>Your name and contact details.</li>
                  <li>Email address and telephone or WhatsApp number.</li>
                  <li>
                    Information provided through course enquiries or
                    registration forms.
                  </li>
                  <li>
                    Information required to provide training or consultancy
                    services.
                  </li>
                  <li>
                    Messages, enquiries or other communications you send to us.
                  </li>
                  <li>
                    Basic technical information about your use of our website,
                    where applicable.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="legal-heading">
                  3. How We Use Your Information
                </h2>

                <p className="mb-4">
                  We may use the information we collect to:
                </p>

                <ul className="legal-list">
                  <li>Respond to your enquiries and requests.</li>
                  <li>
                    Provide information about our training programmes and
                    services.
                  </li>
                  <li>
                    Process course registrations and related communications.
                  </li>
                  <li>Provide training, consultancy and support services.</li>
                  <li>
                    Communicate important information relating to a course or
                    service.
                  </li>
                  <li>Maintain and improve our website and services.</li>
                  <li>Prevent misuse, fraud or unauthorised activity.</li>
                  <li>
                    Comply with applicable legal and regulatory requirements.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="legal-heading">4. Certificate Verification</h2>

                <p>
                  Our website may provide links or access to certificate
                  verification services operated by external certification or
                  awarding organisations. When you use an external verification
                  service, your information may be processed according to that
                  organisation's own privacy policy and terms.
                </p>

                <p className="mt-4">
                  HSM does not control the privacy practices of independent
                  third-party verification services.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">5. Sharing of Information</h2>

                <p>
                  We do not sell or rent your personal information. We may share
                  information with trusted service providers where necessary to
                  operate our website, communicate with you, process services or
                  fulfil a legitimate business or legal requirement.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">6. Data Security</h2>

                <p>
                  We take reasonable technical and organisational measures to
                  protect personal information against unauthorised access,
                  loss, misuse, alteration or disclosure. However, no method of
                  transmitting or storing information electronically can be
                  guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">7. Data Retention</h2>

                <p>
                  We retain personal information only for as long as reasonably
                  necessary for the purpose for which it was collected,
                  including providing services, maintaining appropriate business
                  records, resolving disputes and meeting applicable legal
                  obligations.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">8. Third-Party Websites</h2>

                <p>
                  Our website may contain links to third-party websites,
                  including certification, social media, communication or other
                  external services. We are not responsible for the privacy
                  practices, content or security of those websites.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">
                  9. Cookies and Similar Technologies
                </h2>

                <p>
                  Our website may use cookies or similar technologies where
                  required for website functionality, security, analytics or
                  improving user experience. Where applicable, you may be able
                  to control certain cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">10. Your Rights</h2>

                <p>
                  Depending on applicable law, you may have rights relating to
                  your personal information, including requesting access to,
                  correction of, or deletion of certain information. You may
                  also contact us if you have concerns about how your
                  information is being used.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">11. Children's Privacy</h2>

                <p>
                  Our services are intended for individuals who are legally able
                  to enrol in professional education and training programmes. We
                  do not knowingly collect personal information from children
                  for purposes unrelated to providing our services.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">12. Changes to This Policy</h2>

                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our services, technology or applicable
                  requirements. The updated version will be published on this
                  page with a revised "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">13. Contact Us</h2>

                <p>
                  If you have questions about this Privacy Policy or how your
                  information is handled, please contact us.
                </p>

                <ContactDetails />
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* TERMS OF SERVICE                                                           */
/* -------------------------------------------------------------------------- */

export function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | {brand.name}</title>
        <meta
          name="description"
          content={`Terms of Service governing the use of the ${brand.name} website and services.`}
        />
      </Helmet>

      <PageHeader
        eyebrow="LEGAL"
        title="Terms of Service"
        description="Terms governing your use of our website, training programmes and services."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8">
          <article className="max-w-3xl mx-auto text-stone-700 leading-relaxed">
            <p className="text-sm text-stone-500 mb-10">
              Last updated: September 2026
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="legal-heading">1. Acceptance of Terms</h2>

                <p>
                  By accessing or using the {brand.name} website, you agree to
                  comply with these Terms of Service. If you do not agree with
                  these terms, please do not use the website or our services.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">2. Our Services</h2>

                <p>
                  {brand.name} provides Health, Safety & Environment training,
                  professional development, corporate training and related
                  consultancy services. Specific course content, schedules,
                  delivery methods, fees and eligibility requirements may vary
                  between programmes.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">3. Course Information</h2>

                <p>
                  We make reasonable efforts to ensure that information
                  published on the website is accurate and up to date. However,
                  course availability, schedules, fees, course structure and
                  other details may change without prior notice. Please confirm
                  the applicable details with HSM before completing a
                  registration or payment.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">4. Registration and Enrolment</h2>

                <p>
                  Registration for a course does not automatically guarantee
                  enrolment unless confirmed by HSM. We may request additional
                  information where required to determine course eligibility,
                  complete registration or provide the relevant training
                  service.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">5. Fees and Payments</h2>

                <p>
                  Where a course or service requires payment, the applicable fee
                  and payment conditions will be communicated before
                  registration is completed. Any applicable refund, cancellation
                  or rescheduling conditions will be communicated as part of the
                  relevant course or service arrangement.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">
                  6. Certificates and Certification Bodies
                </h2>

                <p>
                  Completion of a training programme does not necessarily mean
                  that HSM itself is the issuing or certifying authority for an
                  external qualification. Where a course is associated with an
                  external awarding or certification organisation, the
                  applicable organisation's rules, assessment requirements and
                  certification conditions will apply.
                </p>

                <p className="mt-4">
                  Certificate verification for external qualifications may be
                  completed through the relevant certification body's official
                  verification service.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">7. User Responsibilities</h2>

                <p className="mb-4">
                  When using our website or services, you agree not to:
                </p>

                <ul className="legal-list">
                  <li>Provide false or misleading information.</li>
                  <li>Attempt to gain unauthorised access to our systems.</li>
                  <li>Use the website for unlawful or fraudulent purposes.</li>
                  <li>
                    Interfere with the operation or security of the website.
                  </li>
                  <li>
                    Copy, reproduce or distribute protected website content
                    without permission.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="legal-heading">8. Intellectual Property</h2>

                <p>
                  Unless otherwise stated, website content including text,
                  graphics, logos, images, course materials and other original
                  content is owned by or licensed to {brand.name} and may not be
                  reproduced, modified, distributed or commercially exploited
                  without prior permission.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">9. Training Materials</h2>

                <p>
                  Training materials provided to students or clients are
                  intended for the individual's or organisation's authorised
                  educational use. They must not be reproduced, resold,
                  published or distributed commercially without written
                  permission from HSM.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">
                  10. Third-Party Services and Links
                </h2>

                <p>
                  Our website may contain links to external websites and
                  services. These may include certification providers,
                  communication platforms, social networks and other third-party
                  services. HSM does not control and is not responsible for the
                  availability, content, policies or practices of third-party
                  websites.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">11. Website Availability</h2>

                <p>
                  We aim to keep the website available and functional but do not
                  guarantee uninterrupted access. The website may occasionally
                  be unavailable because of maintenance, technical issues,
                  hosting problems or circumstances beyond our reasonable
                  control.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">12. Limitation of Liability</h2>

                <p>
                  To the extent permitted by applicable law, HSM will not be
                  responsible for losses arising from reliance on general
                  information published on the website where that information is
                  not intended to constitute professional, legal, regulatory or
                  site-specific advice.
                </p>

                <p className="mt-4">
                  Training and educational information should be applied in
                  accordance with applicable laws, regulations, workplace
                  procedures and competent professional guidance.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">13. Changes to These Terms</h2>

                <p>
                  We may update these Terms of Service when necessary to reflect
                  changes to our website, services or applicable requirements.
                  The updated terms will be published on this page with a
                  revised "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">14. Governing Law</h2>

                <p>
                  These terms shall be interpreted in accordance with the
                  applicable laws of India. Any disputes shall be subject to the
                  jurisdiction of the appropriate courts, subject to applicable
                  law and any separate written agreement between HSM and a
                  client or student.
                </p>
              </section>

              <section>
                <h2 className="legal-heading">15. Contact Us</h2>

                <p>
                  If you have questions regarding these Terms of Service, please
                  contact us.
                </p>

                <ContactDetails />
              </section>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
