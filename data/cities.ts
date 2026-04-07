import type { City } from "@/data/types";

export const cities: City[] = [
  {
    slug: "virginia-beach",
    name: "Virginia Beach",
    state: "VA",
    region: "Hampton Roads",
    intro:
      "Virginia Beach service businesses compete in a busy local market where speed, reputation, and consistent follow-up matter.",
    marketAngle:
      "Homeowners expect quick answers, and seasonal swings can create heavy inbound volume that is hard to manage manually.",
    nearby: ["norfolk", "chesapeake", "suffolk"]
  },
  {
    slug: "norfolk",
    name: "Norfolk",
    state: "VA",
    region: "Hampton Roads",
    intro:
      "Norfolk teams often need to balance dense service areas, fast dispatching, and a steady mix of repeat and urgent jobs.",
    marketAngle:
      "Missed calls and inconsistent follow-up add up quickly when buyers are comparing multiple local providers.",
    nearby: ["virginia-beach", "chesapeake", "hampton"]
  },
  {
    slug: "chesapeake",
    name: "Chesapeake",
    state: "VA",
    region: "Hampton Roads",
    intro:
      "Chesapeake service businesses need systems that can keep up with spread-out routes, quote requests, and office coordination.",
    marketAngle:
      "Long service windows and field-heavy schedules make it easy for leads to cool off unless follow-up is automated.",
    nearby: ["virginia-beach", "norfolk", "portsmouth"]
  },
  {
    slug: "richmond",
    name: "Richmond",
    state: "VA",
    region: "Central Virginia",
    intro:
      "Richmond contractors operate in a growing metro with strong competition across home services and commercial work.",
    marketAngle:
      "Businesses that answer faster and run tighter estimate follow-up often win more work without increasing ad spend.",
    nearby: ["williamsburg", "suffolk", "arlington"]
  },
  {
    slug: "suffolk",
    name: "Suffolk",
    state: "VA",
    region: "Hampton Roads",
    intro:
      "Suffolk companies often cover wider service territories, which puts pressure on office response times and job coordination.",
    marketAngle:
      "A structured lead and scheduling system helps protect revenue when the team is moving between long routes and active jobs.",
    nearby: ["chesapeake", "portsmouth", "virginia-beach"]
  },
  {
    slug: "newport-news",
    name: "Newport News",
    state: "VA",
    region: "Virginia Peninsula",
    intro:
      "Newport News service businesses need a reliable way to handle demand without letting inbound leads disappear into voicemail.",
    marketAngle:
      "Local buyers want confidence that someone will answer, follow up, and show up when promised.",
    nearby: ["hampton", "williamsburg", "norfolk"]
  },
  {
    slug: "hampton",
    name: "Hampton",
    state: "VA",
    region: "Virginia Peninsula",
    intro:
      "Hampton contractors often rely on referrals and local reputation, which makes every missed call more expensive.",
    marketAngle:
      "When the office is stretched thin, automation helps maintain responsiveness without adding unnecessary admin work.",
    nearby: ["newport-news", "norfolk", "williamsburg"]
  },
  {
    slug: "portsmouth",
    name: "Portsmouth",
    state: "VA",
    region: "Hampton Roads",
    intro:
      "Portsmouth service companies need fast lead handling and clear pipeline control to stay competitive in a tight local market.",
    marketAngle:
      "A better system helps small teams look more organized and more responsive from the first call onward.",
    nearby: ["chesapeake", "norfolk", "suffolk"]
  },
  {
    slug: "williamsburg",
    name: "Williamsburg",
    state: "VA",
    region: "Greater Williamsburg",
    intro:
      "Williamsburg businesses often win on service quality and trust, which makes communication consistency a real growth lever.",
    marketAngle:
      "Following up on time and keeping estimates organized can be the difference between a warm lead and a lost one.",
    nearby: ["hampton", "newport-news", "richmond"]
  },
  {
    slug: "arlington",
    name: "Arlington",
    state: "VA",
    region: "Northern Virginia",
    intro:
      "Arlington service businesses work in a fast-paced market where homeowners expect responsive communication and polished operations.",
    marketAngle:
      "A premium customer experience starts before the crew arrives, and that makes lead handling quality especially important.",
    nearby: ["richmond", "williamsburg", "norfolk"]
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    state: "VA",
    region: "Northern Virginia",
    intro:
      "Alexandria service businesses compete in a fast-moving market where buyers expect quick answers and polished communication from the first call.",
    marketAngle:
      "If your office response lags or after-hours leads sit untouched, local homeowners and property managers move on quickly.",
    nearby: ["fairfax", "arlington", "woodbridge"]
  },
  {
    slug: "fairfax",
    name: "Fairfax",
    state: "VA",
    region: "Northern Virginia",
    intro:
      "Fairfax contractors operate in a competitive service market where strong responsiveness and a professional customer experience are expected.",
    marketAngle:
      "The businesses that answer faster and follow up harder usually win more of the same demand without increasing ad spend.",
    nearby: ["alexandria", "ashburn", "leesburg"]
  },
  {
    slug: "roanoke",
    name: "Roanoke",
    state: "VA",
    region: "Southwest Virginia",
    intro:
      "Roanoke service businesses often grow on reputation, referrals, and speed, which makes every missed call more expensive than it looks.",
    marketAngle:
      "A tighter system helps local operators protect demand when the phone, office, and field all pull in different directions.",
    nearby: ["lynchburg", "charlottesville", "fredericksburg"]
  },
  {
    slug: "fredericksburg",
    name: "Fredericksburg",
    state: "VA",
    region: "Central Virginia",
    intro:
      "Fredericksburg service companies need a cleaner way to handle leads, estimates, and booked work as local competition tightens.",
    marketAngle:
      "When callbacks are slow and quotes sit too long, the revenue usually lands with a more responsive competitor.",
    nearby: ["woodbridge", "alexandria", "richmond"]
  }
];
