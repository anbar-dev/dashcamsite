# DashCamGator visitor review

**Date:** October 2, 2026 · **Roadmap step:** 10 · **Environment:** local static preview in the Codex in-app browser.

**Result:** completed the selected visitor journeys and repaired the blocking layout, contrast, and recovery defects found during this review. The checked local pages are ready for the publishing work in Step 11. Public hosting, DNS, HTTPS, and the deployed revision still need that step's checks.

## Visitor journeys

**First-time buyer arriving from Reddit:** the opening screen names a front/rear starting point, states the HDR/frame-rate compromise, and offers the selector immediately. Following the user's market correction, it identifies United States / Amazon.com and USD guide budgets. Quick picks offer direct routes for front only, front/rear, parking power, and cabin recording. The selector distinguishes matching coverage above budget from cheaper options that sacrifice coverage. Accessories and approximate budget meaning remain visible before purchase.

**Informed dash-cam reader:** the comparison exposes model-specific choose/skip/trade-offs, Plus versus Pro differences, parking power, and optional accessories. Table model links lead to the relevant detail and purchase action; manufacturer sources and the attributed external road test are reachable. The parking guide connects the five models to their kits and storage requirements. Recommendations explicitly use published specifications; this review does not establish actual night-video performance.

**Appearance:** graphite/teal, lime accents, the automotive font stack, and the compact camera graphics form a consistent identity. The homepage gives an answer before decorative content. Articles retain a readable light body under a dark heading panel. Quick-pick text and purchase notes now use practical sizes; the technical sections remain text-heavy by design.

## Defects found and repaired

| Finding | Correction and confirmation |
| --- | --- |
| The hero Amazon button's text matched its teal background. | Scoped its text color to the light theme token. Checked the rendered button on desktop and mobile. |
| An outer product grid contained the recommendation groups' own grids. Desktop cards shrank to about 118 px. | Removed the outer grid class. Default desktop cards are now about 383 px and mobile cards about 339 px at a 390 px viewport. |
| Quick-pick disclosures were 8 px, and several small-text colors fell below a 4.5:1 contrast target. | Increased quick-pick body text to 13 px, links/trade-offs to 12 px, and notes to 11 px. Darkened affected labels/notes and aligned checkbox focus styling with the shared focus color. Rechecked the rendered text colors. |
| A nested missing URL resolved 404 assets and the home link relative to the missing directory. | Used root paths for the intended custom-domain site and added `noindex`. A nested missing URL renders with the shared font and its home button returns to `/`. |
| The Pro purchase action appeared after general comparison and testing caveats. Table links did not look distinct from text. | Moved the action beside the Pro model advice and underlined/colored table model links. The model anchor remains below the sticky header. |
| The 70mai PDF source returned HTTP 404. | Replaced it with the verified official support index, labeled to select A510, in both guides and the source ledger. |
| The transparency page said there were no forms while the site includes a local selector. | Clarified that there are no contact forms and that the interactive selector calculates locally without storing answers. |

## Checks performed

