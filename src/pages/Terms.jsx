import React from "react";
import PageLayout from "../components/PageLayout.jsx";

export default function Terms() {
  return (
    <PageLayout>
      <h1 className="page-title">Terms of Service</h1>
      <div className="page-text">
        <p>
          <strong>Effective Date: 27 May 2025</strong>
        </p>
        <p>
          Welcome to EchoThink.ai. These Terms of Use ("Terms") govern your
          access to and use of our website, platform, and services that
          generate game assets using artificial intelligence (“Services”). By
          accessing or using our Services, you agree to be bound by these
          Terms.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using EchoThink.ai, you acknowledge that you have read,
          understood, and agree to these Terms. If you do not agree, you must
          not access or use our Services.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old or have legal parental or guardian
          consent to use the Services. You represent and warrant that you have
          the authority to enter into these Terms.
        </p>

        <h2>3. Use of the Services</h2>
        <p>
          You may use our Services to generate, download, and utilize
          AI-generated game assets including images, audio, 3D models, and
          related content (“Generated Assets”) under the following conditions:
        </p>
        <ul>
          <li>
            You may use Generated Assets for personal or commercial purposes,
            subject to any license restrictions described in these Terms.
          </li>
          <li>
            You agree not to use the Services to generate or distribute content
            that is:
            <ul>
              <li>Illegal, harmful, abusive, or deceptive</li>
              <li>Violating intellectual property rights of others</li>
              <li>Involving hate speech, discrimination, or violence</li>
            </ul>
          </li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <ul>
          <li>
            <strong>Ownership:</strong> You retain rights to any prompts or
            inputs you submit. We grant you a non-exclusive, royalty-free,
            worldwide license to use, modify, and distribute the Generated
            Assets, including for commercial purposes.
          </li>
          <li>
            <strong>No Warranty of Uniqueness:</strong> Due to the nature of AI
            generation, we cannot guarantee the uniqueness of any Generated
            Asset.
          </li>
          <li>
            <strong>Company Rights:</strong> EchoThink.ai retains ownership of
            the platform, underlying models, algorithms, and all related
            intellectual property.
          </li>
        </ul>

        <h2>5. User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Attempt to reverse-engineer, decompile, or interfere with our AI
            models or infrastructure.
          </li>
          <li>
            Use automated scripts to access the Services in a way that exceeds
            typical human use.
          </li>
          <li>
            Misrepresent the origin of Generated Assets or falsely imply human
            authorship if disclosure is required.
          </li>
        </ul>

        <h2>6. Paid Services & Subscriptions</h2>
        <p>
          Some features may require payment. All fees are non-refundable
          except as required by law. You agree to keep payment information up
          to date. We reserve the right to change pricing at any time.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          Our Services are provided “as is” and “as available.” We make no
          guarantees regarding availability, accuracy, reliability, or fitness
          for a particular purpose. Use of our Services is at your own risk.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, EchoThink.ai shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or related to your use of the
          Services.
        </p>

        <h2>9. Modifications to the Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          Services after any modifications constitutes acceptance of the
          revised Terms.
        </p>

        <h2>10. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the
          Services at any time if we believe you have violated these Terms.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which
          EchoThink.ai is headquartered, without regard to conflict of law
          principles.
        </p>

        <h2>12. Contact</h2>
        <p>
          If you have questions regarding these Terms, please visit our website
          for additional documentation or contact information.
        </p>
      </div>

      <style>{`
        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #87b9e8;
        }
        .page-text {
          font-size: 1rem;
          line-height: 1.6;
          text-align: left;
          color: #ccc;
          max-width: 700px;
          margin: 0 auto;
        }
        .page-text h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #a7c9e8;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        .page-text ul {
            list-style-position: inside;
            padding-left: 1rem;
        }
        .page-text li {
            margin-bottom: 0.5rem;
        }
        .page-text ul ul {
            margin-top: 0.5rem;
            margin-left: 1rem;
        }
      `}</style>
    </PageLayout>
  );
}