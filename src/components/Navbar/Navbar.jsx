import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden lg:flex items-center justify-between bg-black px-8 py-3 w-full">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="The Tax Titans"
            className="w-[180px] xl:w-[220px] h-auto"
          />
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-5 xl:gap-8">
          <li>
            <Link
              to="/gst-registration"
              className="text-white font-semibold hover:text-[#ffdf4e] transition"
            >
              GST
            </Link>
          </li>

          <li>
            <Link
              to="/itr-filing"
              className="text-white font-semibold hover:text-[#ffdf4e] transition"
            >
              Income Tax
            </Link>
          </li>

          <li>
            <Link
              to="/company-incorporation"
              className="text-white font-semibold hover:text-[#ffdf4e] transition"
            >
              Company Secretary
            </Link>
          </li>

          <li>
            <Link
              to="/statutory-audit"
              className="text-white font-semibold hover:text-[#ffdf4e] transition"
            >
              Audit
            </Link>
          </li>

          <li>
            <Link
              to="/business-entity-registration"
              className="text-white font-semibold hover:text-[#ffdf4e] transition"
            >
              Registration
            </Link>
          </li>

          <li>
            <Link
              to="/part-time-accounting"
              className="text-white font-semibold hover:text-[#ffdf4e] transition"
            >
              Accounting
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-white font-semibold hover:text-[#ffdf4e] transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <a
          href="https://wa.me/919167590448"
          target="_blank"
          rel="noreferrer"
          className="bg-[#ffdf4e] text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-all whitespace-nowrap"
        >
          Get Free Consulting
        </a>
      </header>

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