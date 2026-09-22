export type Season = "christmas" | "landscape" | "offpeak";

export function getSeasonForDate(date: Date = new Date()): Season {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const md = month * 100 + day;

  // Christmas mode: Nov 15 – Dec 24
  if (md >= 1115 && md <= 1224) return "christmas";
  // Landscape: Mar 15 – Nov 14
  if (md >= 315 && md <= 1114) return "landscape";
  return "offpeak";
}

export function parseSeasonOverride(value: string | null | undefined): Season | null {
  if (!value) return null;
  const v = value.toLowerCase().trim();
  if (v === "christmas" || v === "landscape" || v === "offpeak") return v;
  return null;
}

export const seasonCopy: Record<
  Season,
  {
    label: string;
    chip: string;
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string;
    ctaLabel: string;
    ctaHref: string;
    steps: { title: string; body: string }[];
  }
> = {
  christmas: {
    label: "Christmas season",
    chip: "Christmas trees open",
    heroEyebrow: "Choose & cut · Fresh cut daily",
    heroTitle: "Find your family Christmas tree",
    heroBody:
      "Hand-sheared pines, firs, and spruces on our 220-acre farm. Day after Thanksgiving through December 24, 9am–5pm.",
    ctaLabel: "Plan your visit",
    ctaHref: "/visit",
    steps: [
      {
        title: "Come to the farm",
        body: "Easy access from I-81. Large parking by the green barn. Open 9am–5pm through Dec 24.",
      },
      {
        title: "Choose & cut or pick fresh-cut",
        body: "Walk the fields with hand saws, or pick a fresh-cut tree hauled in by wagon daily.",
      },
      {
        title: "We wrap & help you load",
        body: "Baling, drilling for pin stands, wreaths, and stands on site. Pay in person — no online ordering.",
      },
    ],
  },
  landscape: {
    label: "Landscape season",
    chip: "Nursery by appointment",
    heroEyebrow: "Balled & burlapped · Dug fresh",
    heroTitle: "Evergreens & deciduous for your landscape",
    heroBody:
      "Zone 5 stock dug fresh when ordered. Delivery and planting available. Call Ed to check availability and book a visit.",
    ctaLabel: "Call Ed for an appointment",
    ctaHref: "tel:+15704986209",
    steps: [
      {
        title: "Call or email for availability",
        body: "Office (570) 868-6252 or Ed 570-498-6209 · nursery@epix.net. Wholesale discounts available.",
      },
      {
        title: "We dig fresh when ordered",
        body: "Burlap and wire baskets. Digging from ground thaw (~late March) through around Thanksgiving.",
      },
      {
        title: "Pickup, delivery, or planting",
        body: "Pick up at the farm or arrange delivery and optional planting. Certified arborist consulting available.",
      },
    ],
  },
  offpeak: {
    label: "Off-peak",
    chip: "Call ahead",
    heroEyebrow: "Family-grown since 1957",
    heroTitle: "A 220-acre tree farm in Dorrance Township",
    heroBody:
      "Christmas trees open the day after Thanksgiving. Landscape and seedlings by appointment in spring and fall. Call us anytime with questions.",
    ctaLabel: "Call the office",
    ctaHref: "tel:+15708686252",
    steps: [
      {
        title: "Christmas: day after Thanksgiving",
        body: "Choose-and-cut and fresh-cut through December 24, 9am–5pm. See Visit for directions.",
      },
      {
        title: "Landscape: spring & fall",
        body: "Book an appointment with Ed for B&B evergreens, deciduous trees, seedlings, and transplants.",
      },
      {
        title: "Wholesale year-round planning",
        body: "Place seedling orders starting in January. Call or email for current inventory and delivery.",
      },
    ],
  },
};
