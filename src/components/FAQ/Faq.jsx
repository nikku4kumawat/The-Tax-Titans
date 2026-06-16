import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./Faq.css";

const faqData = [
  {
    question: "What services does The Tax Titans provide?",
    answer:
      "We offer end-to-end financial and compliance services including GST, Income Tax, Accounting, Audit, Business Registration, and Company Secretary services—all under one roof.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us via call, WhatsApp, or website form. We’ll understand your requirement and guide you with the best solution and pricing.",
  },
  {
    question: "Do you provide online services?",
    answer:
      "Yes, our services are completely online. You can share documents digitally, and we handle everything remotely with full support.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is transparent and depends on your specific needs. We offer flexible and affordable packages for individuals and businesses.",
  },
  {
    question: "Will you handle notices and compliance issues?",
    answer:
      "Yes, we provide complete support for notices, filings, and compliance to ensure you stay stress-free and fully compliant.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-heading">
          <h2>Frequently asked questions</h2>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <ChevronDown
                  size={20}
                  className={`faq-icon ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                />
              </button>

              <div
                className={`faq-answer-wrapper ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;