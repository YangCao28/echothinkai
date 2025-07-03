import React from "react";
import PageLayout from "../components/PageLayout.jsx";

export default function Privacy() {
  return (
    <PageLayout>
      <h1 className="page-title">Privacy Policy</h1>
      <div className="page-text">
        <p><strong>Effective Date: 27 May 2025</strong></p>
        <p>
          ECHOTHINK.AI (“we”, “us”, or “our”) respects your privacy and is
          committed to protecting the personal information you provide when
          using our website. This Privacy Policy explains how we collect, use,
          protect, and handle your information.
        </p>

        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Identification Information:</strong> Information
            you voluntarily provide such as name, email address, etc.
          </li>
          <li>
            <strong>Usage Data:</strong> Includes your IP address, browser
            type, access times, visited pages, and referring URLs.
          </li>
          <li>
            <strong>Cookies and Similar Technologies:</strong> Used to enhance
            user experience and website performance.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information collected to:</p>
        <ul>
          <li>Provide and maintain our website services.</li>
          <li>Analyze usage to improve the website.</li>
          <li>Send notifications or promotional materials with your consent.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell or rent your personal information. We may share
          information only:
        </p>
        <ul>
          <li>
            With third-party service providers under strict confidentiality
            agreements.
          </li>
          <li>When required by law or to protect our legal rights.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect your information but cannot guarantee absolute security of
          data transmission over the internet.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          Depending on applicable laws, you have the right to access, correct,
          delete your personal data, and opt out of marketing communications.
        </p>

        <h2>6. Children’s Privacy</h2>
        <p>
          Our website is not intended for individuals under 13 years of age,
          and we do not knowingly collect personal information from children
          under 13.
        </p>

        <h2>7. Updates to This Privacy Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be posted
          on this page with an updated effective date.
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
      `}</style>
    </PageLayout>
  );
}