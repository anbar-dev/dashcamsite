# DashCamGator improvement roadmap

Created after the desktop and mobile review on October 2, 2026.

## How to use this plan

Each step's status below records whether it has been completed or remains pending. Creating this document does not authorize execution. Complete only the step explicitly assigned by the user, report the result, and wait for the next assignment. A request for a step includes its relevant checks; it does not include later steps or publication.

Keep the website and its maintenance documents in English. Continue using plain HTML, CSS, and JavaScript with GitHub Pages. Preserve the automotive/tech visual direction and a small, maintainable page count.

**Confirmed shopping market:** United States, Amazon.com, USD ($), associate tag `dacam93-20`, explicitly required by the user. This replaces the earlier inferred regional setup. Keep static fallback links and generated links on Amazon.com; earlier marketplace checks do not verify U.S. offers.

The order below resolves usability issues first, then establishes the market and product evidence before refining recommendations and purchase links.

## Step 01 — Repair contrast, typography, and remaining language issues

**Status:** Complete — October 2, 2026. **Dependencies:** None.

- Fix dark headings on dark article headers. Scope the 404 heading styles to that page instead of applying them to every `.section-wrap > h1`.
- Give links suitable colors on both light and dark surfaces; reserve lime text for backgrounds where it remains readable.
- Increase product descriptions, accessory notes, disclosures, and form helper text to practical reading sizes, particularly on phones.
- Translate the CSS-generated badge currently reading “Scelta più vicina alle tue risposte.” Include generated content and accessibility labels in the English-copy check.
- Consolidate conflicting visual rules and theme variables so future changes do not require another layer of overrides.

**Done when:** All page headings and links have adequate contrast, important purchase details are readable without zooming, and visible text is English throughout. Check the homepage, comparison, parking guide, transparency page, and 404 on desktop and mobile.

## Step 02 — Repair the mobile comparison layout

**Status:** Complete — October 2, 2026. **Dependencies:** Step 01.

- Prevent the comparison table from forcing the article and the entire page wider than the viewport.
- Allow horizontal scrolling inside the table container, with a clear mobile scrolling cue and an accessible label.
- Ensure the article/sidebar layout can shrink correctly and long source links wrap safely.
- Check the remaining pages for overflow at narrow widths.

**Done when:** At 360, 390, and 430 px, the page itself has no horizontal overflow; every table column remains reachable within its container. The desktop table and navigation remain usable.

## Step 03 — Refine menu and selector interactions

**Status:** Complete — October 2, 2026. **Dependencies:** Steps 01–02.

- Close the mobile menu after selecting a destination, including an anchor on the current page.
- Keep the menu button state consistent and support keyboard dismissal and navigation.
- Make the selector's interaction consistent: changing an answer updates results; use its button to take the user to the results rather than repeating an invisible update.
- Respect reduced-motion settings, account for the sticky header, and avoid moving the page while users are still changing answers.

**Done when:** A mobile visitor can open the menu, reach the selector, change answers, and reach the results without an overlay obscuring content or unexpected jumps. Keyboard interaction works as well.

## Step 04 — Establish the target market and budget meaning

**Status:** Complete — October 2, 2026. **Dependencies:** None; complete before Steps 05–09.

- Primary market: United States / Amazon.com, explicitly confirmed by the user. Use USD guide budgets and keep the editorial site in English.
- Align the website's country wording, currency, Amazon destination, and supplied Associates tracking ID. Do not assume `dacam93-20` is enrolled in a different marketplace; account enrollment cannot be checked from the static project.
- Budget definition: camera bundle only. State beside the selector that separately purchased storage and parking power are extra, and remind readers to check included items.
- For an international scope, define a small, maintainable country-selection approach before implementing it. Add only marketplaces with confirmed affiliate configuration.

**Done when:** The chosen market and budget definition are documented, and visitors can tell which country and currency the recommendations serve. Any necessary affiliate wording is checked against the selected program's current official requirements.

## Step 05 — Audit the product shortlist and specifications

**Status:** Complete — October 2, 2026. **Dependencies:** Step 04.

