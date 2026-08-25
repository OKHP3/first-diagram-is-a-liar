export const ANALYTICS_ID = "G-VJ1BKXS27H";
export const CONTENT_ID = "first-diagram-is-a-liar";
export const CONTENT_VERSION = "spa-v1";

type AnalyticsValue = string | number | boolean;
type AnalyticsParameters = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (command: string, action: string | Date, parameters?: AnalyticsParameters) => void;
  }
}

export function track(name: string, parameters: AnalyticsParameters = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    content_id: CONTENT_ID,
    content_version: CONTENT_VERSION,
    ...parameters,
  });
}

export function trackCampaignLanding() {
  const params = new URLSearchParams(window.location.search);
  const campaign = ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
    .reduce<Record<string, string>>((values, key) => {
      const value = params.get(key);
      if (value) values[key] = value.slice(0, 100);
      return values;
    }, {});

  if (Object.keys(campaign).length !== 4) return;
  track("campaign_landing", campaign);
}

export function trackStep(step: number) {
  track("tutorial_step_view", { step: step + 1 });
}

export function trackCta(surface: string, destination: string) {
  track("cta_click", { surface, destination });
}

export function trackOutbound(destination: string, surface?: string) {
  const url = new URL(destination, window.location.href);
  if (surface) {
    trackCta(surface, url.hostname || url.pathname);
    return;
  }
  track("outbound_click", {
    destination_host: url.hostname,
    destination_path: url.pathname,
  });
}