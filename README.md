# Ryetek Industrial Systems — Website

React (Vite) + Tailwind CSS v4 + Framer Motion + React Router.

## Structure

- **Home** (`/`) — hero, capability overview grid (links into Capabilities), stats, process, CTA
- **Capabilities** (`/capabilities`) — full deep-dive on all 10 capability areas (concrete &
  asphalt, bitumen storage, process systems, thermal, material handling, material processing,
  recycling, automation, engineering R&D, machine parts), each with an anchor link
  (e.g. `/capabilities#bitumen-storage`) so Home cards and the footer can deep-link directly
  into a section
- **WearGuard** (`/wearguard`) — dedicated page for the WearGuard wear-parts product line
- **Engineering** (`/engineering`) — dedicated deep-dive on Engineering, R&D & Product
  Development (capability 09 pulled out as its own page per your request for key deep-dives)
- **Contact** (`/contact`) — enquiry form + contact details

All capability copy lives in one place: `src/data/capabilities.js`. Edit it there and both the
Home cards and the Capabilities page update automatically.

## Running locally

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
```

Outputs to `dist/`. Deploy with:

```bash
vercel        # or
netlify deploy
```

## Images — read this before going live

Every photo slot on the site currently uses an **original SVG illustration placeholder**
(`src/components/PhotoPlaceholder.jsx`) — silo, tank, conveyor, gear, control-panel, drum, and
parts motifs in your brand colors. These are intentional placeholders, not stock photos —
I didn't hotlink commercial stock-photo previews into a production site without a license.

To swap in real photography:

1. Drop your image files into `src/assets/images/`.
2. In the relevant page/component, replace:
   ```jsx
   <PhotoPlaceholder motif="silos" className="aspect-[4/3] w-full" />
   ```
   with:
   ```jsx
   <img src={yourImage} alt="..." className="aspect-[4/3] w-full object-cover" />
   ```
3. Good sources if you don't have your own facility photography yet: your own site visits/drone
   shots (best — nothing beats real plant photos for an industrial site), or free
   commercial-use stock from unsplash.com / pexels.com as a placeholder until then.

## Contact form

The form in `src/pages/Contact.jsx` currently logs to console and shows a success state —
there's no backend wired up yet. To make it functional, pick one:

- **Web3Forms** (simplest): sign up for a free access key, POST the form data to
  `https://api.web3forms.com/submit` in the `handleSubmit` function.
- **EmailJS**: install `@emailjs/browser`, configure a service/template, call
  `emailjs.send(...)` in `handleSubmit`.

## Brand tokens

Defined in `src/index.css` under `@theme` (Tailwind v4's CSS-based config — no
`tailwind.config.js` needed):

- `navy-950` → `navy-600` — primary dark brand range
- `teal-500` / `teal-400` / `teal-300` — Ryetek accent (matches logo)
- `amber-400` — WearGuard's distinct accent, keeping it visually a product line rather than a
  clone of the main site
