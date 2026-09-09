import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import CertificateVerification from "../components/CertificateVerification";
import { brand } from "../data/site";

export default function CertificateVerificationPage() {
  return (
    <>
      <Helmet>
        <title>Certificate Verification | {brand.name}</title>
        <meta name="description" content="Verify the authenticity of a certificate issued by us." />
      </Helmet>
      <PageHeader
        eyebrow="VERIFICATION"
        title="Verify Your Certificate"
        description="Confirm the authenticity of a certificate using its certificate number."
      />
      <CertificateVerification standalone />
    </>
  );
}
