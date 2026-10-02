const AMAZON_TAG = "dacam93-20";
const products = [
  {
    id: "a119-mini-2", name: "VIOFO A119 Mini 2", short: "Compact, front only", category: "front", budget: 1, cabin: false,
    front: "Up to 2K at 60 fps", rear: "—", night: "STARVIS 2 · HDR", display: "2K · STARVIS 2",
    summary: "A small camera for drivers who want a front view without routing a cable to the rear window.",
    good: "Compact windshields, a simpler installation, and a budget focused on front recording.",
    caveat: "It does not record the rear view. Check whether a parking hardwire kit and microSD card are included.",
    parking: "Parking modes are available. Recording with the engine off requires a compatible hardwire kit, sold separately.",
    vehicle: "Its compact body can suit small cars and crowded windshields.",
    search: "VIOFO A119 Mini 2 dash cam",
    source: "https://www.viofo.com/products/viofo-a119-mini-2-voice-control-2k-60fps-5ghz-wifi-dash-camera-with-sony-starvis-2-image-sensor-hdr-super-night-sensibility"
  },
  {
    id: "a229-plus-2ch", name: "VIOFO A229 Plus 2CH", short: "Balanced, front and rear", category: "dual", budget: 2, cabin: false,
    front: "Up to 2K at 60 fps", rear: "Up to 2K at 30 fps", night: "STARVIS 2 · HDR front and rear", display: "2K + 2K · STARVIS 2",
    summary: "Front and rear coverage with STARVIS 2 sensors and HDR on both cameras.",
    good: "A balanced pick for commuting, road trips, and recording both ends of the car.",
    caveat: "The rear cable must reach the back window. Check whether a microSD card and hardwire kit are included.",
    parking: "Supports buffered parking recording. A compatible HK4 kit is required to power the camera with the car off.",
    vehicle: "For estates, SUVs, or vans, check the rear-camera cable length.",
    search: "VIOFO A229 Plus 2CH front rear dash cam",
    source: "https://www.viofo.com/products/viofo-a229-plus-2ch-front-and-rear-2k2k-hdr-5ghz-wi-fi-gps-voice-control-dual-dash-camera-with-sony-starvis-2-sensor"
  },
  {
    id: "70mai-a510-1", name: "70mai A510-1", short: "Two channels, front STARVIS 2", category: "dual", budget: 2, cabin: false,
    front: "1944P", rear: "1080p", night: "STARVIS 2 front · HDR front", display: "1944P + 1080p",
    summary: "A front-and-rear setup with STARVIS 2 and HDR at the front, plus a Full HD rear camera.",
    good: "For drivers who want rear coverage and a different specification mix from a dual-2K setup.",
    caveat: "The rear camera records at 1080p. Make sure the listing is the two-channel A510-1 kit, not the front camera alone.",
    parking: "Offers collision detection and time-lapse. Parking mode requires a compatible 70mai UP03/UP04 hardwire kit, sold separately.",
    vehicle: "Check that the bundle includes the rear camera and that its cable reaches your back window.",
    search: "70mai A510-1 front rear dash cam",
    source: "https://pl.dashcam.70mai.com/a510/"
  },
  {
    id: "a229-plus-3ch", name: "VIOFO A229 Plus 3CH", short: "Three channels, including cabin", category: "cabin", budget: 3, cabin: true,
    front: "2K", rear: "2K", night: "STARVIS 2 · HDR · cabin IR", display: "2K + 2K + 1080p",
    summary: "Records the road ahead, the rear, and the cabin—useful for taxis, rideshare, and shared cars.",
    good: "Adds an infrared cabin camera for recording inside the vehicle.",
    caveat: "Three channels use more storage and require careful cable placement.",
    parking: "Supports parking mode. Check which power kit, memory card, and camera configuration are included.",
    vehicle: "Suited to passenger transport or drivers who also need an interior view.",
    search: "VIOFO A229 Plus 3CH dash cam",
    source: "https://www.viofo.com/products/viofo-a229-plus-3ch-2k2k1080p-hdr-5ghz-wi-fi-gps-voice-control-dash-camera-with-dual-sony-starvis-2-sensor"
  },
  {
    id: "a229-pro-2ch", name: "VIOFO A229 Pro 2CH", short: "More detail, front and rear", category: "dual", budget: 3, cabin: false,
    front: "Up to 4K at 30 fps", rear: "Up to 2K at 30 fps", night: "STARVIS 2 · HDR on both cameras", display: "4K + 2K · STARVIS 2",
    summary: "Raises front recording to 4K while keeping the rear camera at 2K.",
    good: "For drivers who prioritize video detail and still want front and rear coverage.",
    caveat: "Files are larger and the price is typically higher. More resolution does not guarantee readable plates.",
    parking: "Supports buffered parking mode. Off-engine monitoring requires compatible hardwire power.",
    vehicle: "Check the space behind your mirror and cable routing for your car model.",
    search: "VIOFO A229 Pro 2CH 4K 2K dash cam",
    source: "https://www.viofo.com/products/viofo-a229-pro-2ch-front-and-rear-4k-2k-hdr-dual-dash-cam-with-sony-starvis-2-sensors"
  }
];

function amazonUrl(query) {
  return `https://www.amazon.it/s?${new URLSearchParams({k: query, tag: AMAZON_TAG})}`;
}

