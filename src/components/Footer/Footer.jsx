import { Link } from "react-router-dom";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/logo/logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-col">
          <img
            src={logo}
            alt="The Tax Titan"
            className="footer-logo"
          />

          <p className="footer-text">
            Professional Income Tax, GST Registration, Tax Planning &
            Business Compliance Services.
          </p>

          <div className="footer-social">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919167590448"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>
        {/* End Logo Section */}

        {/* Quick Links */}
        <div className="footer-col footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/gst-registration">
            GST Registration
          </Link>

          <Link to="/tax-planning-preparation">
            Tax Planning & Preparation
          </Link>

          <Link to="/contact">Contact</Link>
        </div>
        {/* End Quick Links */}

        {/* Services */}
        <div className="footer-col footer-links">
          <h3>Services</h3>

          <Link to="/gst-compliance">
            GST Compliance
          </Link>

          <Link to="/gst-advisory">
            GST Advisory
          </Link>

          <Link to="/gst-audit">
            GST Audit & Investigation Support
          </Link>

          <Link to="/gst-refunds">
            GST Refunds & Rebates
          </Link>

          <Link to="/company-incorporation">
            Company Incorporation & Formation
          </Link>

          <Link to="/contract-drafting">
            Contract Drafting & Review
          </Link>

          <Link to="/legal-due-diligence">
            Legal Due Diligence
          </Link>
        </div>
        {/* End Services */}

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>

          <a
            href="https://maps.google.com/?q=Suleman Building 2nd Floor Room No.26 Undariya Street Chowki Mohallah Nagpada Mumbai Central Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaMapMarkerAlt />
            <span>
              Suleman Building 2nd Floor Room No.26
              <br />
              Undariya Street Chowki Mohallah
              <br />
              Nagpada Mumbai Central
              <br />
              Maharashtra 400008
            </span>
          </a>

          <a
            href="tel:+919167590448"
            className="contact-item"
          >
            <FaPhoneAlt />
            <span>+91 9167590448</span>
          </a>

          <a
            href="mailto:thetaxtitans48@gmail.com"
            className="contact-item"
          >
            <FaEnvelope />
            <span>thetaxtitans48@gmail.com</span>
          </a>
        </div>
        {/* End Contact */}

      </div>
      {/* End footer-container */}

      {/* Bottom Copyright */}
      {/* <div className="footer-bottom">
        © 2026 Taxosure. All rights reserved.
      </div> */}
      <div className="footer-bottom">
  © 2026 The Tax Titans. All Rights Reserved. 
  Developed with passion by{" "}
  <a
    href="https://agilesolutions.co.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="developer-link"
  >
    Agile Edtech Solutions Pvt. Ltd.
  </a>
</div>

    </footer>
  );
};

export default Footer;