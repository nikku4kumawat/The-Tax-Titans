import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import topbarBg from "../../assets/logo/topbar-bg.png";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
<div className="w-full">

  {/* TOP BAR */}
  <div
    className="h-[50px] flex items-center justify-between px-10"
    style={{
      backgroundImage: `url(${topbarBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Left */}
    <div className="flex items-center gap-8 text-black font-semibold text-sm">

      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2"
      >
        <FaMapMarkerAlt />
        Maharashtra, Mumbai
      </a>

      <a
        href="tel:+919167590448"
        className="flex items-center gap-2"
      >
        <FaPhoneAlt />
        +91 9167590448
      </a>

      <a
        href="mailto:thetaxtitans48@gmail.com"
        className="flex items-center gap-2"
      >
        <FaEnvelope />
        thetaxtitans48@gmail.com
      </a>

    </div>

    {/* Right */}
    <div className="flex items-center gap-5 text-black text-xl">

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

  {/* MAIN NAVBAR */}
  <div className="bg-black h-[90px] flex items-center justify-between px-8">

    {/* Logo */}
    <Link to="/">
      <img
        src={logo}
        alt="Logo"
        className="w-[250px]"
      />
    </Link>

    {/* Menu */}
    <ul className="flex items-center gap-8 text-white font-semibold">

      <li>
        <Link to="/gst-registration">GST</Link>
      </li>

      <li>
        <Link to="/itr-filing">Income Tax</Link>
      </li>

      <li>
        <Link to="/company-incorporation">
          Company Secretary
        </Link>
      </li>

      <li>
        <Link to="/statutory-audit">Audit</Link>
      </li>

      <li>
        <Link to="/business-entity-registration">
          Registration
        </Link>
      </li>

      <li>
        <Link to="/part-time-accounting">
          Accounting
        </Link>
      </li>

      <li>
        <Link to="/contact">
          Contact
        </Link>
      </li>

    </ul>

    {/* Button */}
    <a
      href="https://wa.me/919167590448"
      target="_blank"
      rel="noreferrer"
      className="bg-[#ffdf4e] text-black px-8 py-4 rounded-full font-bold"
    >
      Get Free Consulting
    </a>

  </div>

</div>


      {/* Mobile Navbar */}
      <header className="lg:hidden bg-black px-4 py-3 flex items-center justify-between">

        <Link to="/">
          <img
            src={logo}
            alt="The Tax Titans"
            className="w-[160px]"
          />
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl"
        >
          <FaBars />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white z-50 transition-all duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">

          <img
            src={logo}
            alt="The Tax Titans"
            className="w-[140px]"
          />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col">

          <Link
            to="/gst-registration"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-4 border-b font-medium"
          >
            GST
          </Link>

          <Link
            to="/itr-filing"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-4 border-b font-medium"
          >
            Income Tax
          </Link>

          <Link
            to="/company-incorporation"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-4 border-b font-medium"
          >
            Company Secretary
          </Link>

          <Link
            to="/statutory-audit"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-4 border-b font-medium"
          >
            Audit
          </Link>

          <Link
            to="/business-entity-registration"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-4 border-b font-medium"
          >
            Registration
          </Link>

          <Link
            to="/part-time-accounting"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-4 border-b font-medium"
          >
            Accounting
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-4 border-b font-medium"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/919167590448"
            target="_blank"
            rel="noreferrer"
            className="m-5 text-center bg-[#ffdf4e] text-black py-3 rounded-full font-bold"
          >
            Get Free Consulting
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;