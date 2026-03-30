import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingHome from './pages/MarketingHome';
import PricingPage from './pages/PricingPage';
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
        <Route path="/docs" element={<ApiDocs />} />
        <Route path="/api-docs" element={<ApiDocs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/get-started" element={<StartPage />} />

        {/* Redirect old industry/feature routes to # anchors on homepage */}
        <Route path="/real-estate" element={<AnchorRedirect anchor="real-estate" />} />
        <Route path="/mortgage" element={<AnchorRedirect anchor="mortgage" />} />
        <Route path="/healthcare" element={<AnchorRedirect anchor="healthcare" />} />
        <Route path="/legal" element={<AnchorRedirect anchor="legal" />} />
        <Route path="/sports" element={<AnchorRedirect anchor="sports" />} />
        <Route path="/ecommerce" element={<AnchorRedirect anchor="services" />} />
        <Route path="/pos" element={<AnchorRedirect anchor="services" />} />
        <Route path="/compliance" element={<AnchorRedirect anchor="healthcare" />} />
        <Route path="/integrations" element={<AnchorRedirect anchor="integrations" />} />
        <Route path="/lead-generation" element={<AnchorRedirect anchor="features" />} />
        <Route path="/client-billing" element={<AnchorRedirect anchor="features" />} />
        <Route path="/reputation-management" element={<AnchorRedirect anchor="features" />} />
        <Route path="/about" element={<AnchorRedirect anchor="about" />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
      <AccessibilityControls />
    </BrowserRouter>
  );
}

export default App;