- Review the existing five configurations against current manufacturer pages and manuals, plus availability in the chosen market.
- Retain a deliberately small shortlist and document why each configuration earns a place. Add or replace models only to fill a demonstrated use-case gap.
- Verify channel count, sensors, resolution/frame-rate combinations, HDR restrictions, power storage type, parking modes, compatible power kits, memory support, and included versus optional accessories.
- Explicitly explain the A119 Mini 2's 60 fps versus 30 fps HDR modes rather than placing the two claims next to each other without context.
- Keep dated source records and distinguish verified facts from editorial judgments. Check whether budget classifications are plausible for the chosen setup definition; do not present them as live prices.

**Done when:** Each listed configuration has traceable sources, clear accessory requirements, and a defensible budget classification. Conflicting specifications are resolved or clearly qualified. Update dates reflect actual review work.

Audit detail: see [PRODUCT-SOURCES.md](PRODUCT-SOURCES.md) for dated manufacturer sources and the per-model specification record. Current Amazon.com stock, exact bundles, and offer prices remain listing-specific; the site uses labeled search destinations and USD camera-bundle guide bands. Earlier marketplace results are not evidence of U.S. availability. Recheck exact U.S. listings before adding ASINs or revising the bands.

## Step 06 — Make recommendation rules consistent and explainable

**Status:** Complete — October 2, 2026. **Dependencies:** Steps 03–05.

- Treat requested front/rear/cabin coverage as a requirement. Do not mix incompatible configurations into normal matching results.
- Handle no-match cases explicitly: show matching coverage above the budget as such, and put reduced-coverage alternatives in a separately labeled area.
- Keep the $150 cabin request's matching 3CH option explicitly above budget, and distinguish any lower-coverage alternatives.
- Base video-priority ordering on documented criteria. Explain why the first option is ranked first without claiming unperformed comparative tests.
- Make vehicle and parking answers affect concrete advice or suitability. Do not let a vehicle category silently override requested coverage.
- Support a single useful match without padding the result list. Explain the shortlist's limits when a quality-first choice has no additional candidates.

**Done when:** Representative combinations of budget, coverage, vehicle, video priority, and parking produce understandable results. No normal result violates the coverage requirement; every budget or coverage compromise is explicit.

The implementation contract in `assets/site.js` is: filter to exact requested coverage, then separate within-band candidates from above-band candidates; only when no exact-coverage candidate is within band, show reduced-coverage alternatives in their own labeled section. Video ordering uses documented resolution/HDR features. Vehicle choice changes installation/privacy advice, and parking choice changes power advice without overriding coverage.

## Step 07 — Write decision-focused comparisons and guides

**Status:** Complete — October 2, 2026. **Dependencies:** Steps 05–06.

- Give each model a short “choose this if,” “skip this if,” and “what you give up” explanation.
- Explain the practical differences between the A229 Plus and Pro, and give the 70mai configuration a concrete role instead of describing a “different specification mix.”
- Add relevant comparison fields from the audited data, such as parking behavior, heat-related design considerations, CPL, and required accessories.
- Provide original footage or first-hand external test sources where useful, clearly attributed and distinguished from manufacturer specifications. Do not imply DashCamGator performed tests it has not performed.
- Make the parking guide answer purchasing questions with model-specific kit references and links back to the relevant recommendations.
- Reduce repeated generic caveats while keeping relevant limits next to the claims they qualify.

**Done when:** A reader can explain why one option suits them better than another without opening Amazon. An informed visitor can trace important claims and distinguish specifications, external testing, and editorial opinion.

The comparison now states model-specific choose/skip/trade-offs, CPL/accessory and power differences, heat-related design notes, and the A229 Plus-versus-Pro decision. External test references are attributed and clearly separated from the site's own untested editorial recommendations. The parking guide includes a model/kit matrix and direct links to product and manual sources.

## Step 08 — Improve the homepage for visitors arriving from Reddit

**Status:** Complete — October 2, 2026. **Dependencies:** Steps 01–03 and 06–07.

