import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/animations.css';
import { initGA, initPostHog } from './lib/analytics';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST;

let analyticsInitialized = false;

function hasAnalyticsConsent() {
  try {
    const raw = localStorage.getItem('cookieConsent');
    if (!raw) return false;
    const consent = JSON.parse(raw) as { analytics?: unknown };
    return consent.analytics === true;
  } catch {
    return false;
  }
}

function initializeAnalyticsIfAllowed() {
  if (analyticsInitialized || !hasAnalyticsConsent()) return;
  analyticsInitialized = true;

  if (GA_ID) initGA(GA_ID);
  if (POSTHOG_KEY) void initPostHog(POSTHOG_KEY, POSTHOG_HOST);
}

initializeAnalyticsIfAllowed();
window.addEventListener('operon:cookie-consent', initializeAnalyticsIfAllowed);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
