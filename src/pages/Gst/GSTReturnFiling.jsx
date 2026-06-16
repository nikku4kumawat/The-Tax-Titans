import React, { useState } from "react";
import "./GSTReturnFiling.css";
// import gstImage from "../../assets/gst/return-filing.png";
import gstImage from "../../assets/gst/registration.png";

const GSTReturnFiling = () => {
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
*GST Return Filing Enquiry*

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
        <h1>GST Return Filing</h1>
        <p>
          Accurate and timely GST return filing services to keep your business
          compliant and penalty-free.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>GST Return Filing Services</h2>

          <h3>Professional GST Return Filing Support</h3>

          <p>
            We provide complete GST return filing services for businesses of all
            sizes. Our experts ensure accurate filing and timely compliance.
          </p>

          <h3>Our GST Return Filing Services</h3>

          <div className="service-item">
            <h4>1. GSTR-1, GSTR-3B, GSTR-4, GSTR-9 & GSTR-9C</h4>
            <p>Complete preparation and filing support.</p>
          </div>

          <div className="service-item">
            <h4>2. Monthly / Quarterly Filing</h4>
            <p>Regular GST return filing assistance.</p>
          </div>

          <div className="service-item">
            <h4>3. Nil Return Filing</h4>
            <p>Timely filing even when there are no transactions.</p>
          </div>

          <div className="service-item">
            <h4>4. Late Return & Penalty Management</h4>
            <p>Support for pending returns and penalty reduction.</p>
          </div>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Avoid Late Fees & Penalties</li>
            <li>Maintain GST Compliance</li>
            <li>Accurate Tax Reporting</li>
            <li>Professional Support</li>
            <li>Timely Filing</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="GST Return Filing"
            className="service-image"
          />

          <div className="service-form">
            <h3>Get Free Consultation</h3>

            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
              <input type="text" name="phone" placeholder="Mobile Number" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
              <textarea rows="5" name="message" placeholder="Write your requirement" onChange={handleChange} required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTReturnFiling;