import React, { useState } from "react";
import "./GSTRegistration.css";
import gstImage from "../../assets/gst/registration.png";

const GSTRegistration = () => {
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
*GST Registration Enquiry*

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

      {/* Hero */}
      <section className="service-hero">
        <h1>GST Registration</h1>
        <p>
          Start your business compliance journey with fast and hassle-free GST
          registration services.
        </p>
      </section>

      {/* Content */}
      <section className="service-wrapper">
        <div className="service-left">

          <h2>GST Registration Services</h2>

          <h3>Get Your GST Registration Done Quickly & Professionally</h3>

          <p>
            GST Registration is an essential requirement for businesses
            exceeding prescribed turnover limits or engaged in specific taxable
            activities. Our experts help you complete the entire registration
            process smoothly with proper documentation and compliance support.
          </p>

          <h3>What is GST Registration?</h3>

          <p>
            GST Registration is the process of obtaining a GST Identification
            Number (GSTIN) from the government. It allows businesses to collect
            GST from customers, claim Input Tax Credit (ITC), and operate
            legally under GST regulations.
          </p>

          <h3>Our GST Services</h3>

          <div className="service-item">
            <h4>1. New GST Registration</h4>
            <p>
              Complete assistance for Regular and Composition GST Registration.
            </p>
          </div>

          <div className="service-item">
            <h4>2. Amendment & Modification</h4>
            <p>
              Update business details such as address, mobile number, partner,
              director and other GST information.
            </p>
          </div>

          <div className="service-item">
            <h4>3. Voluntary Registration</h4>
            <p>
              Register voluntarily to avail GST benefits and improve business
              credibility.
            </p>
          </div>

          <div className="service-item">
            <h4>4. LUT Filing</h4>
            <p>
              Letter of Undertaking filing services for exporters without IGST
              payment.
            </p>
          </div>

          <h3>Documents Required for GST Registration</h3>

          <ul className="service-list">
            <li>PAN Card</li>
            <li>Aadhaar Card</li>
            <li>Business Address Proof</li>
            <li>Bank Account Details</li>
            <li>Passport Size Photograph</li>
          </ul>

          <h3>Benefits of GST Registration</h3>

          <ul className="service-list">
            <li>Legal Recognition of Business</li>
            <li>Input Tax Credit (ITC) Benefits</li>
            <li>Improved Business Credibility</li>
            <li>Expand Business Across India</li>
            <li>Easy Participation in E-Commerce Platforms</li>
            <li>Better Tax Compliance</li>
          </ul>
        </div>

        {/* Right Sidebar */}
        <div className="service-right">

          <img
            src={gstImage}
            alt="GST Registration"
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

              <button type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTRegistration;