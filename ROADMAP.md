# DashCamGator improvement roadmap

Created after the desktop and mobile review on October 2, 2026.

## How to use this plan

All implementation steps below are **pending**. Creating this document does not authorize their execution. Complete only the step explicitly assigned by the user, report the result, and wait for the next assignment. A request for a step includes its relevant checks; it does not include later steps or publication.

Keep the website and its maintenance documents in English. Continue using plain HTML, CSS, and JavaScript with GitHub Pages. Preserve the automotive/tech visual direction and a small, maintainable page count.

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

- Primary-market default: Italy, inferred from the existing Amazon.it links, euro ranges, and supplied `dacam93-20` tag. Keep the editorial site in English. Confirm the audience choice with the user if there is a reason to change it.
- Align the website's country wording, currency, Amazon destination, and supplied Associates tracking ID. Do not assume `dacam93-20` is enrolled in a different marketplace; account enrollment cannot be checked from the static project.
- Budget definition: camera bundle only. State beside the selector that separately purchased storage and parking power are extra, and remind readers to check included items.
- For an international scope, define a small, maintainable country-selection approach before implementing it. Add only marketplaces with confirmed affiliate configuration.

**Done when:** The chosen market and budget definition are documented, and visitors can tell which country and currency the recommendations serve. Any necessary affiliate wording is checked against the selected program's current official requirements.

## Step 05 — Audit the product shortlist and specifications

**Status:** Pending. **Dependencies:** Step 04.

- Review the existing five configurations against current manufacturer pages and manuals, plus availability in the chosen market.
- Retain a deliberately small shortlist and document why each configuration earns a place. Add or replace models only to fill a demonstrated use-case gap.
- Verify channel count, sensors, resolution/frame-rate combinations, HDR restrictions, power storage type, parking modes, compatible power kits, memory support, and included versus optional accessories.
- Explicitly explain the A119 Mini 2's 60 fps versus 30 fps HDR modes rather than placing the two claims next to each other without context.
- Keep dated source records and distinguish verified facts from editorial judgments. Check whether budget classifications are plausible for the chosen setup definition; do not present them as live prices.

**Done when:** Each listed configuration has traceable sources, clear accessory requirements, and a defensible budget classification. Conflicting specifications are resolved or clearly qualified. Update dates reflect actual review work.

## Step 06 — Make recommendation rules consistent and explainable

**Status:** Pending. **Dependencies:** Steps 03–05.

- Treat requested front/rear/cabin coverage as a requirement. Do not mix incompatible configurations into normal matching results.
- Handle no-match cases explicitly: show matching coverage above the budget as such, and put reduced-coverage alternatives in a separately labeled area.
- Correct the reproduced case where a €150 cabin request also returns front-only and front/rear cameras without distinguishing the coverage compromises.
- Base video-priority ordering on documented criteria. Explain why the first option is ranked first without claiming unperformed comparative tests.
- Make vehicle and parking answers affect concrete advice or suitability. Do not let a vehicle category silently override requested coverage.
- Support a single useful match without padding the result list. Explain the shortlist's limits when a quality-first choice has no additional candidates.

**Done when:** Representative combinations of budget, coverage, vehicle, video priority, and parking produce understandable results. No normal result violates the coverage requirement; every budget or coverage compromise is explicit.

## Step 07 — Write decision-focused comparisons and guides

**Status:** Pending. **Dependencies:** Steps 05–06.

- Give each model a short “choose this if,” “skip this if,” and “what you give up” explanation.
- Explain the practical differences between the A229 Plus and Pro, and give the 70mai configuration a concrete role instead of describing a “different specification mix.”
- Add relevant comparison fields from the audited data, such as parking behavior, heat-related design considerations, CPL, and required accessories.
- Provide original footage or first-hand external test sources where useful, clearly attributed and distinguished from manufacturer specifications. Do not imply DashCamGator performed tests it has not performed.
- Make the parking guide answer purchasing questions with model-specific kit references and links back to the relevant recommendations.
- Reduce repeated generic caveats while keeping relevant limits next to the claims they qualify.

**Done when:** A reader can explain why one option suits them better than another without opening Amazon. An informed visitor can trace important claims and distinguish specifications, external testing, and editorial opinion.

## Step 08 — Improve the homepage for visitors arriving from Reddit

**Status:** Pending. **Dependencies:** Steps 01–03 and 06–07.

- Put a concise, qualified recommendation and an obvious route to the selector near the top, including on mobile.
- Present a few fast starting points tied to common requests: budget, front/rear, parking, and cabin coverage, using the audited shortlist.
- Make the strongest reason for each recommendation visible before accessory details and qualifications.
- Reduce introductory and decorative space where it delays the answer. Keep a recognizable automotive/tech identity and clear reading hierarchy.
- Use accurately labeled model images with permission, or clear configuration diagrams, when they help users distinguish products. Do not present the generic camera illustration as a specific model.

**Done when:** A new visitor can quickly identify a relevant option, understand its main compromise, and reach its purchase link or a useful comparison. The mobile first screen communicates the site's value and next action clearly.

## Step 09 — Improve Amazon destinations and link maintenance

**Status:** Pending. **Dependencies:** Steps 04–05 and 07–08.

- Replace search destinations with verified product-detail links for the exact configuration where suitable listings are available.
- Confirm channel count, included accessories, and marketplace before attaching an affiliate link. Do not invent ASINs or treat different bundles as interchangeable.
- Centralize product destinations and tracking configuration to avoid inconsistent links across the homepage, selector, and comparison page.
- Label any necessary search fallback honestly, and check that tracking parameters survive URL construction.
- Keep disclosures near relevant links and use the selected program's verified requirements. Do not introduce copied Amazon images or fixed price claims without an authorized, maintainable method.

**Done when:** Purchase buttons clearly identify their destination and open the intended model/configuration where verified. Affiliate configuration is consistent and documented. Link checking does not require making a purchase.

## Step 10 — Perform the complete visitor review again

**Status:** Pending. **Dependencies:** Steps 01–09.

- Repeat the Reddit-arrival journey as both a first-time buyer and an informed dash-cam user.
- Check desktop and narrow mobile layouts, text contrast and size, keyboard access, menu behavior, selector results, and comparison scrolling.
- Revisit the known failures: Italian generated badge, dark article headings, low-contrast links, whole-page table overflow, menu left open, and incompatible fallback recommendations.
- Review purchase destinations, disclosures, English metadata, source records, canonical URLs, sitemap, and 404 behavior.
- Record findings and resolve remaining blocking defects before declaring the site ready for publication. Do not infer conversion rates or user preference from this review alone.

**Done when:** The known failures are resolved, the selected journeys work, and a short review record describes what was checked and any remaining limitations.

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
- **Step 04 — Complete, October 2, 2026.** Recorded Italy as the operational market based on the existing Amazon.it links, euro bands, and supplied `dacam93-20` tag; this is an inference from the current setup, not an explicit audience confirmation. Kept all editorial copy in English and added an English market/currency and camera-bundle-only budget note beside the homepage selector in `index.html` and `assets/site.css`. Checked the note at 390 px and 1280 px with no horizontal page overflow; existing recommendation links still resolve to Amazon.it. Separately purchased microSD storage and parking power are outside the budget band. Reviewed the current official program agreements: Amazon.it publishes an Italian associate statement or a permitted substantially similar statement; the site's existing English sentence expresses the same meaning. Treat that language equivalence as an interpretation and recheck it in the Associates account before publication. The Amazon.com guidance says international attribution requires OneLink/store configuration; no non-Italian marketplace was added, and this static project cannot verify account enrollment. References: [Amazon.it Operating Agreement](https://programma-affiliazione.amazon.it/help/operating/agreement), [Amazon.com Operating Agreement](https://affiliate-program.amazon.com/help/operating/agreement/), and [Amazon OneLink guidance](https://affiliate-program.amazon.com/help/node/topic/GAGAL4V362SH7EC5).
