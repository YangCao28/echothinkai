import React from "react";
import PageLayout from "../components/PageLayout.jsx";

export default function Contact() {
  return (
    <PageLayout>
      <h1 className="page-title">Contact Us</h1>
      <div className="page-text">
        <p>For inquiries, please email us at <a href="mailto:info@echothink.ai">info@echothink.ai</a>.</p>
      </div>

      <style>{`
        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color:#87b9e8;
        }
        .page-text {
          font-size: 1rem;
          line-height: 1.6;
          text-align: left;
          color: #ccc;
          max-width: 700px;
          margin: 0 auto;
        }
        a {
          color:#87b9e8;
          text-decoration: underline;
        }
      `}</style>
    </PageLayout>
  );
}
