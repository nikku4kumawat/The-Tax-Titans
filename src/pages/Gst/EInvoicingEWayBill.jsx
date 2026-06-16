import React, { useState } from "react";
import "./EInvoicingEWayBill.css";
import gstImage from "../../assets/gst/e-invoicing.png";

const EInvoicingEWayBill = () => {
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
*E-Invoicing & E-Way Bill Enquiry*

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
        <h1>E-Invoicing & E-Way Bill</h1>
        <p>
          Simplify GST compliance with professional E-Invoicing and E-Way Bill
          management services.
        </p>
      </section>

      <section className="service-wrapper">
        <div className="service-left">
          <h2>E-Invoicing & E-Way Bill Services</h2>

          <h3>Digital GST Compliance Made Easy</h3>

          <p>
            Our experts help businesses implement and manage E-Invoicing and
            E-Way Bill requirements efficiently. We ensure smooth compliance,
            accurate documentation, and hassle-free transportation of goods.
          </p>

          <h3>Our E-Invoicing & E-Way Bill Services</h3>

          <div className="service-item">
            <h4>1. E-Invoice Setup & Training</h4>
            <p>
              Complete setup of E-Invoicing systems along with staff training
              and implementation support.
            </p>
          </div>

          <div className="service-item">
            <h4>2. E-Way Bill Generation</h4>
            <p>
              Quick and accurate generation of E-Way Bills for movement of
              goods across locations.
            </p>
          </div>

          <div className="service-item">
            <h4>3. Compliance Management</h4>
            <p>
              Ongoing monitoring and management of E-Invoicing and E-Way Bill
              compliance requirements.
            </p>
          </div>

          <h3>Benefits</h3>

          <ul className="service-list">
            <li>Faster Invoice Processing</li>
            <li>Reduced Compliance Errors</li>
            <li>Seamless Goods Movement</li>
            <li>Improved Business Efficiency</li>
            <li>Complete GST Compliance</li>
          </ul>
        </div>

        <div className="service-right">
          <img
            src={gstImage}
            alt="E-Invoicing & E-Way Bill"
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

export default EInvoicingEWayBill;