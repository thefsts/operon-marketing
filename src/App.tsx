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
import StartPage from './pages/StartPage';
import POSPage from './pages/POSPage';
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/get-started" element={<StartPage />} />
        <Route path="/pos" element={<POSPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
      <AccessibilityControls />
    </BrowserRouter>
  );
}

export default App;