function productCard(product, best = false, choices = {parking: true}) {
  const productName = product.name;
  const displayName = productName.replace("VIOFO ", "");
  const parkingNote = choices.parking ? product.parking : "If you later want recording with the engine off, check power kit requirements and compatibility.";
  return `<article class="product-card${best ? " is-best" : ""}">
    <div class="product-card-top"><span class="product-badge">${product.short}</span><span class="camera-mini" aria-hidden="true"></span></div>
    <p class="channels-label">${product.category === "front" ? "1 channel · front" : product.cabin ? "3 channels · front, rear, cabin" : "2 channels · front and rear"}</p>
    <h4>${displayName}</h4>
    <p class="product-summary">${product.summary}</p>
    <div class="spec-pills"><span>${product.display}</span><span>${product.night.split(" · ")[0]}</span>${product.cabin ? "<span>IR cabin camera</span>" : ""}</div>
    <div class="product-extra"><p><strong>For your car:</strong> ${product.vehicle}</p><p><strong>Parking:</strong> ${parkingNote}</p><p><strong>Keep in mind:</strong> ${product.caveat}</p></div>
    <div class="product-verdict"><strong>A good fit if…</strong><p>${product.good}</p></div>
    <p class="affiliate-note">Amazon affiliate link · price and bundle may change.</p>
    <a class="product-link" href="${amazonUrl(product.search)}" target="_blank" rel="sponsored nofollow noopener">Check on Amazon <span aria-hidden="true">↗</span><span class="visually-hidden"> — opens in a new tab</span></a>
  </article>`;
}

function getScore(product, choices) {
  let score = 0;
  const maxBudget = Number(choices.budget);
  if (product.budget <= maxBudget) score += 3;
  else score -= (product.budget - maxBudget) * 2;
  if (choices.coverage === "front" && product.category === "front") score += 5;
  if (choices.coverage === "dual" && product.category === "dual") score += 8;
  if (choices.coverage === "dual" && product.category !== "dual") score -= 4;
  if (choices.coverage === "cabin" && product.cabin) score += 7;
  if (choices.coverage === "cabin" && !product.cabin) score -= 6;
  if (choices.coverage === "front" && product.category !== "front") score -= 1;
  if (choices.parking && product.id !== "a119-mini-2") score += 1;
  if (choices.priority === "night" && product.id === "a229-pro-2ch") score += 3;
  if (choices.priority === "night" && product.id === "a119-mini-2") score += 1;
  if (choices.vehicle === "compact" && product.category === "front") score += 1;
  if (choices.vehicle === "large" && product.category === "dual") score += 2;
  if (choices.vehicle === "work" && product.cabin) score += 4;
  return score;
}

function updateRecommendations() {
  const form = document.querySelector("#chooser-form");
  if (!form) return;
  const choices = {
    budget: form.elements.budget.value,
    coverage: form.elements.coverage.value,
    vehicle: form.elements.vehicle.value,
    priority: form.elements.priority.value,
    parking: form.elements.parking.checked
  };
  const ranked = products.map(product => ({product, score: getScore(product, choices)})).sort((a,b) => b.score - a.score);
  const strict = ranked.filter(item => item.product.budget <= Number(choices.budget));
  const matchesCoverage = product => choices.coverage === "front" ? product.category === "front" : choices.coverage === "dual" ? product.category === "dual" : product.cabin;
  const strictMatches = strict.filter(item => matchesCoverage(item.product));
  const picks = (strictMatches.length ? strictMatches : ranked).slice(0, 3);
  const isOverBudget = !strictMatches.length;
  const heading = document.querySelector("#results-title");
  const count = document.querySelector("#result-count");
  if (isOverBudget) {
    heading.textContent = "This coverage may exceed your budget";
    count.textContent = "check options";
  } else {
    heading.textContent = choices.coverage === "cabin" ? "For front, rear, and cabin coverage" : choices.priority === "night" ? "Prioritizing detail and HDR" : choices.coverage === "front" ? "For recording the road ahead" : "Front and rear coverage";
    count.textContent = `${picks.length} ${picks.length === 1 ? "option" : "options"}`;
  }
  document.querySelectorAll(".budget-warning").forEach(el => el.remove());
  const container = document.querySelector("#recommendations");
  container.innerHTML = picks.map((item,index) => productCard(item.product,index === 0,choices)).join("");
  if (isOverBudget) {
    container.insertAdjacentHTML("beforebegin", `<div class="article-callout budget-warning"><strong>There isn't a clear match for this coverage within your selected budget.</strong> The options below may cost more. Check the current price, kit, and memory card, or consider a front-only camera.</div>`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const chooser = document.querySelector("#chooser-form");
  if (chooser) {
    chooser.addEventListener("change", updateRecommendations);
    chooser.addEventListener("submit", event => {
      event.preventDefault();
      const results = document.querySelector(".recommendation-head");
      if (!results) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      results.scrollIntoView({behavior: prefersReducedMotion ? "auto" : "smooth", block: "start"});
    });
    updateRecommendations();
  }
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (menu && nav) {
    const setMenuOpen = (open, restoreFocus = false) => {
      menu.setAttribute("aria-expanded", String(open));
      menu.textContent = open ? "Close menu" : "Menu";
      nav.classList.toggle("is-open", open);
      if (!open && restoreFocus) menu.focus();
    };
    menu.addEventListener("click", () => {
      setMenuOpen(menu.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", event => {
      if (event.target.closest("a")) setMenuOpen(false);
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
        event.preventDefault();
        setMenuOpen(false, true);
      }
    });
    const mobileMenuBreakpoint = window.matchMedia("(max-width: 700px)");
    const closeMenuOnDesktop = event => {
      if (!event.matches) setMenuOpen(false);
    };
    if (mobileMenuBreakpoint.addEventListener) mobileMenuBreakpoint.addEventListener("change", closeMenuOnDesktop);
    else mobileMenuBreakpoint.addListener(closeMenuOnDesktop);
  }
  document.querySelectorAll("[data-year]").forEach(node => node.textContent = new Date().getFullYear());
});
