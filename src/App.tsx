import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingHome from './pages/MarketingHome';
import PricingPage from './pages/PricingPage';
import ApiDocs from './pages/ApiDocs';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import CompliancePage from './pages/CompliancePage';
import SportsPage from './pages/SportsPage';
import RealEstatePage from './pages/RealEstatePage';
import MortgagePage from './pages/MortgagePage';
import HealthcarePage from './pages/HealthcarePage';
import LegalPage from './pages/LegalPage';
import StartPage from './pages/StartPage';
import POSPage from './pages/POSPage';
import EcommercePage from './pages/EcommercePage';
import IntegrationsPage from './pages/IntegrationsPage';
import LeadGenerationPage from './pages/LeadGenerationPage';
import ClientBillingPage from './pages/ClientBillingPage';
import ReputationManagementPage from './pages/ReputationManagementPage';
import NotFound from './pages/NotFound';
import CookieConsent from './components/CookieConsent';
import AccessibilityControls from './components/AccessibilityControls';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketingHome />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/docs" element={<ApiDocs />} />
        <Route path="/api-docs" element={<ApiDocs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/mortgage" element={<MortgagePage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/get-started" element={<StartPage />} />
        <Route path="/pos" element={<POSPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/lead-generation" element={<LeadGenerationPage />} />
        <Route path="/client-billing" element={<ClientBillingPage />} />
        <Route path="/reputation-management" element={<ReputationManagementPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
      <AccessibilityControls />
    </BrowserRouter>
  );
}

export default App;