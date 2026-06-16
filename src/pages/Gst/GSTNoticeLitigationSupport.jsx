import React, { useState } from "react";
import "./GSTNoticeLitigationSupport.css";
// import gstImage from "../../assets/gst/notice-litigation.png";
import gstImage from "../../assets/gst/registration.png";

const GSTNoticeLitigationSupport = () => {
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
*GST Notice & Litigation Support Enquiry*

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
        <h1>GST Notice & Litigation Support</h1>
        <p>
          Expert assistance for GST notices, assessments, scrutiny cases and
          litigation support.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>GST Notice & Litigation Support Services</h2>

          <h3>Professional GST Notice Handling & Representation</h3>

          <p>
            Receiving a GST notice can be stressful for businesses. Our GST
            professionals help you understand the notice, prepare accurate
            responses, communicate with authorities, and represent your case
            effectively.
          </p>

          <h3>Our GST Notice & Litigation Services</h3>

          <div className="service-item">
            <h4>1. GST Notices Reply & Handling</h4>
            <p>
              Drafting and submission of professional replies to GST notices.
            </p>
          </div>

          <div className="service-item">
            <h4>2. Departmental Communication</h4>
            <p>
              Complete support for communication with GST authorities.
            </p>
          </div>

          <div className="service-item">
            <h4>3. Assessment & Scrutiny Support</h4>
            <p>
              Assistance during GST assessments, audits, and scrutiny
              proceedings.
            </p>
          </div>

          <div className="service-item">
            <h4>4. Appeal Filing Assistance</h4>
            <p>
              Professional support for filing GST appeals and dispute
              resolution.
            </p>
          </div>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Professional Notice Handling</li>
            <li>Reduced Compliance Risks</li>
            <li>Proper Documentation Support</li>
            <li>Expert Representation</li>
            <li>Peace of Mind</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="GST Notice & Litigation Support"
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

export default GSTNoticeLitigationSupport;