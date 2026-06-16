import React, { useState } from "react";
import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    city: "",
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

    const message = `
📌 NEW TAX ENQUIRY

👤 Name : ${formData.name}

📱 Mobile : ${formData.mobile}

📧 Email : ${formData.email}

💼 Service : ${formData.service}

📍 City : ${formData.city}

📝 Message :
${formData.message}
`;

    const whatsappNumber = "919167590448";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="contact-section">
      <div className="container">

        <div className="contact-heading">
            <h2>Contact Us</h2>
            <p>
              Have questions about Income Tax, GST, Company Registration, or Legal
              Services? Our experts are here to help. Get in touch with us today for
              reliable and professional guidance tailored to your needs.
            </p>
        </div>

        <div className="contact-wrapper">

          {/* LEFT SIDE */}

          <div className="contact-left">

            {/* Address */}
            <div className="info-card address-card">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Office Address</h3>

                <p>
                  Suleman Building 2nd Floor Room No.26,
                  Undariya Street Chowki Mohallah,
                  Nagpada Mumbai Central,
                  Maharashtra 400008
                </p>
              </div>
            </div>

            {/* Call + Email */}

            <div className="contact-info-row">

              <div className="info-card small-card">
                <div className="icon-box">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3>Call Us</h3>
                  <p>+91 9167590448</p>
                </div>
              </div>

              <div className="info-card small-card">
                <div className="icon-box">
                  <FaEnvelope />
                </div>

                <div>
                  <h3>Email Us</h3>
                  <p>thetaxtitans48@gmail.com</p>
                </div>
              </div>

            </div>

            {/* Map */}

            <div className="contact-image">
              <iframe
                title="office-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14122.841879741853!2d72.82413750936963!3d18.968497934490973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3e4dfc4ac7%3A0x5cc4ed607e269ef2!2sSuleman%20Building%2C%20Nagpada%2C%20Mumbai%2C%20Maharashtra%20400008!5e0!3m2!1sen!2sin!4v1781326328588!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="contact-form-box">

            <span className="small-title">
              GET IN TOUCH
            </span>

            <h2>
              Income Tax & GST Consultation
            </h2>

            <p>
              Fill out the form below and our tax experts
              will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} autoComplete="off">

              <div className="form-grid">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  required
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                />

                <select
                  name="city"
                  required
                  onChange={handleChange}
                >
                  <option value="">
                    Select City
                  </option>

                  <option>Jaipur</option>
                  <option>Ajmer</option>
                  <option>Jodhpur</option>
                  <option>Udaipur</option>
                  <option>Kota</option>
                  <option>Churu</option>
                  <option>Nagaur</option>
                  <option>Sikar</option>
                  <option>Other</option>
                </select>

                <select
                  name="service"
                  required
                  onChange={handleChange}
                >
                  <option value="">
                    Select Service
                  </option>

                  <option>GST Advisory</option>
                  <option>GST Registration</option>
                  <option>GST Compliance</option>
                  <option>Tax Planning & Preparation</option>
                  <option>Bookkeeping</option>
                  <option>GST Refunds & Rebates</option>
                  <option>Contract Drafting & Review</option>
                  <option>Other</option>
                </select>

              </div>

              <textarea
                rows="4"
                name="message"
                placeholder="Write your requirement..."
                onChange={handleChange}
              ></textarea>

              <button type="submit">
                Send on WhatsApp
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;