const AMAZON_MARKETPLACE = "https://www.amazon.com";
const AMAZON_TAG = "dacam93-20";
const products = [
  {
    id: "a119-mini-2", name: "VIOFO A119 Mini 2", short: "Compact, front only", category: "front", budget: 1, cabin: false,
    front: "2K · 60 fps or 30 fps HDR", rear: "—", night: "STARVIS 2 · HDR", display: "2K · STARVIS 2",
    summary: "A small camera for drivers who want a front view without routing a cable to the rear window.",
    good: "Compact windshields, a simpler installation, and a budget focused on front recording.",
    caveat: "2K 60 fps and 2K HDR are separate modes: HDR records at 30 fps. It does not record the rear view; check the bundle for a card and parking power.",
    parking: "Parking modes are available. Recording with the engine off requires a compatible hardwire kit, sold separately.",
    vehicle: "Its compact body can suit small cars and crowded windshields.",
    search: "VIOFO A119 Mini 2 dash cam", asin: null,
    source: "https://www.viofo.com/products/viofo-a119-mini-2-voice-control-2k-60fps-5ghz-wifi-dash-camera-with-sony-starvis-2-image-sensor-hdr-super-night-sensibility"
  },
  {
    id: "a229-plus-2ch", name: "VIOFO A229 Plus 2CH", short: "Balanced, front and rear", category: "dual", budget: 2, cabin: false,
    front: "2K · 60 fps", rear: "2K · 30 fps", night: "STARVIS 2 · HDR front and rear", display: "2K + 2K · STARVIS 2",
    summary: "Front and rear coverage with STARVIS 2 sensors and HDR on both cameras.",
    good: "A balanced pick for commuting, road trips, and recording both ends of the car.",
    caveat: "Front 60 fps is not the HDR mode: HDR runs at 30 fps on both channels. Check the rear cable, card, and parking-power kit in the bundle.",
    parking: "Supports buffered parking recording. A compatible HK4 kit is required to power the camera with the car off.",
    vehicle: "For estates, SUVs, or vans, check the rear-camera cable length.",
    search: "VIOFO A229 Plus 2CH front rear dash cam", asin: null,
    source: "https://www.viofo.com/products/viofo-a229-plus-2ch-front-and-rear-2k2k-hdr-5ghz-wi-fi-gps-voice-control-dual-dash-camera-with-sony-starvis-2-sensor"
  },
  {
    id: "70mai-a510-1", name: "70mai A510-1", short: "Two channels, front STARVIS 2", category: "dual", budget: 2, cabin: false,
    front: "1944P · up to 60 fps", rear: "1080p · 25 fps", night: "STARVIS 2 · front HDR", display: "1944P + 1080p",
    summary: "A front-and-rear bundle with a STARVIS 2 front camera and a 1080p rear camera.",
    good: "A lower-cost two-channel route when Full HD rear footage is enough; the front camera records 1944P and offers HDR.",
    caveat: "The rear channel is 1080p at 25 fps and has no HDR. Confirm that the listing is the A510-1 two-camera bundle; the camera has a 500mAh battery, not a supercapacitor.",
    parking: "Offers collision detection and time-lapse. Parking mode requires a compatible 70mai UP03/UP04 hardwire kit, sold separately.",
    vehicle: "Check that the bundle includes the rear camera and that its cable reaches your back window.",
    search: "70mai A510-1 front rear dash cam", asin: null,
    source: "https://new-cdn-res.70mai.com/gb/a510/"
  },
  {
    id: "a229-plus-3ch", name: "VIOFO A229 Plus 3CH", short: "Three channels, including cabin", category: "cabin", budget: 3, cabin: true,
    front: "2K · 30 fps HDR", rear: "2K · 30 fps HDR", night: "STARVIS 2 · HDR · cabin IR", display: "2K + 2K + 1080p",
    summary: "Records the road ahead, the rear, and the cabin—useful for taxis, rideshare, and shared cars.",
    good: "Adds an infrared cabin camera for recording inside the vehicle.",
    caveat: "All three channels record at 30 fps; the cabin camera uses IR for darkness. Three channels use storage quickly, and the card is sold separately.",
    parking: "Supports buffered parking modes. VIOFO lists HK4 as compatible; it is optional, and the camera has a supercapacitor rather than a battery.",
    vehicle: "Suited to passenger transport or drivers who also need an interior view.",
    search: "VIOFO A229 Plus 3CH dash cam", asin: null,
    source: "https://www.viofo.com/products/viofo-a229-plus-3ch-2k2k1080p-hdr-5ghz-wi-fi-gps-voice-control-dash-camera-with-dual-sony-starvis-2-sensor"
  },
  {
    id: "a229-pro-2ch", name: "VIOFO A229 Pro 2CH", short: "More detail, front and rear", category: "dual", budget: 3, cabin: false,
    front: "4K · 30 fps HDR", rear: "2K · 30 fps HDR", night: "STARVIS 2 · HDR front and rear", display: "4K + 2K · STARVIS 2",
    summary: "Raises front recording to 4K while keeping the rear camera at 2K.",
    good: "For drivers who prioritize video detail and still want front and rear coverage.",
    caveat: "The larger 4K files need storage planning; more resolution does not guarantee readable plates. The supercapacitor is not a parking-mode power source.",
    parking: "Supports buffered parking modes. VIOFO lists HK4 as compatible; it is optional, and off-engine recording needs a separate power source.",
    vehicle: "Check the space behind your mirror and cable routing for your car model.",
    search: "VIOFO A229 Pro 2CH 4K 2K dash cam", asin: null,
    source: "https://www.viofo.com/products/viofo-a229-pro-2ch-front-and-rear-4k-2k-hdr-dual-dash-cam-with-sony-starvis-2-sensors"
  }
];