- All five HTML pages at widths 360, 390, 430, 701, 768, 950, 1024, and 1440 px: 40 page/width combinations, with no page-wide horizontal overflow.
- Desktop/mobile visual inspection of the homepage, comparison, parking guide, transparency page, and 404. Final text checks at 1440 and 390 px found no failures in the sampled headings, links, labels, paragraphs, and notes against 4.5:1 normal-text / 3:1 large-text targets. This is a focused review, not an accessibility certification.
- Keyboard skip link, Tab/Enter navigation, menu open/close, Escape with focus restoration, same-page and cross-page menu destinations, and an open menu resized to desktop.
- Keyboard checkbox operation and focus visibility. Changing an on-screen budget answer left scroll position unchanged (1925 px before and after); submitting moved the result heading to about 100 px, below the 68 px mobile header.
- Nine selector cases: front/dual/cabin at the lowest band, dual at the middle and higher bands, higher-band and uncapped night priorities, an uncapped front-only request, and an in-band cabin request. All primary cards retained requested coverage; reduced-coverage alternatives stayed separately labeled. Also checked compact/large/work advice and parking off.
- Mobile comparison-region keyboard scrolling reached `scrollLeft: 120` while page horizontal scroll remained zero. Both model tables have accessible region labels, keyboard focus, and a narrow-screen scroll cue.
- Internal file/fragment audit: no missing targets. JavaScript syntax check passed. Final sampled local pages produced no browser warnings or errors.
- All indexable pages have English language metadata, a title, description, one H1, and canonicals consistent with the four sitemap entries and robots.txt. The 404 is excluded from the sitemap and marked `noindex`.
- The original affiliate checks used an incorrectly inferred regional marketplace. The representative A229 Plus 2CH search opened and included that configuration before the market correction; that result does not verify any Amazon.com offer. Current U.S. destination checks are recorded separately below. Exact offers, accessories, live prices, account enrollment, and commission credit remain unverified.
- Opened the four VIOFO product sources, both 70mai product/specification sources, VIOFO's manual index, the replacement 70mai support index, and the attributed external A229 Pro review. The broken PDF and its obsolete CDN copy were not retained.

## Market correction — October 2, 2026

The user explicitly requires **United States / Amazon.com / USD ($)**. Corrected the shared marketplace URL in `assets/site.js`, all static purchase destinations in `index.html` and `compare.html`, purchase-button wording, homepage metadata, country and budget labels, and the transparency page. Preserved `dacam93-20`. Updated `README.md`, `ROADMAP.md`, and `PRODUCT-SOURCES.md` to prevent the previous market assumption from returning.

Focused local checks after the correction:

- The homepage at 1440 px displays United States / Amazon.com. All seven rendered purchase links, including the default selector results, use `www.amazon.com` and `tag=dacam93-20`.
- All five comparison purchase links use `www.amazon.com`, the intended model queries, and the same tag.
- At 390 px, the selector displays $150 / $250 / $350 guide bands. Changing to the lowest budget and cabin coverage generates Amazon.com links for the cabin match and the separately labeled front-only alternative, both with the tag. The homepage had no page-wide horizontal overflow at either sampled width.
- The transparency page identifies Amazon.com for affiliate destinations and external data processing. A source scan found no remaining references to the previous marketplace or currency in HTML, JavaScript, or Markdown files. At this stage, static fallback purchase URLs used Amazon.com without a tag; the site-icon follow-up below adds tracking to those fallbacks.
- Saved updated desktop and mobile homepage previews. These focused checks supplement the original Step 10 review; the full 40 page/width matrix was not repeated.

No exact Amazon.com listing, current price, stock level, or commission attribution was verified by these local destination checks. The earlier external-market search result is superseded and supplies no U.S. availability evidence. Guide bands are approximate editorial filters, not currency conversions or live offer prices.

## Product imagery — October 2, 2026

Added Amazon-hosted product images for all five configurations to the homepage quick picks and selector recommendations, the comparison guide, and the parking-mode table. The front/rear starting recommendation also shows its product photo. Each image links to the same tagged Amazon.com search destination as its existing product buttons. The source listing ASIN is documented in `PRODUCT-SOURCES.md`; exact bundle purchase links remain unchanged.

Updated `transparency.html` to say product images are requested from Amazon when displayed. The images are loaded directly from Amazon's CDN, so this feature depends on the external images remaining available. Reviewed the Amazon product-page title, main image, and model match for each source listing.

Focused local render and load checks after the image changes:

- The homepage and quick-pick photos rendered at 1440 px. All five source images loaded in the parking guide; the photo links use the expected Amazon.com search destination with `dacam93-20`.
- Checked the comparison guide at desktop width and the homepage quick-pick row at 390 px. The homepage image row had no page-wide horizontal overflow (`scrollWidth: 375`, viewport: `390`); the five-photo parking table also had no overflow at 1440 px.
- The images load directly from `m.media-amazon.com`. They depend on Amazon's image CDN and a network connection. This initial imagery change added no local copies or broken-image placeholders; the follow-up below adds an unavailable-photo fallback.

