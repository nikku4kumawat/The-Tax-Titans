import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../../assets/logo/logo.png";
import topbarBg from "../../assets/logo/topbar-bg.png";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const [gstOpen, setGstOpen] = useState(false);
const [incomeOpen, setIncomeOpen] = useState(false);
const [csOpen, setCsOpen] = useState(false);
const [auditOpen, setAuditOpen] = useState(false);
const [registrationOpen, setRegistrationOpen] = useState(false);
const [accountingOpen, setAccountingOpen] = useState(false);

  return (
    <>
      <div className="header-wrapper">

        <div className="header-logo">
           <Link to="/">
              <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="header-right">

          <div
            className="topbar"
            style={{
              backgroundImage: `url(${topbarBg})`
            }}
          >
            <div className="topbar-left">

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt />
                Maharashtra, Mumbai
              </a>

              <a href="tel:+919167590448">
                <FaPhoneAlt />
                +91 9167590448
              </a>

              <a href="mailto:thetaxtitans48@gmail.com">
                <FaEnvelope />
                thetaxtitans48@gmail.com
              </a>

            </div>

            <div className="topbar-right">

              <a href="https://wa.me/919167590448">
                <FaWhatsapp />
              </a>

              <a href="https://facebook.com">
                <FaFacebookF />
              </a>

              <a href="https://instagram.com">
                <FaInstagram />
              </a>

            </div>

          </div>

          <nav className="navbar">

           <ul className="nav-links">

  {/* GST SERVICES */}
  <li className="dropdown">
    <Link to="#">GST</Link>

    <ul className="dropdown-menu">
      <li><Link to="/gst-registration">GST Registration</Link></li>
      <li><Link to="/gst-return-filing">GST Return Filing</Link></li>
      <li><Link to="/gst-compliance-advisory">GST Compliance & Advisory</Link></li>
      <li><Link to="/gst-notice-litigation-support">GST Notice & Litigation Support</Link></li>
      <li><Link to="/gst-audit-reconciliation">GST Audit & Reconciliation</Link></li>
      <li><Link to="/e-invoicing-e-way-bill">E-Invoicing & E-Way Bill</Link></li>
      <li><Link to="/specialized-gst-services">Specialized GST Services</Link></li>
      <li><Link to="/final-return">Final Return</Link></li>
      <li><Link to="/gst-notice-support">GST Notice & Support</Link></li>
      <li><Link to="/gst-accounting-compliance-support">GST Revocation Services</Link></li>
      <li><Link to="/gst-revocation-services">GST Accounting & Compliance Support</Link></li>
    </ul>
  </li>

  {/* INCOME TAX SERVICES */}
  <li className="dropdown">
    <Link to="#">Income Tax</Link>

    <ul className="dropdown-menu">
      <li><Link to="/itr-filing">Income Tax Return (ITR) Filing</Link></li>
      <li><Link to="/tax-planning-advisory">Tax Planning & Advisory</Link></li>
      <li><Link to="/business-professional-taxation">Business & Professional Taxation</Link></li>
      <li><Link to="/income-tax-notice-scrutiny">Income Tax Notice & Scrutiny</Link></li>
      <li><Link to="/tds-compliance-services">TDS & Compliance Services</Link></li>
      <li><Link to="/capital-gains-investment-taxation">Capital Gains & Investment Taxation</Link></li>
      <li><Link to="/specialized-income-tax-services">Specialized Income Tax Services</Link></li>
      <li><Link to="/income-tax-return-services">Income Tax & Return Services</Link></li>
      <li><Link to="/tds-international-compliance">TDS & International Compliance</Link></li>
      <li><Link to="/business-compliance-services">Business Compliance Services</Link></li>
      <li><Link to="/certification-attestation">Certification & Attestation</Link></li>
      <li><Link to="/legal-documentation-services">Legal & Documentation Services</Link></li>
      <li><Link to="/corporate-regulatory-services">Corporate & Regulatory Services</Link></li>
    </ul>
  </li>

  {/* COMPANY SECRETARY SERVICES */}
  <li className="dropdown">
    <Link to="#">Company Secretary</Link>

    <ul className="dropdown-menu">
      <li><Link to="/company-incorporation">Company Incorporation</Link></li>
      <li><Link to="/roc-compliance-filings">ROC Compliance & Filings</Link></li>
      <li><Link to="/board-shareholder-compliance">Board & Shareholder Compliance</Link></li>
      <li><Link to="/corporate-legal-advisory">Corporate Legal Advisory</Link></li>
      <li><Link to="/company-changes-restructuring">Company Changes & Restructuring</Link></li>
      <li><Link to="/fema-rbi-compliance">FEMA & RBI Compliance</Link></li>
      <li><Link to="/specialized-cs-services">Specialized CS Services</Link></li>
    </ul>
  </li>

  {/* AUDIT SERVICES */}
  <li className="dropdown">
    <Link to="#">Audit</Link>

    <ul className="dropdown-menu">
      <li><Link to="/statutory-audit">Statutory Audit</Link></li>
      <li><Link to="/tax-audit">Tax Audit</Link></li>
      <li><Link to="/internal-audit">Internal Audit</Link></li>
      <li><Link to="/gst-audit">GST Audit</Link></li>
      <li><Link to="/stock-inventory-audit">Stock & Inventory Audit</Link></li>
    </ul>
  </li>

  {/* REGISTRATION SERVICES */}
  <li className="dropdown">
    <Link to="#">Registration</Link>

    <ul className="dropdown-menu">
      <li><Link to="/business-entity-registration">Business Entity Registration</Link></li>
      <li><Link to="/government-tax-registrations">Government Tax Registrations</Link></li>
      <li><Link to="/startup-special-registrations">Startup & Special Registrations</Link></li>
      <li><Link to="/ngo-trust-registrations">NGO & Trust Registrations</Link></li>
      <li><Link to="/intellectual-property-registrations">Intellectual Property Registrations</Link></li>
      <li><Link to="/other-licenses-registrations">Other Licenses & Registrations</Link></li>
    </ul>
  </li>

  {/* ACCOUNTING SERVICES */}
  <li className="dropdown">
    <Link to="#">Accounting</Link>

    <ul className="dropdown-menu">
      <li><Link to="/part-time-accounting">Part-Time Accounting</Link></li>
      <li><Link to="/weekly-accounting">Weekly Accounting</Link></li>
      <li><Link to="/one-time-accounting">One-Time Accounting</Link></li>
      <li><Link to="/virtual-accounting">Virtual Accounting</Link></li>
      <li><Link to="/outsourced-accounting">Outsourced Accounting</Link></li>
      <li><Link to="/contractual-accounting">Contractual Accounting</Link></li>
      <li><Link to="/project-based-accounting">Project-Based Accounting</Link></li>
      <li><Link to="/monthly-accounting">Monthly Accounting</Link></li>
      <li><Link to="/quarterly-accounting">Quarterly Accounting</Link></li>
    </ul>
  </li>

  {/* CONTACT */}
  <li>
    <Link to="/contact">Contact</Link>
  </li>

</ul>
            <a
              href="https://wa.me/919167590448"
              target="blank"
              className="consult-btn"
            >
              Get Free Consulting
            </a>

          </nav>

        </div>

      </div>



{/* MOBILE NAVBAR */}

<div className="mobile-navbar">

  <div className="mobile-logo">
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  </div>

  <div
    className="menu-icon"
    onClick={() => setMenuOpen(true)}
  >
    <FaBars />
  </div>

</div>

{/* MOBILE SIDEBAR */}

<div className={`mobile-sidebar ${menuOpen ? "active" : ""}`}>

  <div className="mobile-sidebar-header">

    <div className="mobile-sidebar-logo">
      <img src={logo} alt="Logo" />
    </div>

    <div
      className="mobile-close"
      onClick={() => setMenuOpen(false)}
    >
      <FaTimes />
    </div>

  </div>

  {/* GST SERVICES */}

  <div
    className="mobile-service-title"
    onClick={() => setGstOpen(!gstOpen)}
  >
    <span>GST Services</span>
    <span>{gstOpen ? "-" : "+"}</span>
  </div>

  {gstOpen && (
    <div className="mobile-dropdown">

      <Link to="/gst-registration" onClick={() => setMenuOpen(false)}>GST Registration</Link>

      <Link to="/gst-return-filing" onClick={() => setMenuOpen(false)}>GST Return Filing</Link>

      <Link to="/gst-compliance-advisory" onClick={() => setMenuOpen(false)}>GST Compliance & Advisory</Link>

      <Link to="/gst-notice-litigation-support" onClick={() => setMenuOpen(false)}>GST Notice & Litigation Support</Link>

      <Link to="/gst-audit-reconciliation" onClick={() => setMenuOpen(false)}>GST Audit & Reconciliation</Link>

      <Link to="/e-invoicing-e-way-bill" onClick={() => setMenuOpen(false)}>E-Invoicing & E-Way Bill</Link>

      <Link to="/specialized-gst-services" onClick={() => setMenuOpen(false)}>Specialized GST Services</Link>

      <Link to="/final-return" onClick={() => setMenuOpen(false)}>Final Return</Link>

      <Link to="/gst-notice-support" onClick={() => setMenuOpen(false)}>GST Notice & Support</Link>

      <Link to="/gst-accounting-compliance-support" onClick={() => setMenuOpen(false)}>GST Accounting & Compliance Support</Link>

      <Link to="/gst-revocation-services" onClick={() => setMenuOpen(false)}>GST Revocation Services</Link>

    </div>
  )}

  {/* INCOME TAX */}

  <div
    className="mobile-service-title"
    onClick={() => setIncomeOpen(!incomeOpen)}
  >
    <span>Income Tax Services</span>
    <span>{incomeOpen ? "-" : "+"}</span>
  </div>

  {incomeOpen && (
    <div className="mobile-dropdown">

      <Link to="/itr-filing" onClick={() => setMenuOpen(false)}>Income Tax Return (ITR) Filing</Link>

      <Link to="/tax-planning-advisory" onClick={() => setMenuOpen(false)}>Tax Planning & Advisory</Link>

      <Link to="/business-professional-taxation" onClick={() => setMenuOpen(false)}>Business & Professional Taxation</Link>

      <Link to="/income-tax-notice-scrutiny" onClick={() => setMenuOpen(false)}>Income Tax Notice & Scrutiny</Link>

      <Link to="/tds-compliance-services" onClick={() => setMenuOpen(false)}>TDS & Compliance Services</Link>

      <Link to="/capital-gains-investment-taxation" onClick={() => setMenuOpen(false)}>Capital Gains & Investment Taxation</Link>

    </div>
  )}

  {/* COMPANY SECRETARY */}

  <div
    className="mobile-service-title"
    onClick={() => setCsOpen(!csOpen)}
  >
    <span>Company Secretary Services</span>
    <span>{csOpen ? "-" : "+"}</span>
  </div>

  {csOpen && (
    <div className="mobile-dropdown">

      <Link to="/company-incorporation" onClick={() => setMenuOpen(false)}>Company Incorporation</Link>

      <Link to="/roc-compliance-filings" onClick={() => setMenuOpen(false)}>ROC Compliance & Filings</Link>

      <Link to="/board-shareholder-compliance" onClick={() => setMenuOpen(false)}>Board & Shareholder Compliance</Link>

      <Link to="/corporate-legal-advisory" onClick={() => setMenuOpen(false)}>Corporate Legal Advisory</Link>

      <Link to="/company-changes-restructuring" onClick={() => setMenuOpen(false)}>Company Changes & Restructuring</Link>

      <Link to="/fema-rbi-compliance" onClick={() => setMenuOpen(false)}>FEMA & RBI Compliance</Link>

      <Link to="/specialized-cs-services" onClick={() => setMenuOpen(false)}>Specialized CS Services</Link>

    </div>
  )}

  {/* AUDIT */}

  <div
    className="mobile-service-title"
    onClick={() => setAuditOpen(!auditOpen)}
  >
    <span>Audit Services</span>
    <span>{auditOpen ? "-" : "+"}</span>
  </div>

  {auditOpen && (
    <div className="mobile-dropdown">

      <Link to="/statutory-audit" onClick={() => setMenuOpen(false)}>Statutory Audit</Link>

      <Link to="/tax-audit" onClick={() => setMenuOpen(false)}>Tax Audit</Link>

      <Link to="/internal-audit" onClick={() => setMenuOpen(false)}>Internal Audit</Link>

      <Link to="/gst-audit" onClick={() => setMenuOpen(false)}>GST Audit</Link>

      <Link to="/stock-inventory-audit" onClick={() => setMenuOpen(false)}>Stock & Inventory Audit</Link>

    </div>
  )}

  {/* REGISTRATION */}

  <div
    className="mobile-service-title"
    onClick={() => setRegistrationOpen(!registrationOpen)}
  >
    <span>Registration Services</span>
    <span>{registrationOpen ? "-" : "+"}</span>
  </div>

  {registrationOpen && (
    <div className="mobile-dropdown">

      <Link to="/business-entity-registration" onClick={() => setMenuOpen(false)}>Business Entity Registration</Link>

      <Link to="/government-tax-registrations" onClick={() => setMenuOpen(false)}>Government Tax Registrations</Link>

      <Link to="/startup-special-registrations" onClick={() => setMenuOpen(false)}>Startup & Special Registrations</Link>

      <Link to="/ngo-trust-registrations" onClick={() => setMenuOpen(false)}>NGO & Trust Registrations</Link>

      <Link to="/intellectual-property-registrations" onClick={() => setMenuOpen(false)}>Intellectual Property Registrations</Link>

      <Link to="/other-licenses-registrations" onClick={() => setMenuOpen(false)}>Other Licenses & Registrations</Link>

    </div>
  )}

  {/* ACCOUNTING */}

  <div
    className="mobile-service-title"
    onClick={() => setAccountingOpen(!accountingOpen)}
  >
    <span>Accounting Services</span>
    <span>{accountingOpen ? "-" : "+"}</span>
  </div>

  {accountingOpen && (
    <div className="mobile-dropdown">

      <Link to="/part-time-accounting" onClick={() => setMenuOpen(false)}>Part-Time Accounting</Link>

      <Link to="/weekly-accounting" onClick={() => setMenuOpen(false)}>Weekly Accounting</Link>

      <Link to="/one-time-accounting" onClick={() => setMenuOpen(false)}>One-Time Accounting</Link>

      <Link to="/virtual-accounting" onClick={() => setMenuOpen(false)}>Virtual Accounting</Link>

      <Link to="/outsourced-accounting" onClick={() => setMenuOpen(false)}>Outsourced Accounting</Link>

      <Link to="/contractual-accounting" onClick={() => setMenuOpen(false)}>Contractual Accounting</Link>

      <Link to="/project-based-accounting" onClick={() => setMenuOpen(false)}>Project-Based Accounting</Link>

      <Link to="/monthly-accounting" onClick={() => setMenuOpen(false)}>Monthly Accounting</Link>

      <Link to="/quarterly-accounting" onClick={() => setMenuOpen(false)}>Quarterly Accounting</Link>

    </div>
  )}

  <Link
    className="mobile-contact-link"
    to="/contact"
    onClick={() => setMenuOpen(false)}
  >
    Contact
  </Link>

</div>
  


    </>
  );
};

export default Navbar;