- Put a concise, qualified recommendation and an obvious route to the selector near the top, including on mobile.
- Present a few fast starting points tied to common requests: budget, front/rear, parking, and cabin coverage, using the audited shortlist.
- Make the strongest reason for each recommendation visible before accessory details and qualifications.
- Reduce introductory and decorative space where it delays the answer. Keep a recognizable automotive/tech identity and clear reading hierarchy.
- Use accurately labeled model images with permission, or clear configuration diagrams, when they help users distinguish products. Do not present the generic camera illustration as a specific model.

**Done when:** A new visitor can quickly identify a relevant option, understand its main compromise, and reach its purchase link or a useful comparison. The mobile first screen communicates the site's value and next action clearly.

The old large decorative camera/road illustration has been removed from the opening viewport. The hero now gives one qualified front/rear starting point and direct Amazon and selector actions. Four concise quick picks cover front-only budget, everyday front/rear, parking power, and cabin recording, with the main trade-off and direct destination visible for each.

## Step 09 — Improve Amazon destinations and link maintenance

**Status:** Complete, October 2, 2026. **Dependencies:** Steps 04–05 and 07–08.

- Check whether verified Amazon.com product-detail destinations are available for each exact configuration; retain the search fallback when a matching bundle cannot be confirmed.
- Confirm channel count, included accessories, and marketplace before attaching a product-detail affiliate link. Do not invent ASINs or treat different bundles as interchangeable.
- Centralize product destinations and tracking configuration so homepage, selector, and comparison links resolve through the catalog in `assets/site.js`.
- Label search fallbacks honestly, and construct affiliate parameters with `URLSearchParams`.
- Keep disclosures near relevant links and use the selected program's verified requirements. Amazon-hosted product images may load from their documented image CDN sources; keep the source listing in `PRODUCT-SOURCES.md`, link photos to the existing affiliate destination, and do not treat an image-source ASIN as a confirmed purchase link.

**Done when:** Purchase buttons clearly identify their destination and open the intended model/configuration where verified. Affiliate configuration is consistent and documented. Link checking does not require making a purchase.

**Completion record:** Product IDs on homepage and comparison links resolve through the shared catalog and `URLSearchParams` tracking builder. The original work left ASINs unset because exact offers were not verified. After the user's explicit market correction, all active and fallback destinations use Amazon.com with USD guide budgets; bundle/channel caveats stay beside the calls to action. See the correction record below and [PRODUCT-SOURCES.md](PRODUCT-SOURCES.md) for the current verification limits.

## Step 10 — Perform the complete visitor review again

**Status:** Complete — October 2, 2026. **Dependencies:** Steps 01–09.

- Repeat the Reddit-arrival journey as both a first-time buyer and an informed dash-cam user.
- Check desktop and narrow mobile layouts, text contrast and size, keyboard access, menu behavior, selector results, and comparison scrolling.
- Revisit the known failures: Italian generated badge, dark article headings, low-contrast links, whole-page table overflow, menu left open, and incompatible fallback recommendations.
- Review purchase destinations, disclosures, English metadata, source records, canonical URLs, sitemap, and 404 behavior.
- Record findings and resolve remaining blocking defects before declaring the site ready for publication. Do not infer conversion rates or user preference from this review alone.

**Done when:** The known failures are resolved, the selected journeys work, and a short review record describes what was checked and any remaining limitations.

Review detail: [REVIEW.md](REVIEW.md) records the visitor journeys, 40 page/width checks, nine selector cases, keyboard/navigation checks, Amazon destination sample, source links, metadata, and repaired defects. Step 11 remains pending.

## Step 11 — Prepare and publish through GitHub Pages

**Status:** Pending. **Dependencies:** Step 10 and a specific user assignment authorizing publication.

- Confirm the repository, publishing branch, domain ownership, and current official GitHub Pages configuration requirements.
- Prepare the static publishing files, custom-domain configuration, sitemap, and canonical URLs for the actual destination.
- Publish using GitHub Pages and configure verified DNS and HTTPS as authorized.
- Check the public URL, navigation, assets, 404, and affiliate destinations after publication; document the deployed revision and maintenance procedure.

