import React from "react";
import "./About.css";

import img1 from "../../assets/about/about1.png";
import img2 from "../../assets/about/about2.png";
import img3 from "../../assets/about/about3.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper">

          {/* Left Content */}
          <div className="about-content">
            <span className="about-tag">ABOUT US</span>

            <h2>
              Trusted Accounting & Taxation
              
              Experts For Your Business
            </h2>

            <p>
              <strong>The Tax Titans</strong> is a professional services firm
              that provides a wide range of accounting, auditing, taxation, and
              financial advisory services to individuals, businesses,
              organizations, and government entities.
            </p>

            <p>
              With five years of professional experience in accounting and
              taxation, we bring a strong foundation in financial management,
              compliance, and strategic planning. Our expertise includes
              managing accounts, preparing tax returns, and advising clients on
              tax-saving opportunities to maximize efficiency while minimizing
              liabilities.
            </p>

            <p>
              We are highly skilled in analyzing complex financial data,
              preparing accurate reports, and ensuring compliance with all
              applicable laws and regulations. Our commitment to precision and
              transparency helps clients make informed financial decisions with
              confidence.
            </p>
          </div>

          {/* Right Images */}
          <div className="about-images">
            <div className="image-grid">

              <div className="left-image">
                <img src={img1} alt="Tax Consultation" />
              </div>

              <div className="right-images">
                <div className="top-image">
                  <img src={img2} alt="Accounting Services" />
                </div>

                <div className="bottom-image">
                  <img src={img3} alt="Business Advisory" />
                </div>
              </div>

            </div>

            {/* Shapes */}
            <div className="shape shape-one"></div>
            <div className="shape shape-two"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;