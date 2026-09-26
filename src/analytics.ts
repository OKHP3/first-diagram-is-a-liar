export const ANALYTICS_CONTENT_ID = "first-diagram-is-a-liar";
export const ANALYTICS_CONTENT_VERSION = "spa-v1";

const CAMPAIGN_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
const SAFE_CAMPAIGN_VALUE = /^[a-z0-9][a-z0-9._-]{0,79}$/i;
const STEP_IDS = ["premise", "roy", "workbench", "council", "handoff"] as const;

const CTA_PARAMETERS = {
  "start-field-guide": {
    cta_id: "start-field-guide",
    surface: "hero",
    destination: "tutorial-step-2",
  },
  "read-long-form": {
    cta_id: "read-long-form",
    surface: "hero",
    destination: "article",
  },
  "next-field-test": {
    cta_id: "next-field-test",
    surface: "tutorial-navigation",
    destination: "next-step",
  },
  "run-again": {
    cta_id: "run-again",
    surface: "tutorial-navigation",
    destination: "tutorial-step-1",
  },
  "download-handoff": {
    cta_id: "download-handoff",
    surface: "handoff",
    destination: "local-download",
  },
  "copy-handoff": {
    cta_id: "copy-handoff",
    surface: "handoff",
    destination: "local-copy",
  },
} as const;

export type CampaignParameters = Record<(typeof CAMPAIGN_KEYS)[number], string>;

function safeCampaignValue(parameters: URLSearchParams, key: string): string | null {
  const values = parameters.getAll(key);
  if (values.length !== 1) return null;

  const value = values[0].trim();
  return SAFE_CAMPAIGN_VALUE.test(value) ? value.toLowerCase() : null;
}

export function readCampaignParameters(search: string): CampaignParameters | null {
  const parameters = new URLSearchParams(search);
  const values = CAMPAIGN_KEYS.map((key) => safeCampaignValue(parameters, key));
  if (values.some((value) => value === null)) return null;

  return {
    utm_source: values[0]!,
    utm_medium: values[1]!,
    utm_campaign: values[2]!,
    utm_content: values[3]!,
  };
}

export function sanitizePageLocation(origin: string, pathname: string, search: string): string {
  const safeLocation = new URL(pathname, origin);
  const parameters = new URLSearchParams(search);

  for (const key of CAMPAIGN_KEYS) {
    const value = safeCampaignValue(parameters, key);
    if (value) safeLocation.searchParams.set(key, value);
  }

  return safeLocation.toString();
}

export function getCtaParameters(ctaId: string): object | null {
  return CTA_PARAMETERS[ctaId as keyof typeof CTA_PARAMETERS] ?? null;
}

type AnalyticsMode = "off" | "debug" | "google";
type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

let mode: AnalyticsMode = "off";
let clickListenerInstalled = false;
let lastTrackedStep: number | null = null;

function sendEvent(eventName: string, parameters: object): void {
  const payload = {
    content_id: ANALYTICS_CONTENT_ID,
    content_version: ANALYTICS_CONTENT_VERSION,
    ...parameters,
  };

  if (mode === "debug") {
    console.info("[analytics:debug]", eventName, payload);
  } else if (mode === "google") {
    (window as AnalyticsWindow).gtag?.("event", eventName, payload);
  }
}

function handleDocumentClick(event: MouseEvent): void {
  if (!(event.target instanceof Element)) return;
  const target = event.target.closest<HTMLElement>(
    "[data-analytics-cta], a[href], .handoff-actions .download-handoff-button, .handoff-actions .copy-brief-button",
  );
  if (!target) return;

  const ctaId = target.dataset.analyticsCta
    ?? (target.matches(".handoff-actions .download-handoff-button") ? "download-handoff" : undefined)
    ?? (target.matches(".handoff-actions .copy-brief-button") ? "copy-handoff" : undefined);
  if (ctaId) {
    const ctaParameters = getCtaParameters(ctaId);
    if (ctaParameters) {
      sendEvent("cta_click", ctaParameters);
      return;
    }
  }

  if (!(target instanceof HTMLAnchorElement)) return;

  let destination: URL;
  try {
    destination = new URL(target.href);
  } catch {
    return;
  }

  if (
    (destination.protocol !== "https:" && destination.protocol !== "http:")
    || destination.origin === window.location.origin
  ) return;

  sendEvent("outbound_click", {
    destination_host: destination.hostname.toLowerCase(),
    destination_path: destination.pathname || "/",
  });
}

export function initializeAnalytics(): void {
  if (typeof window === "undefined") return;

  const debugRequested = import.meta.env.DEV
    && new URLSearchParams(window.location.search).get("analytics") === "debug";

  if (debugRequested) {
    mode = "debug";
  } else if (typeof (window as AnalyticsWindow).gtag === "function") {
    mode = "google";
  } else {
    mode = "off";
    return;
  }

  if (!clickListenerInstalled) {
    document.addEventListener("click", handleDocumentClick);
    clickListenerInstalled = true;
  }

  if (debugRequested) {
    sendEvent("page_view", {
      page_location: sanitizePageLocation(
        window.location.origin,
        window.location.pathname,
        window.location.search,
      ),
    });
  }

  const campaignParameters = readCampaignParameters(window.location.search);
  if (campaignParameters) sendEvent("campaign_landing", campaignParameters);
}

export function trackTutorialStepView(stepIndex: number): void {
  if (!STEP_IDS[stepIndex] || stepIndex === lastTrackedStep) return;
  lastTrackedStep = stepIndex;
  sendEvent("tutorial_step_view", { step: STEP_IDS[stepIndex] });
}