**Done when:** The authorized public site is reachable over HTTPS and the published version matches the reviewed project. Public deployment, DNS changes, and domain configuration happen only during this explicitly assigned step.

## Progress record

When a step is assigned and completed, update its status and record the date, changed files, relevant checks, and outstanding decisions. Keep every unassigned step pending.

- **Step 01 — Complete, October 2, 2026.** Updated theme tokens, heading/link contrast, product and disclosure type sizes, the generated result badge, and 404 heading scope in `assets/site.css` and `404.html`. Checked the homepage, comparison, parking guide, transparency page, and 404 at 1440 px and 390 px. Confirmed guide headings are white on dark headers; ordinary article links are teal on light backgrounds; the homepage night-guide link is lime on its dark panel; the result badge reads “Closest match”; product detail text is 12 px and affiliate notes are at least 11 px. The page-wide comparison overflow remains for Step 02.
- **Step 02 — Complete, October 2, 2026.** Made the comparison table scroll inside its own labeled, keyboard-focusable region, added a narrow-screen scroll cue, let the article grid shrink, wrapped long source URLs, and reduced the transparency page's long heading responsively in `compare.html` and `assets/site.css`. Checked all five pages at 360, 390, and 430 px with no page-wide horizontal overflow, then checked the comparison and navigation across desktop and tablet widths. Scrolling the comparison table stayed inside its container (`scrollLeft` 400; page horizontal scroll 0). No additional market or product decisions were made.
- **Step 03 — Complete, October 2, 2026.** Updated the menu behavior and selector copy in `assets/site.js` and `index.html`, with sticky-header result spacing and an open-state style in `assets/site.css`. At 390 px, checked open/close state, Escape with focus restoration, Tab/Enter navigation, same-page anchor navigation, and a link to the comparison page; resizing an open menu to 1280 px closed it and returned to a collapsed mobile state. Changing a visible answer updated the recommendation without changing scroll position; the action button scrolled the result heading to 100 px from the viewport top, below the 68 px mobile header. The reduced-motion path is wired to `prefers-reduced-motion` and the existing CSS rule; this preview used the default motion preference. Browser console logs were empty.
- **Step 04 — Complete, corrected October 2, 2026.** The original inferred regional market was wrong. The user explicitly confirmed United States / Amazon.com. Updated purchase destinations, country/currency wording, and guide bands to USD in the site and maintenance documents while preserving `dacam93-20`. Budget bands cover the camera bundle; separately purchased microSD and parking power are extra. The site's English associate disclosure matches the statement in the [Amazon.com Operating Agreement](https://affiliate-program.amazon.com/help/operating/agreement/). The static project cannot confirm account enrollment or commission credit.
- **Step 05 — Complete, October 2, 2026.** Audited all five configurations against official product pages and manuals, corrected the A119 Mini 2 and A229 Plus HDR/frame-rate combinations, clarified all-channel resolutions, sensors, storage capacities, power storage, and compatible optional parking kits in `assets/site.js` and `compare.html`, and added the dated [PRODUCT-SOURCES.md](PRODUCT-SOURCES.md) ledger. Kept the five-model shortlist: each configuration covers a distinct front-only, 2CH value, 2CH balanced, cabin, or 4K-front need. Budget tiers remain approximate camera-bundle guides, not current-price claims. The original marketplace checks predated the user's U.S. correction and must not be treated as U.S. availability evidence. No independent image-quality testing was performed. No code tests were run during that specification audit.
- **Step 06 — Complete, October 2, 2026.** Reworked the selector in `assets/site.js` so front, dual, and cabin requests are hard coverage filters; budget matches, matching models above budget, and reduced-coverage alternatives now appear in distinct states/sections. Removed ranking bumps that let vehicle or parking choices override camera coverage. Added visible reasons for the first-ranked model based on published resolution/HDR features, plus answer-specific cable, cabin/privacy, and parking-power guidance. A single matching model is shown alone and described as the only fit in the reviewed shortlist. Updated `assets/site.css` for the separate recommendation groups and `README.md` with the maintenance contract. Reviewed the scenario flow in code; no automated or browser tests were run.
- **Step 07 — Complete, October 2, 2026.** Reworked the comparison table and model advice in `compare.html` to give each configuration a clear choose/skip/trade-off, added a direct A229 Plus/Pro decision, and explained CPL, parking, storage, sensor/frame-rate, and heat-design implications. Added a dated external A229 Pro road-test reference while disclosing the reviewer says the unit came from VIOFO and separating that review from DashCamGator's editorial analysis. Reworked `parking-mode.html` with a five-model kit/mode/card matrix, model-specific purchase checks, internal comparison links, and dated official manufacturer/manual sources. No independent footage or lab tests were performed by DashCamGator; no automated or browser tests were run.
- **Step 08 — Complete, October 2, 2026.** Replaced the homepage's broad introductory hero with a concise, qualified A229 Plus 2CH starting recommendation, clear affiliate and selector actions, and a prominent caveat about the spec-based recommendation in `index.html`. Removed the large generic camera illustration from the opening viewport and added four fast paths for front-only budget, front/rear, parking power, and cabin use, each with its primary trade-off and direct destination. Added responsive homepage-specific rules in `assets/site.css` and maintenance notes in `README.md`. Reviewed the markup and destinations; no browser or automated tests were run.

