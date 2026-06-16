import React, { useState } from "react";
import "./GSTNoticeSupport.css";
// import gstImage from "../../assets/gst/notice-support.png";
import gstImage from "../../assets/gst/registration.png";

const GSTNoticeSupport = () => {
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
*GST Notice & Support Enquiry*

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
        <h1>GST Notice & Support</h1>
        <p>
          Professional assistance for GST tax notices, reply drafting, and
          communication with GST authorities.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>GST Notice & Support Services</h2>

          <h3>Expert Assistance for GST Notices</h3>

          <p>
            Receiving a GST notice can be challenging for businesses. Our GST
            experts help you understand the notice, prepare proper responses,
            and communicate effectively with GST departments to ensure smooth
            resolution.
          </p>

          <h3>Our GST Notice Support Services</h3>

          <div className="service-item">
            <h4>1. GST Tax Notice Handling</h4>
            <p>
              Complete assistance in reviewing, understanding, and handling GST
              notices issued by the department.
            </p>
          </div>

          <div className="service-item">
            <h4>2. Reply Drafting & Submission</h4>
            <p>
              Professional drafting and submission of responses to GST notices.
            </p>
          </div>

          <div className="service-item">
            <h4>3. Department Communication</h4>
            <p>
              Representation and communication support with GST authorities for
              smooth issue resolution.
            </p>
          </div>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Professional Notice Handling</li>
            <li>Timely Response Submission</li>
            <li>Reduced Compliance Risks</li>
            <li>Expert GST Guidance</li>
            <li>Stress-Free Resolution Process</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="GST Notice Support"
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

export default GSTNoticeSupport;