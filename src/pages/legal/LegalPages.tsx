import React from "react";
import styles from "./LegalPages.module.css";

type LegalPageProps = { page: "privacy" | "terms" | "delete" };

const LegalPages: React.FC<LegalPageProps> = ({ page }) => {
  if (page === "privacy") {
    return (
      <main className={styles.legalPage}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>LEGAL INFORMATION</p>
          <h1>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: November 13, 2026</p>
          <p>
            This policy explains how Hiregeekhacker handles information when
            you visit this website or contact us. Please do not send passwords,
            access codes, financial account credentials, or highly sensitive
            personal information through the website contact form.
          </p>
          <h2>Information you provide</h2>
          <p>
            If you contact us, we may receive the name, email address, and
            message you choose to submit, together with information you
            voluntarily provide during follow-up communications.
          </p>
          <h2>How information is used</h2>
          <p>
            Information may be used to respond to enquiries, assess whether a
            requested service is within scope, communicate about a potential
            engagement, maintain security, and meet applicable legal
            obligations.
          </p>
          <h2>Service providers and sharing</h2>
          <p>
            The website relies on third-party providers for hosting and contact
            form delivery. Information submitted through the form may be
            processed by those providers under their own terms and privacy
            policies. We do not sell personal information. Information may
            also be disclosed when required by law or when necessary to protect
            rights, safety, and the security of the service.
          </p>
          <h2>Retention and security</h2>
          <p>
            We retain enquiry information for as long as reasonably necessary
            to respond, manage a relationship, maintain appropriate records,
            and address legal or security needs. Reasonable safeguards are
            used, but no method of internet transmission or electronic storage
            can be guaranteed to be completely secure.
          </p>
          <h2>Your choices and requests</h2>
          <p>
            You may ask about, correct, or request deletion of personal
            information by emailing GEEKHANKHACKER@GMAIL.COM. We may need to
            verify your request and may retain information where permitted or
            required by law.
          </p>
          <h2>Changes and contact</h2>
          <p>
            This policy may be updated from time to time. Questions about this
            policy can be sent to GEEKHANKHACKER@GMAIL.COM.
          </p>
        </div>
      </main>
    );
  }

  if (page === "terms") {
    return (
      <main className={styles.legalPage}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>LEGAL INFORMATION</p>
          <h1>Terms and Conditions</h1>
          <p className={styles.updated}>Last updated: November 13, 2026</p>
          <p>
            By using this website, you agree to these terms. If you do not
            agree, please do not use the website.
          </p>
          <h2>Website information</h2>
          <p>
            Website content is provided for general information about
            digital-investigation and cybersecurity support. It is not legal,
            financial, or other professional advice and should not be relied
            on as a substitute for advice from a qualified professional.
          </p>
          <h2>Enquiries and services</h2>
          <p>
            Sending an enquiry does not create a client relationship or
            guarantee that a service will be accepted. Any work must be
            separately agreed, with its scope, responsibilities, fees, and
            limitations confirmed before it begins.
          </p>
          <h2>Authorization and acceptable use</h2>
          <p>
            You may only request work involving accounts, devices, data, or
            systems that you own or are expressly authorized to access. You
            must not use this website or request services to facilitate
            unauthorized access, covert surveillance, harassment, fraud, or
            other unlawful activity.
          </p>
          <h2>No guaranteed outcomes</h2>
          <p>
            Investigations depend on the evidence and access lawfully
            available. Cryptocurrency tracing does not ensure that assets can
            be recovered. Account access, data recovery, investigations, and
            other outcomes may depend on third parties and circumstances
            outside our control. No specific result is guaranteed.
          </p>
          <h2>Third-party services</h2>
          <p>
            This website may link to third-party websites or services. We do
            not control and are not responsible for their content, security,
            availability, or policies.
          </p>
          <h2>Changes and contact</h2>
          <p>
            We may update these terms or website content from time to time.
            Questions can be sent to GEEKHANKHACKER@GMAIL.COM.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.legalPage}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>PRIVACY REQUESTS</p>
        <h1>Personal Data Requests</h1>
        <p>
          You can contact us to ask what personal information you have
          provided, request a correction, or request deletion.
        </p>
        <h2>How to submit a request</h2>
        <p>
          Email GEEKHANKHACKER@GMAIL.COM with the subject line
          “Personal Data Request”. Tell us how you previously contacted us
          and whether you are requesting access, correction, or deletion.
          Please do not include passwords, identity documents, or other
          sensitive information unless we specifically explain a secure
          method for providing it.
        </p>
        <p>
          We may ask for reasonable information to verify that the request
          relates to you. We will review the request and respond as required
          by applicable law. Some information may need to be retained for
          legal, security, or recordkeeping reasons.
        </p>
      </div>
    </main>
  );
};

export default LegalPages;