- **Step 10 — Complete, October 2, 2026.** Repeated first-time and informed Reddit-arrival journeys and recorded the results in REVIEW.md. Fixed the invisible hero purchase text, nested recommendation grids, tiny/low-contrast quick-pick and affiliate text, nested-URL 404 recovery, Pro CTA placement, table link affordances, the broken 70mai PDF source, and the transparency page's form wording in index.html, assets/site.css, compare.html, parking-mode.html, 404.html, transparency.html, and PRODUCT-SOURCES.md. Checked five pages at eight widths (40 combinations), nine selector cases plus vehicle/parking advice, keyboard/menu/scroll behavior, source destinations, English metadata, sitemap/canonicals, JavaScript syntax, and internal file/fragment targets. The original external-market search test predated the U.S. correction; current Amazon.com checks are recorded separately in REVIEW.md. Exact offers and account attribution remain unverified. Public deployment and destination-path configuration remain Step 11.
- **User-requested market correction — Complete, October 2, 2026.** Set all purchase destinations to Amazon.com, the shopping market to United States, and budget labels to USD while preserving `dacam93-20` and English copy. Updated `assets/site.js`, `index.html`, `compare.html`, `transparency.html`, `README.md`, this roadmap, `PRODUCT-SOURCES.md`, and `REVIEW.md`. Inspected the desktop/mobile homepage, generated selector links, all five comparison destinations, and transparency wording; scanned the source for the previous market and currency. Marked earlier marketplace evidence as superseded. Current U.S. offers and exact ASINs remain unverified, so the labeled search destinations are retained. Step 11 remains pending.
- **Product images — Complete, October 2, 2026.** Added matching Amazon.com image CDN photos for all five shortlisted models to homepage quick picks, selector results, the comparison recommendations, and the parking-model table. Product photos link to each model's existing tagged search; they do not replace search destinations with unverified ASINs. Documented source listings and URLs in `PRODUCT-SOURCES.md`, updated Amazon image request wording in `transparency.html`, and recorded maintenance instructions in `README.md`. Local image loading and responsive presentation are checked in `REVIEW.md`.
- **Site icons and critical visitor fixes — Complete, October 2, 2026.** Added SVG, ICO, and Apple touch icons to all five pages. Repaired cropped product photos, made generated vehicle advice follow the selected vehicle, preserved full model names, shortened introductory copy, enlarged mobile secondary-link touch areas, added an unavailable-photo fallback, and tagged static Amazon.com URLs. Updated the maintenance and review records. The focused browser review covers five pages at four widths and representative interactions; see `REVIEW.md`. Broader editorial research and Step 11's full hosting/configuration audit remain separate work.
- **Google Analytics and sitemap — Complete, October 6, 2026.** Added the user-supplied measurement ID to all five page heads and updated the transparency and maintenance notes. The existing root sitemap already covered the four indexable pages; refreshed their `lastmod` dates. See `REVIEW.md` for the public sitemap URL.