function amazonUrl(product) {
  if (product.asin) {
    return `${AMAZON_MARKETPLACE}/dp/${encodeURIComponent(product.asin)}?${new URLSearchParams({tag: AMAZON_TAG})}`;
  }
  return `${AMAZON_MARKETPLACE}/s?${new URLSearchParams({k: product.search, tag: AMAZON_TAG})}`;
}

function syncAmazonLinks(root = document) {
  root.querySelectorAll("[data-amazon-product]").forEach(link => {
    const product = products.find(item => item.id === link.dataset.amazonProduct);
    if (product) link.href = amazonUrl(product);
  });
}

function selectionReason(product, best, choices, candidateCount, isAlternative = false) {
  if (isAlternative) {
    const lostCoverage = choices.coverage === "cabin" ? product.category === "dual" ? "the cabin channel" : "the rear and cabin channels" : "the rear channel";
    return `This option stays within the selected guide band by recording less than requested; you would give up ${lostCoverage}.`;
  }
  if (candidateCount === 1) {
    return `This is the only ${choices.coverage === "cabin" ? "front, rear, and cabin" : choices.coverage === "dual" ? "front-and-rear" : "front-only"} configuration in this shortlist, so there is no second model here to compare.`;
  }
  if (best && (choices.priority === "night" || Number(choices.budget) === 4)) {
    if (product.id === "a229-pro-2ch") return "Leads the dual-camera options on published resolution: 4K front, 2K rear, and HDR on both. This is a spec-sheet ordering, not a night-footage test.";
    if (product.id === "a229-plus-2ch") return "Leads the in-budget dual-camera options with 2K and HDR on both channels. HDR runs at 30 fps; this is a spec-sheet choice, not a footage test.";
    if (product.id === "70mai-a510-1") return "The front camera offers HDR, while the 1080p rear is a simpler specification than the dual-2K alternatives. No independent footage comparison was performed.";
    return "This is the only configuration here that matches your requested coverage; it adds an infrared cabin view alongside front and rear recording.";
  }
  if (best && choices.coverage === "dual") {
    if (product.id === "a229-plus-2ch") return "Leads the balanced dual-camera options with 2K front and rear recording and HDR on both channels.";
    if (product.id === "70mai-a510-1") return "A two-camera alternative with front HDR and a 1080p rear; choose it if that rear resolution fits your needs.";
    return "Adds 4K front recording while preserving 2K rear coverage; choose it when front resolution matters most.";
  }
  if (best && choices.coverage === "front") return "It is the only front-only camera in this reviewed shortlist. Its 2K 60 fps and 2K 30 fps HDR are separate modes.";
  if (best) return "It is the only three-channel configuration in this reviewed shortlist, with an infrared cabin camera.";
  if (choices.priority === "night" || Number(choices.budget) === 4) return "Listed after the lead option based on the published resolution and HDR features noted above; no independent footage ranking is implied.";
  return product.good;
}

