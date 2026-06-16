import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

// Main Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";



// GST
import GSTRegistration from "./pages/Gst/GSTRegistration";
import GSTReturnFiling from "./pages/Gst/GSTReturnFiling";
import GSTComplianceAdvisory from "./pages/Gst/GSTComplianceAdvisory";
import GSTNoticeLitigationSupport from "./pages/Gst/GSTNoticeLitigationSupport";
import GSTAuditReconciliation from "./pages/Gst/GSTAuditReconciliation";
import EInvoicingEWayBill from "./pages/Gst/EInvoicingEWayBill";
import SpecializedGSTServices from "./pages/Gst/SpecializedGSTServices";
import FinalReturn from "./pages/Gst/FinalReturn";
import GSTNoticeSupport from "./pages/Gst/GSTNoticeSupport";
import GSTAccountingComplianceSupport from "./pages/Gst/GSTAccountingComplianceSupport";
import GSTRevocationServices from "./pages/Gst/GSTRevocationServices";

// Income Tax
import ITRFiling from "./pages/IncomeTax/ITRFiling";
import TaxPlanningAdvisory from "./pages/IncomeTax/TaxPlanningAdvisory";
import BusinessProfessionalTaxation from "./pages/IncomeTax/BusinessProfessionalTaxation";
import IncomeTaxNoticeScrutiny from "./pages/IncomeTax/IncomeTaxNoticeScrutiny";
import TDSComplianceServices from "./pages/IncomeTax/TDSComplianceServices";
import CapitalGainsInvestmentTaxation from "./pages/IncomeTax/CapitalGainsInvestmentTaxation";
import SpecializedIncomeTaxServices from "./pages/IncomeTax/SpecializedIncomeTaxServices";
import IncomeTaxReturnServices from "./pages/IncomeTax/IncomeTaxReturnServices";
import TDSInternationalCompliance from "./pages/IncomeTax/TDSInternationalCompliance";
import BusinessComplianceServices from "./pages/IncomeTax/BusinessComplianceServices";
import CertificationAttestation from "./pages/IncomeTax/CertificationAttestation";
import LegalDocumentationServices from "./pages/IncomeTax/LegalDocumentationServices";
import CorporateRegulatoryServices from "./pages/IncomeTax/CorporateRegulatoryServices";

// Company Secretary
import CompanyIncorporation from "./pages/Companysecretary/CompanyIncorporation";
import ROCComplianceFilings from "./pages/Companysecretary/ROCComplianceFilings";
import BoardShareholderCompliance from "./pages/Companysecretary/BoardShareholderCompliance";
import CorporateLegalAdvisory from "./pages/Companysecretary/CorporateLegalAdvisory";
import CompanyChangesRestructuring from "./pages/Companysecretary/CompanyChangesRestructuring";
import FEMARBICompliance from "./pages/Companysecretary/FEMARBICompliance";
import SpecializedCSServices from "./pages/Companysecretary/SpecializedCSServices";

// Audit
import StatutoryAudit from "./pages/Audit/StatutoryAudit";
import TaxAudit from "./pages/Audit/TaxAudit";
import InternalAudit from "./pages/Audit/InternalAudit";
import GSTAudit from "./pages/Audit/GSTAudit";
import StockInventoryAudit from "./pages/Audit/StockInventoryAudit";

// Registration
import BusinessEntityRegistration from "./pages/Registration/BusinessEntityRegistration";
import GovernmentTaxRegistrations from "./pages/Registration/GovernmentTaxRegistrations";
import StartupSpecialRegistrations from "./pages/Registration/StartupSpecialRegistrations";
import NGOTrustRegistrations from "./pages/Registration/NGOTrustRegistrations";
import IntellectualPropertyRegistrations from "./pages/Registration/IntellectualPropertyRegistrations";
import OtherLicensesRegistrations from "./pages/Registration/OtherLicensesRegistrations";

// Accounting
import PartTimeAccounting from "./pages/Accounting/PartTimeAccounting";
import WeeklyAccounting from "./pages/Accounting/WeeklyAccounting";
import OneTimeAccounting from "./pages/Accounting/OneTimeAccounting";
import VirtualAccounting from "./pages/Accounting/VirtualAccounting";
import OutsourcedAccounting from "./pages/Accounting/OutsourcedAccounting";
import ContractualAccounting from "./pages/Accounting/ContractualAccounting";
import ProjectBasedAccounting from "./pages/Accounting/ProjectBasedAccounting";
import MonthlyAccounting from "./pages/Accounting/MonthlyAccounting";
import QuarterlyAccounting from "./pages/Accounting/QuarterlyAccounting";



