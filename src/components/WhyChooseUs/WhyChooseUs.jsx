import React from "react";
import "./WhyChooseUs.css";
import { FaCheckCircle } from "react-icons/fa";
import whyChooseImg from "../../assets/about/whychooseus.png";

const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <div className="why-choose-wrapper">

          {/* Left Image */}
          <div className="why-image">
            <img src={whyChooseImg} alt="Why Choose Us" />
          </div>

          {/* Right Content */}
          <div className="why-content">
            <span className="section-subtitle">
              Why Clients Choose Us
            </span>

            <h2>
              Our Unique Approach
            </h2>

            <p>
              Most firms follow a one-size-fits-all approach to GST filing.
              We don't. We take time to understand your business and provide
              customized GST solutions that help you stay compliant while
              maximizing efficiency and reducing risks.
            </p>

            <div className="why-list">
              <div className="why-item">
                <FaCheckCircle />
                <span>We understand your business model first</span>
              </div>

              <div className="why-item">
                <FaCheckCircle />
                <span>We identify risk areas & tax-saving opportunities</span>
              </div>

              <div className="why-item">
                <FaCheckCircle />
                <span>We provide tailored GST strategies, not just compliance</span>
              </div>

              <div className="why-item">
                <FaCheckCircle />
                <span>We offer ongoing support, not just deadline-based service</span>
              </div>

              <div className="why-item">
                <FaCheckCircle />
                <span>Customized solutions for traders, freelancers, startups & service providers</span>
              </div>
            </div>

            <a href="/contact" className="why-btn">
              Explore Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;