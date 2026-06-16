import React, { useState } from "react";
import "./GSTComplianceAdvisory.css";
// import gstImage from "../../assets/gst/compliance-advisory.png";
import gstImage from "../../assets/gst/registration.png";

const GSTComplianceAdvisory = () => {
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
*GST Compliance & Advisory Enquiry*

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
        <h1>GST Compliance & Advisory</h1>
        <p>
          Expert GST advisory services to optimize tax planning and ensure
          complete compliance for your business.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>GST Compliance & Advisory Services</h2>

          <h3>Professional GST Guidance for Businesses</h3>

          <p>
            Our GST experts provide strategic advisory and compliance support
            to help businesses reduce tax risks, optimize Input Tax Credit,
            and stay fully compliant with GST regulations.
          </p>

          <h3>Our GST Compliance & Advisory Services</h3>

          <div className="service-item">
            <h4>1. Input Tax Credit (ITC) Optimization</h4>
            <p>
              Maximize eligible Input Tax Credit while ensuring compliance.
            </p>
          </div>

          <div className="service-item">
            <h4>2. GST Impact Analysis on Your Business</h4>
            <p>
              Analyze GST implications and identify opportunities for
              improvement.
            </p>
          </div>

          <div className="service-item">
            <h4>3. Tax Planning Strategies</h4>
            <p>
              Develop effective GST planning strategies to improve business
              efficiency.
            </p>
          </div>

          <div className="service-item">
            <h4>4. HSN/SAC Code Classification</h4>
            <p>
              Accurate classification of goods and services for proper GST
              compliance.
            </p>
          </div>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Optimized ITC Benefits</li>
            <li>Reduced GST Risks</li>
            <li>Better Tax Planning</li>
            <li>Improved Compliance</li>
            <li>Professional Expert Guidance</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="GST Compliance & Advisory"
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

export default GSTComplianceAdvisory;