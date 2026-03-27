# Changelog

## [1.3.1] - 2026-03-27

### Added
- Version badge (`v1.3.1`) in the footer; clicking it opens an in-page changelog modal
- `/api/changelog` endpoint serves `CHANGELOG.md` as plain text for the modal
- Changelog modal renders markdown (headers, lists, dividers) using DOM methods with no `innerHTML` for fetched content

### Changed
- Flight popup header restructured: callsign and phase badge on their own line, followed by airport city names, then airport codes as separate lines
- `popup-header` changed to `flex-direction: column` so route lines stack vertically
- `popup-route` (city names) uses consistent `14px / font-weight:600` styling; airport codes use new `popup-route-code` class (11px, muted)

### Fixed
- Departure/arrival times now appear more reliably in flight popups:
  - "No active flight found" on FlightAware now falls through to FR24 fallback instead of returning a blank
  - Rate limit raised from 5 to 15 requests/min so browsing multiple flights quickly no longer silently drops times
  - FR24 fallback now maps scheduled/estimated departure and arrival fields when available
  - Client retries once after a 3-second backoff on a 429 rate-limit response instead of hiding the times section
- Removed native browser tooltip from hub health bar that was showing on-time performance text when hovering the upper-right links (About, Fleet Database, Support)
- `getClientIp` in `flight-times.js` now checks `x-real-ip` before `x-forwarded-for`, preventing rate limit bypass via spoofed header
- METAR input validation tightened to require 3–4 letter ICAO codes only (no digits), max 20 codes per request
- Hub health bar `?` tooltip now displays correctly — `overflow:hidden` on the bar was clipping the absolutely-positioned tooltip

### Security
- Added `Strict-Transport-Security` header (`max-age=31536000; includeSubDomains; preload`) to enforce HTTPS across all routes

---

## [1.3.0] - 2026-03-26

### Added
- Hub health navigation links in hub health panel

### Changed
- Flight popup restructured: phase badge now appears inline right of the callsign; Watch and Share buttons moved to a dedicated row below the external links
- Busiest hub badge unbolded

### Fixed
- Hub labels on the map no longer render in incorrect positions on first load (deferred `drawHubs()` to `map.whenReady()` so permanent tooltips are positioned after Leaflet completes its initial layout)
- Terminal and gate values from FlightAware API now escaped before injection into popup HTML (XSS fix)

### Removed
- Unused `planePos` variable in route drawing
- Unused `bmacInteractions` counter
- Dead `splitAtAntimeridian` legacy wrapper function

---

## [1.2.0] - 2026-03-25

### Added
- FlightRadar24 link in flight popup (`flightradar24.com/DAL{flight}`)
- IROPS hub-awareness — IROPS alerts now scoped per hub

### Changed
- Watch and Share buttons moved to sit inline right of the popup callsign
- Popup links row centered horizontally and locked to a single line (no wrap, no clip)
- UI theme refresh with updated CSS color variables
- Busiest hub badge now uses a red gradient
- Cruise phase color updated to `#0077cc`
- Refresh button default and hover colors swapped
- Live-fleet and schedule active styles simplified
- Analytics bar colors updated
- Heatmap route label removed; heatmap color updated
- Control buttons forced visible; status color tweaked
- Branding consolidated to "Widget Watch" across the project
- Prewarm script updated to use Widget Watch name

### Fixed
- Popup departure/arrival times preserved when popup HTML is refreshed
- FR24 summary epoch timestamps converted to ISO format before display
- Marker popup correctly refreshed after async flight HTML update
- IRROPS renamed to IROPS throughout the codebase

### Removed
- Alerts ticker feature and all related code
