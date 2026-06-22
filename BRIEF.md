# Website Brief — Games and Grub, Pensacola

*Drafted 2026-06-19*

## The business
Pensacola's first video game restaurant + bar. Rent a console/PC/board game by the
hour, eat game-themed comfort food, hang out. Owned by Ashley & Tyler Borg, in a
converted lounge at 1000 Gulf Beach Hwy, West Pensacola.

- **Address:** 1000 Gulf Beach Hwy, Pensacola, FL
- **Phone:** (850) 287-9430
- **Hours (extended, confirmed June 2026):** Sun–Thu 11am–10pm · Fri–Sat 11am–2am. Open 7 days.
- **Family friendly until 8pm; 18+ after.** Under-16 needs adult supervision.
- **Current web presence:** [Instagram](https://www.instagram.com/gamesandgrub850/),
  [Facebook](https://www.facebook.com/p/Games-and-Grub-61581554401365/),
  [Yelp](https://www.yelp.com/biz/games-and-grub-pensacola), and an existing
  site at `gamesandgrub.netlify.app` (was down/503 during research — likely a
  half-finished or sleeping deploy).

## The offer
- **9 rental gaming stations**, 1–6 players each, **$20/hour**. Xbox One, PS5,
  Switch, 3 gaming PCs, an Atari, plus D&D/tabletop.
- **~85 board games** to rent (Guild Hall), or bring your own.
- **Game-themed menu:** Super Smash Burger, Pika! Pika! grilled cheese, Final
  Fantasy Flatbread, cocktails like Rainbow Road and Pac-Man — every cocktail
  has a mocktail version.
- **"Game experts"** on staff give recommendations.

## Who the site is for
1. **Locals/families** deciding where to go tonight → need hours, menu, prices, "is it kid-friendly right now."
2. **Gamer groups / date nights / parties** → need to know they can reserve a station and book the space.
3. **Tourists** (it's near the beach) → discoverability, "what is this place."

## What the site must do (priority order)
1. **Answer the basics fast** — hours (live "open now" state), address + map, phone, the $20/hr + family-until-8pm rules. This is 80% of why anyone visits the site.
2. **Show the menu** — food + drinks, with the themed names. Photos sell this place.
3. **Show what you can play** — console/PC list, board game catalog, station capacity (1–6).
4. **Reservations / party bookings** — biggest conversion lever. Stations and group events.
5. **Social proof + feed** — pull in Instagram, link reviews.

## Recommendation
Don't build a custom app. This is a **single-page (or few-page) marketing site**.

- **Stack:** static site (Astro or plain HTML/CSS, or a no-code builder if the owners
  will maintain it themselves). Hosting: Netlify/Vercel free tier is fine — but use a
  **custom domain** (e.g. gamesandgrubpensacola.com), not a `.netlify.app` URL.
- **Reservations:** don't hand-build a booking system. Use an existing tool —
  a Google Form/Calendar booking, Resy/SevenRooms/Tock, or even "call/DM to book"
  as v1. Add real software only if call volume becomes a problem.
- **Menu:** plain content on the page, not a PDF. Easy for owners to edit.
- **SEO/local:** the win here is **Google Business Profile**, not the website.
  Make sure GBP is claimed, hours accurate, photos uploaded. The site reinforces it.
- **Must-haves:** mobile-first (most visits are phones deciding "where to eat"),
  fast, click-to-call, embedded map, Instagram link.

## Open questions for the owner
- Confirm exact hours (sources conflict).
- Do they want online reservations now, or is phone/DM enough for v1?
- Who maintains the site after launch? (Drives stack choice — builder vs. code.)
- Do they own a domain yet?
- Is the existing netlify site theirs? Salvage or replace?
- Gift cards / merch / events calendar — in scope or later?

## Suggested v1 scope (lazy version)
One responsive page: hero + tagline → hours/location/call → menu → what to play
→ "book a station" (links to a form or phone) → Instagram feed → footer. Custom
domain, Google Business Profile cleaned up. Ship that, add reservations software
and an events page only when demand proves it out.

## Sources
- [Instagram @gamesandgrub850](https://www.instagram.com/gamesandgrub850/)
- [Facebook](https://www.facebook.com/p/Games-and-Grub-61581554401365/)
- [Yelp](https://www.yelp.com/biz/games-and-grub-pensacola)
- [AOL / news article](https://www.aol.com/articles/games-grub-offers-hangout-gamers-100549661.html)
- [RollForStore listing](https://www.rollforstore.com/store/games-and-grub-pensacola-fl)
- [Existing site (down at research time)](https://gamesandgrub.netlify.app/)
