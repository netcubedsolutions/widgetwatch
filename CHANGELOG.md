# Changelog

All notable changes to Widget Watch are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versioned per [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-03-25

### Added
- FlightRadar24 link in flight popup (`flightradar24.com/DAL{flight}`)
- IROPS hub-awareness — IROPS alerts now scoped per hub

### Changed
- Popup phase badge now forced to single line (`white-space: nowrap`)
- Popup links row now wraps gracefully with `flex-wrap` and consistent gap
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
