# Clenz — clenz.org

Detox and massage studio in Roermond. Built on [EmDash](https://github.com/emdash-cms/emdash) (Astro) and deployed to Cloudflare Workers in the **clenz.org** Cloudflare account by Workers Builds on every push to `main`. Runs on the Workers Free plan.

- Live: https://clenz.org (English), /nl, /de
- Admin: https://clenz.org/_emdash/admin
- Bindings: D1 `clenz`, R2 `clenz-media`, KV `SESSION` (created by the adapter)

## Where things live
- Scroll sequence on /massage and /detox: `src/components/TreatmentMoments.astro`, copy in `src/i18n.ts` (`moments`, `momentsDetox`).
- Inspiration feed and lightbox: `src/components/Gallery.astro`.
- Opening hours, navigation labels and all fixed UI text: `src/i18n.ts`.
- Treatments, prices, pages and photos: edited in the admin.

Moved from the balitechcenter Worker (Master account) in Nov 2026; content and media were copied 1:1.
