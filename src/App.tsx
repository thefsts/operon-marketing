import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingHome from './pages/MarketingHome';
import PricingPage from './pages/PricingPage';
import SmallBusinessCRMPage from './pages/SmallBusinessCRMPage';
import RestaurantRetailCRMPage from './pages/RestaurantRetailCRMPage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketingPage';
import RealEstatePage from './pages/RealEstatePage';
import MortgagePage from './pages/MortgagePage';
import HealthcarePage from './pages/HealthcarePage';
import LegalPage from './pages/LegalPage';
import SportsPage from './pages/SportsPage';
import EcommercePage from './pages/EcommercePage';
import POSPage from './pages/POSPage';
import IntegrationsPage from './pages/IntegrationsPage';
import ReputationManagementPage from './pages/ReputationManagementPage';
import LeadGenerationPage from './pages/LeadGenerationPage';
import ClientBillingPage from './pages/ClientBillingPage';
import CompliancePage from './pages/CompliancePage';
import ApiDocs from './pages/ApiDocs';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import StartPage from './pages/StartPage';
import NotFound from './pages/NotFound';
import CookieConsent from './components/CookieConsent';
import AccessibilityControls from './components/AccessibilityControls';

// Redirect component for old routes to # anchors
function AnchorRedirect({ anchor }: { anchor: string }) {
  React.useEffect(() => {
    window.location.replace(`/#${anchor}`);
  }, [anchor]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main single-page app */}
        <Route path="/" element={<MarketingHome />} />

        {/* Utility pages - kept as separate routes */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/small-business-crm" element={<SmallBusinessCRMPage />} />
        <Route path="/restaurant-retail-crm" element={<RestaurantRetailCRMPage />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketingPage />} />
        <Route path="/docs" element={<ApiDocs />} />
        <Route path="/api-docs" element={<ApiDocs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/get-started" element={<StartPage />} />

        {/* Industry/Feature dedicated pages */}
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/mortgage" element={<MortgagePage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/pos" element={<POSPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/lead-generation" element={<LeadGenerationPage />} />
        <Route path="/client-billing" element={<ClientBillingPage />} />
        <Route path="/reputation-management" element={<ReputationManagementPage />} />
        <Route path="/reputation" element={<ReputationManagementPage />} />
        <Route path="/about" element={<AnchorRedirect anchor="about" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
      <AccessibilityControls />
    </BrowserRouter>
  );
}

export default App;