function productCard(product, best = false, choices = {parking: true}, candidateCount = 1, isAlternative = false) {
  const productName = product.name;
  const displayName = productName.replace("VIOFO ", "");
  const parkingNote = choices.parking ? product.parking : "You did not prioritize off-engine recording. Add a hardwire kit only if you later decide you want parking surveillance, and confirm model compatibility.";
  return `<article class="product-card${best ? " is-best" : ""}">
    <div class="product-card-top"><span class="product-badge">${product.short}</span><span class="camera-mini" aria-hidden="true"></span></div>
    <p class="channels-label">${product.category === "front" ? "1 channel · front" : product.cabin ? "3 channels · front, rear, cabin" : "2 channels · front and rear"}</p>
    <h4>${displayName}</h4>
    <p class="product-summary">${product.summary}</p>
    <div class="spec-pills"><span>${product.display}</span><span>${product.night.split(" · ")[0]}</span>${product.cabin ? "<span>IR cabin camera</span>" : ""}</div>
    <div class="product-extra"><p><strong>For your car:</strong> ${product.vehicle}</p><p><strong>Parking:</strong> ${parkingNote}</p><p><strong>Keep in mind:</strong> ${product.caveat}</p></div>
    <div class="product-verdict"><strong>${isAlternative ? "Coverage trade-off" : best ? "Why this ranks first" : "Why consider it"}</strong><p>${selectionReason(product,best,choices,candidateCount,isAlternative)}</p></div>
    <p class="affiliate-note">Amazon affiliate search link · price and bundle may change.</p>
    <a class="product-link" data-amazon-product="${product.id}" href="${amazonUrl(product)}" target="_blank" rel="sponsored nofollow noopener">Search Amazon.com <span aria-hidden="true">↗</span><span class="visually-hidden"> — opens in a new tab</span></a>
  </article>`;
}

function hasRequestedCoverage(product, coverage) {
  return coverage === "front" ? product.category === "front" : coverage === "dual" ? product.category === "dual" : product.cabin;
}

function coverageLevel(product) {
  return product.cabin ? 3 : product.category === "dual" ? 2 : 1;
}

function orderScore(product, choices) {
  if (choices.priority === "night" || Number(choices.budget) === 4) {
    if (product.id === "a229-pro-2ch") return 30;
    if (product.id === "a229-plus-2ch") return 20;
    if (product.id === "70mai-a510-1") return 10;
    return 0;
  }
  if (choices.coverage === "dual") {
    if (product.id === "a229-plus-2ch") return 30;
    if (product.id === "70mai-a510-1") return 20;
    if (product.id === "a229-pro-2ch") return 10;
  }
  return 0;
}

function orderCandidates(candidates, choices, closestBudget = false) {
  return [...candidates].sort((a, b) => {
    if (closestBudget) {
      const gap = Math.abs(a.budget - Number(choices.budget)) - Math.abs(b.budget - Number(choices.budget));
      if (gap) return gap;
    }
    return orderScore(b, choices) - orderScore(a, choices);
  });
}

