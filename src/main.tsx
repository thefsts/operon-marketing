import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/animations.css';
import { initGA, initPostHog } from './lib/analytics';

// Initialize analytics (only if consent was previously given or on first load)
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST;

if (GA_ID) initGA(GA_ID);
if (POSTHOG_KEY) initPostHog(POSTHOG_KEY, POSTHOG_HOST);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);