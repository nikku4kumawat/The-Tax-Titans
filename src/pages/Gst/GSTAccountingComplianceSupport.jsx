import React, { useState } from "react";
import "./GSTAccountingComplianceSupport.css";
// import gstImage from "../../assets/gst/accounting-compliance-support.png";
import gstImage from "../../assets/gst/registration.png";

const GSTAccountingComplianceSupport = () => {
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
*GST Accounting & Compliance Support Enquiry*

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
        <h1>GST Accounting & Compliance Support</h1>
        <p>
          Complete GST accounting and compliance management services to keep
          your business accurate, organized, and fully compliant.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>GST Accounting & Compliance Support Services</h2>

          <h3>Professional GST Accounting Solutions</h3>

          <p>
            Managing GST records, returns, and compliance requirements can be
            complex. Our experts provide end-to-end GST accounting support,
            reconciliation services, and continuous compliance monitoring for
            businesses of all sizes.
          </p>

          <h3>Our GST Accounting & Compliance Support Services</h3>

          <div className="service-item">
            <h4>1. GST Return Filing by Professional Accountant</h4>
            <p>
              Accurate preparation and filing of GST returns by experienced
              accounting professionals.
            </p>
          </div>

          <div className="service-item">
            <h4>2. Data Reconciliation & Compliance Check</h4>
            <p>
              Verification and reconciliation of GST data to identify errors
              and ensure compliance.
            </p>
          </div>

          <div className="service-item">
            <h4>3. Ongoing GST Support</h4>
            <p>
              Continuous GST compliance assistance, reporting support, and
              expert guidance throughout the year.
            </p>
          </div>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Accurate GST Records</li>
            <li>Reduced Compliance Risks</li>
            <li>Timely GST Return Filing</li>
            <li>Professional Accounting Support</li>
            <li>Peace of Mind & Better Compliance</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="GST Accounting & Compliance Support"
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

export default GSTAccountingComplianceSupport;