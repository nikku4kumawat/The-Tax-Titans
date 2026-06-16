import React, { useState } from "react";
import "./SpecializedGSTServices.css";
import gstImage from "../../assets/gst/specialized-gst.png";

const SpecializedGSTServices = () => {
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
*Specialized GST Services Enquiry*

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
        <h1>Specialized GST Services</h1>
        <p>
          Industry-specific GST solutions tailored to meet unique business
          requirements and compliance needs.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>Specialized GST Services</h2>

          <h3>Customized GST Solutions for Every Business</h3>

          <p>
            Different industries face different GST challenges. Our experts
            provide specialized GST services designed for freelancers,
            e-commerce sellers, service providers, exporters, and businesses
            operating across multiple states.
          </p>

          <h3>Our Specialized GST Services</h3>

          <div className="service-item">
            <h4>1. GST for Freelancers & Influencers</h4>
            <p>
              GST registration, return filing, and compliance support for
              freelancers, consultants, and digital influencers.
            </p>
          </div>

          <div className="service-item">
            <h4>2. GST for E-Commerce Sellers</h4>
            <p>
              GST compliance solutions for Amazon, Flipkart, Meesho, and other
              online marketplace sellers.
            </p>
          </div>

          <div className="service-item">
            <h4>3. GST for Service-Based Businesses</h4>
            <p>
              Professional GST advisory and compliance support for service
              providers across industries.
            </p>
          </div>

          <div className="service-item">
            <h4>4. Multi-State GST Management</h4>
            <p>
              Centralized GST compliance management for businesses operating in
              multiple states.
            </p>
          </div>

          <div className="service-item">
            <h4>5. ITC Refund Claims</h4>
            <p>
              Assistance with GST refund applications and Input Tax Credit
              refund claims.
            </p>
          </div>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Industry-Specific Expertise</li>
            <li>Better GST Compliance</li>
            <li>Reduced Tax Risks</li>
            <li>Optimized GST Benefits</li>
            <li>Professional End-to-End Support</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="Specialized GST Services"
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

export default SpecializedGSTServices;