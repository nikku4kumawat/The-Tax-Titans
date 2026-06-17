import React from "react";
import { NavLink, Link } from "react-router-dom";

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
  return (
    <>
      <header className="hidden lg:flex bg-black w-full h-[125px]">

        {/* LEFT LOGO */}
        <div className="w-[320px] flex items-center justify-center pl-6">

          <Link to="/">
            <img
              src={logo}
              alt="The Tax Titans"
              className="w-[250px] object-contain"
            />
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col">

          {/* TOP BAR */}
          <div
            className="h-[50px] px-10 flex items-center justify-between"
            style={{
              backgroundImage: `url(${topbarBg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >

            {/* LEFT */}
            <div className="flex items-center gap-10 text-black text-[15px] font-semibold">

              <a
                href="https://maps.google.com/?q=Mumbai,Maharashtra"
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

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-6 text-[22px] text-black">

              <a
                href="https://wa.me/919167590448"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* NAVBAR */}
          <div className="h-[75px] flex items-center justify-between px-10">

            {/* MENU */}
            <ul className="flex items-center gap-10 text-white font-semibold text-[18px]">

              {[
                ["GST", "/gst-registration"],
                ["Income Tax", "/itr-filing"],
                ["Company Secretary", "/company-incorporation"],
                ["Audit", "/statutory-audit"],
                ["Registration", "/business-entity-registration"],
                ["Accounting", "/part-time-accounting"],
                ["Contact", "/contact"],
              ].map(([title, link]) => (
                <li key={title}>
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ffdf4e]"
                        : "hover:text-[#ffdf4e] duration-300"
                    }
                  >
                    {title}
                  </NavLink>
                </li>
              ))}

            </ul>

            {/* BUTTON */}
            <a
              href="https://wa.me/919167590448"
              target="_blank"
              rel="noreferrer"
              className="
              bg-[#ffdf4e]
              text-black
              px-10
              py-4
              rounded-full
              font-bold
              text-[20px]
              hover:scale-105
              duration-300
              whitespace-nowrap
              "
            >
              Get Free Consulting
            </a>

          </div>

        </div>

      </header>
    </>
  );
};

export default Navbar;