## Site icons and critical visitor follow-up — October 2, 2026

Opened the published homepage as a Reddit visitor, then reviewed the corrections in a local static preview. The opening recommendation, quick picks, consistent automotive colors, and clear coverage trade-offs give a new buyer a useful starting point. An informed reader can inspect sources and limitations, but the shortlist remains narrow and the longer guide sections are dense.

Small corrections completed:

- Added the camera/gator site icon in SVG, a 16/32/48 px ICO, and a 180 px Apple touch icon. All five pages include the icon links, including nested 404 recovery.
- Fixed product photo cropping: the previous grid layout allowed an image's intrinsic height to exceed its fixed-height container. Flex alignment and constrained image dimensions now preserve the complete image on the homepage, generated cards, comparison guide, and parking table.
- Made each recommendation's vehicle advice follow the compact, larger-vehicle, or work-vehicle answer. Restored the full VIOFO model names in generated headings.
- Shortened the opening recommendation and changed the comparison headline to “Five configurations. Clear trade-offs.” The specifications-only method remains visible beside the homepage actions and in the guides.
- Increased the mobile touch area of secondary homepage and quick-pick links. Added a visible unavailable-photo fallback that retains the affiliate destination if Amazon's image fails.
- Added `dacam93-20` to static Amazon.com URLs, preserving affiliate tracking when JavaScript is unavailable.

Focused confirmation:

- All five pages at 360, 390, 768, and 1440 px: 20 page/width combinations, with no page-wide horizontal overflow, no image boxes extending outside their photo containers, and no incorrect Amazon marketplace/tag destinations.
- Visually inspected the desktop/mobile homepage, quick picks, comparison, and parking guide; reviewed the transparency page and nested 404 recovery.
- Checked compact, SUV/van, and work/cabin advice, above-budget cabin results, mobile menu open/Escape/focus behavior, and generated image loading.
- A temporary missing-image fixture displayed the badge and “Photo unavailable” text while preserving the tagged purchase link; the fixture was removed after inspection.
- All three icon URLs returned HTTP 200 with the expected image MIME types. The ICO contains valid 16/32/48 px PNG frames and the Apple icon is 180 × 180 px. A source audit confirmed 25 static Amazon URLs each carry the affiliate tag exactly once.
- The comparison model link finishes below the sticky header. The sampled mobile secondary and quick-pick links have 44 px touch heights; a fresh homepage/selector session produced no browser warnings or errors. JavaScript syntax and Git whitespace checks passed.

This follow-up does not establish live offer prices, exact bundle availability, or actual video performance. The main editorial improvements still require a separate research effort: verified purchase destinations and current budget mapping, a broader shortlist, and attributable footage comparisons. The original full Step 10 audit was not repeated.

## Google Analytics and sitemap — October 6, 2026

Added the user-supplied Google Analytics tag (`G-8QEBQKF536`) to the head of all five HTML pages, including the custom 404. Updated the transparency page to disclose Google Analytics and that its tag can send technical and usage information to Google under Google's policies. The existing sitemap at `https://dashcamgator.com/sitemap.xml` already listed all four indexable pages; updated their `lastmod` dates. `robots.txt` already referenced the sitemap and needed no change.

## Remaining limits for publication

The site serves an English-reading audience shopping on Amazon.com with USD guide bands, as explicitly required by the user. It has a five-configuration shortlist, specification-based ordering, and search destinations; it does not offer original footage or verified current bundle prices. Preserve those qualifications when publishing.

The 404 root paths, canonical URLs, sitemap, and robots.txt assume `dashcamgator.com` at the domain root. If Step 11 publishes only at a GitHub project subpath, adapt these paths to that actual destination. Browser checks covered the in-app Chromium preview; other browser engines, physical devices, and an emulated reduced-motion preference were not exercised. The reduced-motion CSS/JavaScript paths were reviewed in source.
