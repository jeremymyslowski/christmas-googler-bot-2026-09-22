import type { Season } from "../data/seasons";
import { getSeasonForDate, parseSeasonOverride, seasonCopy } from "../data/seasons";
import { hours } from "../data/site";

export function resolveSeason(search: string = ""): Season {
  const params = new URLSearchParams(search.startsWith("?") ? search : `?${search}`);
  const override = parseSeasonOverride(params.get("season"));
  if (override) return override;
  return getSeasonForDate(new Date());
}

function hoursHintFor(season: Season): string {
  return season === "christmas" ? hours.christmas.summary : hours.landscape.summary;
}

function syncSeasonChrome(season: Season) {
  const copy = seasonCopy[season];

  document.querySelectorAll<HTMLElement>("[data-season-chip-label]").forEach((el) => {
    el.textContent = copy.chip;
  });

  document.querySelectorAll<HTMLElement>("[data-season-hours]").forEach((el) => {
    el.textContent = hoursHintFor(season);
  });

  const eyebrow = document.querySelector<HTMLElement>("[data-season-hero-eyebrow]");
  if (eyebrow) eyebrow.textContent = copy.heroEyebrow;

  const title = document.querySelector<HTMLElement>("[data-season-hero-title]");
  if (title) title.textContent = copy.heroTitle;

  const body = document.querySelector<HTMLElement>("[data-season-hero-body]");
  if (body) body.textContent = copy.heroBody;

  const cta = document.querySelector<HTMLAnchorElement>("[data-season-hero-cta]");
  if (cta) {
    cta.textContent = copy.ctaLabel;
    cta.setAttribute("href", copy.ctaHref);
  }
}

/** Client nudge: apply ?season= override OR live calendar season; sync chrome + hero. */
export function applyClientSeason() {
  if (typeof document === "undefined") return;
  const season = resolveSeason(window.location.search);
  document.body.dataset.season = season;
  syncSeasonChrome(season);
}
