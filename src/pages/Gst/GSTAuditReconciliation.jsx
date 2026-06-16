import React, { useState } from "react";
import "./GSTAuditReconciliation.css";
import gstImage from "../../assets/gst/audit-reconciliation.png";

const GSTAuditReconciliation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
*GST Audit & Reconciliation Enquiry*

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}
`;

    window.open(
      `https://wa.me/919167590448?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="service-page">
      <section className="service-hero">
        <h1>GST Audit & Reconciliation</h1>
        <p>
          Comprehensive GST audit and reconciliation services to ensure
          accurate compliance and error-free reporting.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>GST Audit & Reconciliation Services</h2>

          <h3>Ensure Accuracy in GST Compliance</h3>

          <p>
            Our GST professionals perform detailed audits and reconciliations
            to identify mismatches, resolve compliance issues, and ensure that
            your GST returns accurately reflect your business records.
          </p>

          <h3>Our GST Audit & Reconciliation Services</h3>

          <div className="service-item">
            <h4>1. Turnover Reconciliation</h4>
            <p>
              Reconciliation of turnover reported in books of accounts and GST
              returns.
            </p>
          </div>

          <div className="service-item">
            <h4>2. ITC Mismatch Resolution</h4>
            <p>
              Identification and resolution of Input Tax Credit mismatches.
            </p>
          </div>

          <div className="service-item">
            <h4>3. Books vs GST Returns Check</h4>
            <p>
              Detailed comparison of accounting records with GST filings.
            </p>
          </div>

          <div className="service-item">
            <h4>4. Annual GST Audit Support</h4>
            <p>
              Professional assistance for annual GST audits and compliance
              reviews.
            </p>
          </div>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Accurate GST Reporting</li>
            <li>Reduced Compliance Risks</li>
            <li>Proper ITC Utilization</li>
            <li>Error Detection & Correction</li>
            <li>Improved Financial Accuracy</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="GST Audit & Reconciliation"
            className="service-image"
          />

          <div className="service-form">
            <h3>Get Free Consultation</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Mobile Number"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Write your requirement"
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTAuditReconciliation;