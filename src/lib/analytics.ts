// ============================================
// ANALYTICS — Google Analytics + PostHog
// ============================================

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    posthog: any;
  }
}

// ── Google Analytics ─────────────────────────────────────────────────────────

export function initGA(measurementId: string) {
  if (!measurementId || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: any[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: true });
}

export function gtagEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// ── PostHog ──────────────────────────────────────────────────────────────────

export async function initPostHog(apiKey: string, host = "https://app.posthog.com") {
  if (!apiKey || typeof window === "undefined") return;

  try {
    const { default: posthog } = await import("posthog-js");
    posthog.init(apiKey, {
      api_host: host,
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      persistence: "localStorage",
      loaded: (ph) => {
        // Check cookie consent before enabling analytics
        try {
          const consent = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
          if (consent.analytics === false) {
            ph.opt_out_capturing();
          }
        } catch {}
      },
    });
    window.posthog = posthog;
  } catch (e) {
    console.warn("PostHog init failed:", e);
  }
}

export function phCapture(event: string, properties?: Record<string, any>) {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture(event, properties);
  }
}

// ── Unified track function ────────────────────────────────────────────────────

export function track(event: string, properties?: Record<string, any>) {
  // Check analytics consent
  try {
    const consent = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
    if (consent.analytics === false) return;
  } catch {}

  gtagEvent(event, properties);
  phCapture(event, properties);
}

// ── Funnel events ─────────────────────────────────────────────────────────────

export const trackGetStarted = (source?: string) =>
  track("get_started_clicked", { source });

export const trackIndustrySelected = (industry: string) =>
  track("industry_selected", { industry });

export const trackPlanSelected = (plan: string, billing?: string) =>
  track("plan_selected", { plan, billing });

export const trackSignupCompleted = (plan?: string, industry?: string) =>
  track("signup_completed", { plan, industry });

export const trackPaymentCompleted = (plan: string, amount: number) =>
  track("payment_completed", { plan, amount });

export const trackDashboardReached = () =>
  track("dashboard_reached");

export const trackPageView = (path: string) => {
  gtagEvent("page_view", { page_path: path });
  phCapture("$pageview", { $current_url: window.location.href });
};