import React, { useState } from "react";
import {
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaCalculator,
  FaBuilding,
} from "react-icons/fa";

import "./Hero.css";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
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

    const whatsappNumber = "919167590448"; 

    const text = `
*New Consultation Request*

👤 Name: ${formData.name}

📞 Mobile: ${formData.mobile}

📧 Email: ${formData.email}

📋 Service: ${formData.service}

💬 Message: ${formData.message}
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      mobile: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <span className="hero-tag">The Tax Titans</span>

          <h1>
            GST, Tax & Compliance
            <span> Solutions</span>
          </h1>

          <p>
            Professional GST, Income Tax, Accounting, Registration, 
            and Compliance Services for Individuals, Startups, and Businesses.
          </p>

          <div className="hero-features">
            <div className="feature">
              <FaCheckCircle />
              <span>Expert Tax Assistance</span>
            </div>

            <div className="feature">
              <FaFileInvoiceDollar />
              <span>GST & Compliance Solutions</span>
            </div>

            <div className="feature">
              <FaCalculator />
              <span>Accurate Financial Reporting</span>
            </div>

            <div className="feature">
              <FaBuilding />
              <span>Trusted Professional Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="hero-form">
          <h3>Get in touch with us</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              required
              value={formData.mobile}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option>GST Registration</option>
              <option>GST Compliance</option>
              <option>GST Advisory</option>
              <option>GST Audit & Investigation Support</option>
              <option>GST Refunds & Rebates</option>
              <option>Tax Planning & Preparation</option>
              <option>Company Incorporation & Formation</option>
              <option>Contract Drafting & Review</option>
              <option>Legal Due Diligence</option>
              <option>Other</option>
            </select>

            <textarea
              rows="4"
              name="message"
              placeholder="Write your requirement"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;