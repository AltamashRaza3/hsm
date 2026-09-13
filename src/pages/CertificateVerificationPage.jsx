import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import CertificateVerification from "../components/CertificateVerification";
import { brand } from "../data/site";

export default function CertificateVerificationPage() {
  return (
    <>
      <Helmet>
        <title>Certificate Verification | {brand.name}</title>

        <meta
          name="description"
          content="Verify your IOSH or NEBOSH certification through the official verification service."
        />
      </Helmet>

      <PageHeader
        eyebrow="CERTIFICATE VERIFICATION"
        title="Verify Your Certificate"
        description="Select your certification provider and access the official verification service to verify your certificate."
      />

      <CertificateVerification standalone />
    </>
  );
}
