import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

import aboutImg from "../../assets/about/about-tax.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">

        {/* Heading */}
        <h2 className="about-title">About Us</h2>

        <div className="about-wrapper">

          {/* Left Content */}
          <div className="about-content">

            <p>
              <strong>The Tax Titans </strong> is a professional services firm that provides a
              wide range of accounting, auditing, taxation, and financial
              advisory services to individuals, businesses, organizations,
              and government entities.
            </p>

            <p>
              With five years of professional experience in accounting and
              taxation, we bring a strong foundation in financial management,
              compliance, and strategic planning. Our expertise includes
              managing accounts, preparing tax returns, and advising clients
              on tax-saving opportunities to maximize efficiency while
              minimizing liabilities.
              <Link to="/about" className="read-more">
                Read More →
              </Link>
            </p>

          </div>

          {/* Right Image */}
          <div className="about-image">
            <img src={aboutImg} alt="About The Tax Titans" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;