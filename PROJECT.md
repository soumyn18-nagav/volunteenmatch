# VolunteenMatch — Project Status

Mobile app for teens to find volunteering opportunities in Columbus, Ohio.

---

## What We Have

| File / Folder | Purpose |
|---|---|
| `App.tsx` | Root component — single centered screen, placeholder text |
| `index.ts` | Entry point — registers App with the native runtime |
| `app.json` | App manifest — name, icons, platform config |
| `package.json` | Dependencies: Expo SDK 54, React Native 0.81.5, React 19.1.0, TypeScript 5.9 |
| `tsconfig.json` | TypeScript config with strict mode on |
| `assets/` | App icon and splash screen images |

**SDK note:** Project is pinned to Expo SDK 54 because that is the version the iOS App Store Expo Go app supports as of May 2026. Upgrade to SDK 55/56 once Expo Go updates are approved by Apple.

---

## What Is Working

- Expo dev server starts via `npx expo start --tunnel`
- App renders on a physical iPhone via Expo Go (tunnel mode)
- TypeScript strict mode is configured
- Git repo connected to GitHub (`soumyn18-nagav/volunteenmatch`)

---

## What We Need to Add (Next Two Weeks)

### Week 1 — Navigation + Screens

- **Expo Router** — file-based navigation (like Next.js pages, but for mobile). Each file in `app/` becomes a screen. Replaces the current single `App.tsx` entry.
  - `app/(tabs)/index.tsx` — home list screen
  - `app/(tabs)/explore.tsx` — filter/search screen
  - `app/opportunity/[id].tsx` — detail screen for a single opportunity

- **Basic UI components** — `FlatList` for the opportunities list, `TouchableOpacity` for tappable rows, basic header/tab bar styling.

### Week 2 — InstantDB + Data

- **Install InstantDB** (`npm install @instantdb/react-native`) — realtime database that works like Firebase but with a simpler TypeScript-first API.
- **Schema** — define an `opportunities` namespace with fields: `title`, `organization`, `date`, `location`, `spotsLeft`, `category`.
- **Seed data** — add a handful of Columbus-area volunteer listings to test with.
- **Wire list screen to DB** — replace hardcoded data with a live `useQuery` call so the list updates in realtime.
- **Authentication** — InstantDB has built-in magic-link email auth; add a simple login screen so each teen has an identity.

### Still Out of Scope for Now

- User profiles / saved opportunities
- Push notifications
- Map view
- Production build / App Store submission
