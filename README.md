# DashCamGator

Static English-language website for helping drivers choose a dash cam. Built with plain HTML, CSS, and JavaScript; no framework, build step, or backend.

## Confirmed market

The user explicitly requires **United States / Amazon.com / USD ($)**. All purchase links, including static no-JavaScript fallbacks, must point to Amazon.com. Use the supplied associate tag **`dacam93-20`**. Keep editorial copy, generated selector text, metadata, and maintenance documents in English. The operator's location does not determine the shopping marketplace.

Budget bands of about $150, $250, and $350 are editorial camera-bundle guides, not currency conversions or verified live Amazon prices. Check U.S. bundle/channel contents before adding an exact ASIN; previous checks made before the market correction do not establish U.S. availability.

## Improvement roadmap

See [ROADMAP.md](ROADMAP.md) for the prioritized steps following the desktop and mobile review. Steps 01–10 are complete; step 11 remains pending. Execute only the step assigned by the user. The latest visitor checks, repairs, and review limits are recorded in [REVIEW.md](REVIEW.md).

## Initial build roadmap

1. **Small site structure:** homepage, model comparison, parking-mode guide, and transparency page; shared styles and selector data in `assets/`.
2. **Answer-first homepage:** selector for budget, coverage (front, dual, or cabin), vehicle type, night-video priority, and parking mode; recommendations link directly to Amazon.
3. **A few useful guides:** comparison table for trade-offs and a practical guide to off-engine power.
4. **Product selection:** five VIOFO and 70mai configurations based on manufacturers’ published specifications. Amazon-hosted product images make the models easier to recognize; live prices and bundles remain on the Amazon listing.
5. **Affiliate links:** tracking ID `dacam93-20`, affiliate links labeled near calls to action, and the Amazon disclosure in the footer and on the transparency page.
6. **Essential technical SEO:** page titles and descriptions, canonical URLs on the custom domain, sitemap, robots.txt, English language metadata, and a 404 page.
7. **Publishing:** push the repository root to GitHub, enable Pages from the main branch, verify and connect `dashcamgator.com`, update DNS, enable HTTPS, then review links and mobile layout.

## Updating products and affiliate links

- Models, selector rules, Amazon search terms, marketplace base URL, tracking tag, and optional exact ASIN destinations are near the top of `assets/site.js`.
- The selector treats requested camera coverage as mandatory. It filters by that first, then applies the bundle-budget guide; if no exact-coverage pick fits, it labels above-budget matches and separates reduced-coverage options. Video ordering is based on published resolution/HDR specifications, not footage tests.
- Vehicle and parking answers produce model-specific installation or power advice. `vehicleAdvice()` combines the chosen vehicle with the model's coverage; do not hard-code a vehicle category into a product card. Keep power notes current with manufacturer compatibility sources.
- Keep [PRODUCT-SOURCES.md](PRODUCT-SOURCES.md) current when changing the shortlist. It records specification sources, review date, bundle caveats, and the limits of marketplace checks.
- Update specifications after checking the manufacturer's product page or manual. The selector's budget levels are editorial filters, not current prices.
- Amazon photo links and buttons use `data-amazon-product` IDs. `assets/site.js` resolves those IDs through the product catalog and builds the active destination with `URLSearchParams`; update `AMAZON_MARKETPLACE`, `AMAZON_TAG`, and the relevant product entry there. HTML `href` values are tagged Amazon.com search fallbacks for visitors without JavaScript; keep their query and `tag=dacam93-20` aligned with the catalog.
- Set a product's `asin` only after confirming the exact Amazon.com detail page and its channel configuration. Keep `asin: null` and the labeled search fallback when a matching listing is not verified; do not guess ASINs or equate different bundles.
- Do not add fixed Amazon prices. Amazon-hosted images for the five models are referenced in `assets/site.js` and documented in `PRODUCT-SOURCES.md`; update the image URL and source listing when changing a model. Visitors should confirm the exact configuration on the linked listing.
- Product photos use Amazon image CDN URLs and link to the existing tagged Amazon.com search destination. They are requested remotely; keep the Amazon image-data note in `transparency.html` accurate if image hosting changes.
- Photo containers use flex alignment and `object-fit: contain` so the full product remains visible. A failed image shows the site badge and a short unavailable-photo message while retaining its purchase link. Check both static and generated cards after changing photo styles.
- Keep all public-facing copy and page metadata in English. Set each HTML document to `<html lang="en">` and update the English meta description when a page changes.
- The homepage's fast picks and lead recommendation live in `index.html`; keep their reasons and trade-offs aligned with `PRODUCT-SOURCES.md` and the comparison page when specifications change.

## Visual system

- The visual direction is automotive and tech: cool steel backgrounds, graphite and midnight-blue panels, petrol teal, high-visibility lime, and amber signal accents.
- Keep the display, body, and monospace font stacks in the shared `assets/site.css` theme. They use system fonts, so the site does not depend on a remote font service.
- Shared component styles live in the same stylesheet; carry them across the homepage, comparison, and guide pages when adding new sections.
- Site icons extend the header's camera/gator mark: `assets/favicon.svg`, root `favicon.ico` (16/32/48 px), and `assets/apple-touch-icon.png` (180 px). All five HTML pages link to these root paths for the custom-domain deployment. Update all variants together when changing the brand.

## Publishing with GitHub Pages

1. Push these files to the branch you will publish.
2. In **Settings → Pages**, select the branch and repository root (`/`) as the publishing source.
3. In **Settings → Pages → Add a domain**, verify `dashcamgator.com` using the TXT record GitHub provides. GitHub recommends verifying the domain before associating it with the repository.
4. After verification, set `dashcamgator.com` as the custom domain in Pages settings, then add the DNS records for the apex domain. GitHub Pages uses these `A` record addresses: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Optional: point `www` to your account’s GitHub Pages domain with a `CNAME` record.
5. Once DNS has propagated, enable **Enforce HTTPS**. When publishing from a branch, GitHub Pages stores the custom domain in a root-level `CNAME` file.
6. Open the published site and check Amazon links and tag `dacam93-20`, internal links, sitemap, and mobile layout.

## Main files

- `ROADMAP.md` — pending improvement steps, dependencies, and completion criteria.
- `REVIEW.md` — dated visitor journeys, checks, repaired defects, and publication limits.
- `index.html` — homepage and quick selector.
- `compare.html` — comparison table, trade-offs, and technical sources.
- `parking-mode.html` — guide to recording while parked.
- `transparency.html` — editorial method, affiliate links, and essential data-use information.
- `assets/site.css`, `assets/site.js` — responsive design and recommendations.
- `sitemap.xml`, `robots.txt`, `404.html`, `.nojekyll` — GitHub Pages support files.
