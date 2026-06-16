import React, { useState } from "react";
import "./FinalReturn.css";
// import gstImage from "../../assets/gst/final-return.png";
import gstImage from "../../assets/gst/registration.png";

const FinalReturn = () => {
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
*Final Return (GSTR-10) Enquiry*

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
        <h1>Final Return (GSTR-10)</h1>
        <p>
          Professional assistance for filing Final Return (GSTR-10) after GST
          cancellation and ensuring proper business closure compliance.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>Final Return (GSTR-10) Services</h2>

          <h3>GST Closure Compliance Made Simple</h3>

          <p>
            Businesses whose GST registration has been cancelled are required
            to file Final Return (GSTR-10). Our experts help you complete the
            process accurately and ensure compliance with GST regulations.
          </p>

          <h3>Our Final Return Services</h3>

          <div className="service-item">
            <h4>1. Filing After GST Cancellation</h4>
            <p>
              Preparation and filing of GSTR-10 after cancellation of GST
              registration.
            </p>
          </div>

          <div className="service-item">
            <h4>2. Closure Compliance Support</h4>
            <p>
              Complete assistance in fulfilling all GST closure and compliance
              requirements.
            </p>
          </div>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Proper GST Closure Compliance</li>
            <li>Avoid Penalties & Notices</li>
            <li>Accurate Filing Support</li>
            <li>Professional Guidance</li>
            <li>Hassle-Free Process</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="Final Return GSTR-10"
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

export default FinalReturn;