import React, { useState } from "react";
import "./GSTRevocationServices.css";
// import gstImage from "../../assets/gst/gst-revocation.png";
import gstImage from "../../assets/gst/registration.png";

const GSTRevocationServices = () => {
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
*GST Revocation Services Enquiry*

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
        <h1>GST Revocation Services</h1>
        <p>
          Get your cancelled GST registration restored quickly with expert
          revocation and compliance support.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>GST Revocation Services</h2>

          <h3>Restore Your Cancelled GST Registration</h3>

          <p>
            If your GST registration has been cancelled due to non-compliance
            or other reasons, our experts can help you file a revocation
            application, resolve pending issues, and restore your GST
            registration smoothly.
          </p>

          <h3>Our GST Revocation Services</h3>

          <div className="service-item">
            <h4>1. Revocation of Cancelled GST Registration</h4>
            <p>
              Complete assistance in preparing and filing GST revocation
              applications with proper documentation.
            </p>
          </div>

          <div className="service-item">
            <h4>2. Compliance Correction & Reactivation Support</h4>
            <p>
              Rectification of pending GST returns, compliance issues, and
              support for successful GST reactivation.
            </p>
          </div>

          <h3>Documents Required</h3>

          <ul className="service-list">
            <li>GST Registration Details</li>
            <li>PAN Card</li>
            <li>Aadhaar Card</li>
            <li>Pending GST Return Details</li>
            <li>Supporting Documents (if required)</li>
          </ul>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Restore GST Registration</li>
            <li>Resume Business Operations</li>
            <li>Avoid Future Compliance Issues</li>
            <li>Professional GST Assistance</li>
            <li>Fast & Hassle-Free Process</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="GST Revocation Services"
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

export default GSTRevocationServices;