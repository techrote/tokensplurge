# The Aeolian Palimpsest — environment laboratory 001

**Artifact:** [001-the-aeolian-palimpsest.html](001-the-aeolian-palimpsest.html) — 23,454-byte single-file artwork, no external runtime assets or dependencies.

## Original environmental premise

An evaporated inland sea leaves a terraced, deeply eroded evaporite basin. An enormous segmented wind-register survives on cantilevered supports above a fault scar. Its radial listening vanes, catenary anchors and scattered survey needles measure the movement of luminous dust, not astronomical or railway traffic.

The design's three spatial arguments are (1) long-range geological exposure, (2) improbable but mechanically legible tension infrastructure, and (3) luminous airborne sediment making an invisible environmental force visible. These are **fictional visual processes**, not a scientific wind solver, native material presentation, or CyberSand simulation.

## Creative-distance assessment

Closest broad comparisons examined from current TokenSplurge inventory:

- **editions/002-where-the-rivers-were.html:** both involve remnants of a changed landscape, but this work has an arid evaporite scar, no river-routing concept or waterway map, and a radial mechanical listening apparatus as the silhouette.
- **hybrids/001-the-pendulum-conservatory.html:** both suggest delicate mechanisms in a large environment, but this is an exposed geological basin rather than a cultivated enclosed conservatory; it uses a fixed segmented, tension-braced annulus instead of a pendulum-driven composition.
- **editions/012-the-house-that-held-the-weather.html:** both personify meteorology, but the artwork here depicts horizontal wind fields through exposed sediment, without a house, enclosed weather storage or its facade/roof motifs.
- **CyberSand GEN-007/Deepworks:** only presentation density and legibility are used as aspirational review questions; no source tiles, world geometry, native material IDs, landscape layout or shaders are reused.

Additional differences: a full-bleed 1600×960 bespoke Canvas2D world; a personally authored deterministic contour system; time-varying particle advection and adjustable vector field; and a mobile editorial crop centered on the engine instead of the wide desktop composition. There are no imported source images or cloned art algorithms.

## Controls

Drag across artwork to bend the wind. Tap/click to release transient dust rings. WIND slider adjusts the signed field. AFTER DARK toggles the field's optical exposure. PAUSE holds simulation time. RESEED resets particles, field and clock. SAVE PNG exports the current browser framebuffer. Keyboard: Space, N, R, S. Reduced-motion preference starts paused.

## Executed local Chromium qualification — 2026-11-06

The exact source file was tested with Playwright Python controlling **Chromium 144.0.7559.96** on Linux. Due to a managed Chrome URL blocklist, the source bytes were loaded with Playwright `page.set_content()` (rather than `file://`); all rendering and event handling were executed in Chromium. The tested source's SHA-256 is `c58344190c285f724b37a1dc5713f88b47a2a40cbdb54239b4399935ccc9a15e`, Git blob SHA-1 `6d83aca13bb686505527edc0ebe0026aad8c0836`. This blob exactly matches the file published to the branch.

| Test | Actual result |
| --- | --- |
| 1440×900 desktop initial and later animated frame | Rendered and visually inspected |
| 390×844 mobile initial and later animated frame | Rendered and visually inspected; no horizontal overflow |
| WIND slider | Changed field from +0.62 to -0.77 |
| AFTER DARK + click burst | Phase 0→1, burst count 0→1 |
| PAUSE | Simulation time remained exactly stable after 160ms |
| RESEED | Restored wind +0.62, reset time=0, cleared bursts |
| Pointer drag | Changed field from +0.62 to approximately +0.995 |
| PNG export | Browser download `aeolian-palimpsest-day.png`, valid PNG signature, 1,056,128 bytes, SHA-256 `b546508a062ea6dec59328a79d1ea577f49ed8fd4c98f5e31246f0baa4a8e7c8` |
| Exceptions | No JavaScript page errors in either viewport |

Captured desktop/mobile initial and post-interaction PNGs were actually inspected during the local verification session. These are **local evidence files, not yet uploaded to GitHub**, and no durable screenshot claim is made. Browser snapshots are not identical across time because the dust field animates.

**Outstanding:** Cross-browser tests, browser/GPU parity, performance profiling on lower-end devices, independent artistic acceptance, source-pinned screenshot publication to durable storage, and any CyberSand native material/physics/rendering qualification.

**Scope:** This new artwork and this adjacent documentation only; no earlier TokenSplurge art, reference atlas, CyberSand source, or CI files modified.
