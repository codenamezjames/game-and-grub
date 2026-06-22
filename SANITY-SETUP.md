# Sanity — status & remaining steps

## Done (set up and live)

- **Project:** `orw8lnqj`, dataset `production` (public-read).
- **Content seeded:** `data.json` was pushed in as the `siteContent` document.
- **Website connected:** `index.html` reads from Sanity, with `data.json` → baked HTML as
  fallbacks. (Project id is public; no write token in the file.)
- **Studio built + deployed:** **https://games-and-grub-pensacola.sanity.studio/**
  - Lives in `studio/` (standalone, not bundled with the site).
  - Configured as a singleton: owners open straight into one "Site Content" screen, no
    confusing document lists, no "create new".

## Remaining (you)

1. **Invite the owners** so they can log in and edit:
   manage.sanity.io → project `orw8lnqj` → Members → invite Ashley / Tyler as **Editor**.
   (Free plan covers a couple of editors.)
2. **Publish the website:** upload `index.html`, `data.json`, and `img/` to the shared
   server (FTP / cPanel). That's the whole site.
3. **Add your live domain to CORS:** manage.sanity.io → API → CORS origins →
   `https://yourdomain.com` (allow credentials OFF). Until then the live site falls back to
   `data.json`, so it never breaks. (`http://localhost:8767` is already added for testing.)
4. **Rotate the token** you pasted earlier (it was Admin-scoped and shared in plaintext):
   manage.sanity.io → API → Tokens → delete it. The site doesn't need it.

## How owners edit, day to day

Go to **https://games-and-grub-pensacola.sanity.studio/**, log in, change hours / menu /
specials / prices, click **Publish**. Changes appear on the site within a few minutes (CDN
cache). No code, no redeploys.

## Re-deploying the Studio (only if the schema changes)

```bash
cd studio
npx sanity deploy
```