import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

  <Routes>

      <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

      {/* GST */}
<Route path="/gst-registration" element={<GSTRegistration />} />
<Route path="/gst-return-filing" element={<GSTReturnFiling />} />
<Route path="/gst-compliance-advisory" element={<GSTComplianceAdvisory />} />
<Route path="/gst-notice-litigation-support" element={<GSTNoticeLitigationSupport />} />
<Route path="/gst-audit-reconciliation" element={<GSTAuditReconciliation />} />
<Route path="/e-invoicing-e-way-bill" element={<EInvoicingEWayBill />} />
<Route path="/specialized-gst-services" element={<SpecializedGSTServices />} />
<Route path="/final-return" element={<FinalReturn />} />
<Route path="/gst-notice-support" element={<GSTNoticeSupport />} />
<Route path="/gst-accounting-compliance-support" element={<GSTAccountingComplianceSupport />} />
<Route path="/gst-revocation-services" element={<GSTRevocationServices />} />

{/* Income Tax */}
<Route path="/itr-filing" element={<ITRFiling />} />
<Route path="/tax-planning-advisory" element={<TaxPlanningAdvisory />} />
<Route path="/business-professional-taxation" element={<BusinessProfessionalTaxation />} />
<Route path="/income-tax-notice-scrutiny" element={<IncomeTaxNoticeScrutiny />} />
<Route path="/tds-compliance-services" element={<TDSComplianceServices />} />
<Route path="/capital-gains-investment-taxation" element={<CapitalGainsInvestmentTaxation />} />
<Route path="/specialized-income-tax-services" element={<SpecializedIncomeTaxServices />} />
<Route path="/income-tax-return-services" element={<IncomeTaxReturnServices />} />
<Route path="/tds-international-compliance" element={<TDSInternationalCompliance />} />
<Route path="/business-compliance-services" element={<BusinessComplianceServices />} />
<Route path="/certification-attestation" element={<CertificationAttestation />} />
<Route path="/legal-documentation-services" element={<LegalDocumentationServices />} />
<Route path="/corporate-regulatory-services" element={<CorporateRegulatoryServices />} />

{/* Company Secretary */}
<Route path="/company-incorporation" element={<CompanyIncorporation />} />
<Route path="/roc-compliance-filings" element={<ROCComplianceFilings />} />
<Route path="/board-shareholder-compliance" element={<BoardShareholderCompliance />} />
<Route path="/corporate-legal-advisory" element={<CorporateLegalAdvisory />} />
<Route path="/company-changes-restructuring" element={<CompanyChangesRestructuring />} />
<Route path="/fema-rbi-compliance" element={<FEMARBICompliance />} />
<Route path="/specialized-cs-services" element={<SpecializedCSServices />} />

{/* Audit */}
<Route path="/statutory-audit" element={<StatutoryAudit />} />
<Route path="/tax-audit" element={<TaxAudit />} />
<Route path="/internal-audit" element={<InternalAudit />} />
<Route path="/gst-audit" element={<GSTAudit />} />
<Route path="/stock-inventory-audit" element={<StockInventoryAudit />} />

{/* Registration */}
<Route path="/business-entity-registration" element={<BusinessEntityRegistration />} />
<Route path="/government-tax-registrations" element={<GovernmentTaxRegistrations />} />
<Route path="/startup-special-registrations" element={<StartupSpecialRegistrations />} />
<Route path="/ngo-trust-registrations" element={<NGOTrustRegistrations />} />
<Route path="/intellectual-property-registrations" element={<IntellectualPropertyRegistrations />} />
<Route path="/other-licenses-registrations" element={<OtherLicensesRegistrations />} />

{/* Accounting */}
<Route path="/part-time-accounting" element={<PartTimeAccounting />} />
<Route path="/weekly-accounting" element={<WeeklyAccounting />} />
<Route path="/one-time-accounting" element={<OneTimeAccounting />} />
<Route path="/virtual-accounting" element={<VirtualAccounting />} />
<Route path="/outsourced-accounting" element={<OutsourcedAccounting />} />
<Route path="/contractual-accounting" element={<ContractualAccounting />} />
<Route path="/project-based-accounting" element={<ProjectBasedAccounting />} />
<Route path="/monthly-accounting" element={<MonthlyAccounting />} />
<Route path="/quarterly-accounting" element={<QuarterlyAccounting />} />

</Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;