// Optional analytics integrations. Nothing in this module loads until the caller
// has confirmed that the visitor explicitly enabled analytics.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
      opt_out_capturing?: () => void;
    };
  }
}

function analyticsAllowed() {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem('cookieConsent');
    if (!raw) return false;
    const consent = JSON.parse(raw) as { analytics?: unknown };
    return consent.analytics === true;
  } catch {
    return false;
  }
}

export function initGA(measurementId: string) {
  if (!measurementId || !analyticsAllowed() || document.querySelector(`script[data-operon-ga="${measurementId}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.dataset.operonGa = measurementId;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: true });
}

export async function initPostHog(apiKey: string, host = 'https://us.i.posthog.com') {
  if (!apiKey || !analyticsAllowed() || window.posthog) return;

  try {
    const { default: posthog } = await import('posthog-js');
    posthog.init(apiKey, {
      api_host: host,
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      persistence: 'localStorage',
    });
    window.posthog = posthog;
  } catch (error) {
    console.warn('Optional analytics failed to initialize.', error);
  }
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (!analyticsAllowed()) return;
  window.gtag?.('event', event, properties);
  window.posthog?.capture(event, properties);
}

export const trackGetStarted = (source?: string) => track('get_started_clicked', { source });
export const trackIndustrySelected = (industry: string) => track('industry_selected', { industry });
export const trackPlanSelected = (plan: string, billing?: string) => track('plan_selected', { plan, billing });
export const trackSignupCompleted = (plan?: string, industry?: string) => track('signup_completed', { plan, industry });
export const trackPaymentCompleted = (plan: string, amount: number) => track('payment_completed', { plan, amount });
export const trackDashboardReached = () => track('dashboard_reached');
export const trackPageView = (path: string) => track('page_view', { page_path: path, page_url: window.location.href });
