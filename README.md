# DashCamGator

Static English-language website for helping drivers choose a dash cam. Built with plain HTML, CSS, and JavaScript; no framework, build step, or backend.

## Improvement roadmap

See [ROADMAP.md](ROADMAP.md) for the prioritized steps following the desktop and mobile review. Steps 01–04 are complete; steps 05–11 remain pending. Execute only the step assigned by the user.

## Initial build roadmap

1. **Small site structure:** homepage, model comparison, parking-mode guide, and transparency page; shared styles and selector data in `assets/`.
2. **Answer-first homepage:** selector for budget, coverage (front, dual, or cabin), vehicle type, night-video priority, and parking mode; recommendations link directly to Amazon.
3. **A few useful guides:** comparison table for trade-offs and a practical guide to off-engine power.
4. **Product selection:** five VIOFO and 70mai configurations based on manufacturers’ published specifications. No live prices or Amazon product images; the Amazon listing is where visitors check current prices and bundles.
5. **Affiliate links:** tracking ID `dacam93-20`, affiliate links labeled near calls to action, and the Amazon disclosure in the footer and on the transparency page.
6. **Essential technical SEO:** page titles and descriptions, canonical URLs on the custom domain, sitemap, robots.txt, English language metadata, and a 404 page.
7. **Publishing:** push the repository root to GitHub, enable Pages from the main branch, verify and connect `dashcamgator.com`, update DNS, enable HTTPS, then review links and mobile layout.

## Updating products and affiliate links

- Models, selector rules, and Amazon search terms are near the top of `assets/site.js`.
- Update specifications after checking the manufacturer's product page or manual. The selector's budget levels are editorial filters, not current prices.
- If you change the marketplace or tracking ID, update the hard-coded Amazon links in `compare.html` and the disclosure on every page.
- Do not add fixed Amazon prices or copied product images. Visitors should confirm the exact configuration on the linked listing.
- Keep all public-facing copy and page metadata in English. Set each HTML document to `<html lang="en">` and update the English meta description when a page changes.

## Visual system

- The visual direction is automotive and tech: cool steel backgrounds, graphite and midnight-blue panels, petrol teal, high-visibility lime, and amber signal accents.
- Keep the display, body, and monospace font stacks in the shared `assets/site.css` theme. They use system fonts, so the site does not depend on a remote font service.
- Shared component styles live in the same stylesheet; carry them across the homepage, comparison, and guide pages when adding new sections.

## Publishing with GitHub Pages

1. Push these files to the branch you will publish.
2. In **Settings → Pages**, select the branch and repository root (`/`) as the publishing source.
3. In **Settings → Pages → Add a domain**, verify `dashcamgator.com` using the TXT record GitHub provides. GitHub recommends verifying the domain before associating it with the repository.
4. After verification, set `dashcamgator.com` as the custom domain in Pages settings, then add the DNS records for the apex domain. GitHub Pages uses these `A` record addresses: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Optional: point `www` to your account’s GitHub Pages domain with a `CNAME` record.
5. Once DNS has propagated, enable **Enforce HTTPS**. When publishing from a branch, GitHub Pages stores the custom domain in a root-level `CNAME` file.
6. Open the published site and check Amazon links and tag `dacam93-20`, internal links, sitemap, and mobile layout.

## Main files

- `ROADMAP.md` — pending improvement steps, dependencies, and completion criteria.
- `index.html` — homepage and quick selector.
- `compare.html` — comparison table, trade-offs, and technical sources.
- `parking-mode.html` — guide to recording while parked.
- `transparency.html` — editorial method, affiliate links, and essential data-use information.
- `assets/site.css`, `assets/site.js` — responsive design and recommendations.
- `sitemap.xml`, `robots.txt`, `404.html`, `.nojekyll` — GitHub Pages support files.
