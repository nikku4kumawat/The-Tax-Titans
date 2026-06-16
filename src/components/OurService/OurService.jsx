import React from "react";
import "./OurService.css";

import {
  FaBook,
  FaFileInvoiceDollar,
  FaCalculator,
  FaPercent,
  FaClipboardCheck,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPercent />,
    title: "GST Services",
    description:
      "GST registration, return filing, compliance, notices, audits, and GST advisory services for businesses of all sizes.",
    link: "/gst-services",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Income Tax Services",
    description:
      "ITR filing, tax planning, TDS compliance, capital gains taxation, and income tax notice handling.",
    link: "/income-tax-services",
  },
  {
    icon: <FaBuilding />,
    title: "Company Secretary Services",
    description:
      "Company incorporation, ROC filings, board compliance, FEMA compliance, and corporate governance support.",
    link: "/company-secretary-services",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Audit Services",
    description:
      "Statutory audits, tax audits, internal audits, GST audits, and risk assessment services.",
    link: "/audit-services",
  },
  {
    icon: <FaCalculator />,
    title: "Business Registration Services",
    description:
      "Company registration, LLP registration, MSME, Startup India, Trademark, FSSAI, and other registrations.",
    link: "/business-registration-services",
  },
  {
    icon: <FaBook />,
    title: "Accounting Services",
    description:
      "Bookkeeping, monthly accounting, virtual accounting, outsourced accounting, and financial reporting.",
    link: "/accounting-services",
  },
];
const Services = () => {
  return (
    <section className="services-section">
      <div className="container">

        <div className="services-heading">
          <h2>Our Services</h2>
          <p>
            Trusted GST, Income Tax, Accounting, Audit, Company Secretarial,
            and Business Registration services for startups, SMEs, and growing
            businesses across India.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="/contact" className="read-more">
                Learn More
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;