function recommendationContext(choices, firstProduct, overBudget) {
  let vehicleNote;
  if (choices.vehicle === "compact") {
    vehicleNote = choices.coverage === "front" ? "For the small car you selected, a front-only install avoids routing a cable to the rear window." : "For the small car you selected, check camera placement near the mirror and route any rear cable clear of airbags and sensors.";
  } else if (choices.vehicle === "large") {
    vehicleNote = "For the larger vehicle you selected, measure the route to the rear window and confirm the bundle's rear-cable length before buying.";
  } else if (choices.coverage === "cabin") {
    vehicleNote = "For the work vehicle you selected, the matching three-channel option includes a cabin view. Tell passengers about recording and check the rules that apply to your use.";
  } else {
    vehicleNote = `You selected ${choices.coverage === "front" ? "front-only" : "front-and-rear"} coverage for a work vehicle, so the results keep that requirement. Choose cabin coverage if you also need an interior view.`;
  }
  const parkingNote = choices.parking
    ? `Parking mode is part of your request. ${firstProduct ? firstProduct.parking : "Check the selected camera's compatible off-engine power kit."}`
    : "Parking surveillance did not affect the ranking. The cameras have parking features, but you can skip a separate hardwire kit unless you want recording with the engine off.";
  const budgetNote = overBudget ? "The exact-coverage options below sit above your selected camera-bundle budget." : "Results below meet the requested coverage and stay within the selected camera-bundle budget.";
  return `<div class="article-callout chooser-context"><strong>${budgetNote}</strong><br>${vehicleNote} ${parkingNote}<br><span>Video ordering uses published resolution and HDR features only; no independent footage tests were performed.</span></div>`;
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
  const exactCoverage = products.filter(product => hasRequestedCoverage(product, choices.coverage));
  const strictMatches = orderCandidates(exactCoverage.filter(product => product.budget <= Number(choices.budget)), choices);
  const overBudgetMatches = orderCandidates(exactCoverage.filter(product => product.budget > Number(choices.budget)), choices, true);
  const isOverBudget = strictMatches.length === 0;
  const primaryPicks = (isOverBudget ? overBudgetMatches : strictMatches).slice(0, 3);
  const alternatives = isOverBudget
    ? orderCandidates(products.filter(product => coverageLevel(product) < (choices.coverage === "front" ? 1 : choices.coverage === "dual" ? 2 : 3) && product.budget <= Number(choices.budget)), choices).slice(0, 2)
    : [];
  const heading = document.querySelector("#results-title");
  const count = document.querySelector("#result-count");
  if (isOverBudget) {
    heading.textContent = "Your requested coverage is above budget";
    count.textContent = `${primaryPicks.length} over budget`;
  } else {
    heading.textContent = choices.coverage === "cabin" ? "For front, rear, and cabin coverage" : choices.coverage === "front" ? "For recording the road ahead" : "Front and rear coverage";
    count.textContent = `${primaryPicks.length} ${primaryPicks.length === 1 ? "match" : "matches"}`;
  }
  document.querySelectorAll(".budget-warning").forEach(el => el.remove());
  const container = document.querySelector("#recommendations");
  const mainLabel = isOverBudget ? "Requested coverage — above budget" : "Matches your coverage and budget";
  const mainCards = primaryPicks.map((product,index) => productCard(product,index === 0,choices,primaryPicks.length)).join("");
  const alternativeSection = alternatives.length ? `<section class="recommendation-group coverage-alternatives" aria-labelledby="alternative-title"><h4 id="alternative-title">Lower-coverage alternatives within budget</h4><p>These reduce the coverage you asked for. Pick one only if the trade-off works for you.</p><div class="product-grid">${alternatives.map(product => productCard(product,false,choices,alternatives.length,true)).join("")}</div></section>` : "";
  container.innerHTML = `<div class="recommendation-group"><h4>${mainLabel}</h4><div class="product-grid">${mainCards}</div></div>${alternativeSection}`;
  document.querySelectorAll(".chooser-context").forEach(el => el.remove());
  container.insertAdjacentHTML("beforebegin", recommendationContext(choices, primaryPicks[0], isOverBudget));
}

document.addEventListener("DOMContentLoaded", () => {
  syncAmazonLinks();
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
