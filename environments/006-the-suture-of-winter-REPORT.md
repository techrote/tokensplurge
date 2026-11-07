# Environment Laboratory 006 — The Suture of Winter

**Status:** Original standalone browser artwork; experimental concept, NOT CyberSand native rendering, physics, gameplay or materials acceptance.

## Custody

- Fresh main SHA: `dba3f7ba18beb87628f496fefe828fce52f780f4`; tree `441e453ede07b94a800f07c8a1cd1148eadc17b7`.
- Isolated branch: `art/environment-lab-20261107-suture-of-winter-006`.
- New source: `environments/006-the-suture-of-winter.html` (22,119 UTF-8 bytes).
- Independently re-fetched Git blob: `58d1406b2d81f5b1497e42956970dd1e59386626`.
- SHA-256 of published/tested HTML: `a7f4b70d91cf968b5d845e00ae1ca159002096c324780ad2c73799f94480edff`.
- Existing art, editions, hybrids, salvage, lineage and `references/cybersand/` remain byte-for-byte untouched. CyberSand and all other workers' branches untouched.

## Original visual experiment

An inhabited high-altitude fault region is held together by ancient copper/bronze inspection suspension bridges across two pale ice plates, a deep diagonal tectonic shear and warm mineral fissures. Layered alpine silhouettes, atmospheric cloud shelves, engineered load pylons, tiny cabins, lanterns, geodetic cranes, wind stakes, fractured ice striations, snow and sedimentary foreground supply cause-and-effect and macro-to-micro detail.

Working interactions: continental strain changes rupture geometry; thermal seep illuminates fissure veins; pointer/touch produces transient stress rings; Nightfall alters illumination; Pause freezes animation; Save PNG downloads actual browser canvas pixels. **These are speculative authored visual mechanisms, not simulated tectonics or actual CyberSand physics.**

## Creative distance

Inspected current main inventory, open PRs/branches and the CyberSand reference guidance. Used the five source-pinned CyberSand gallery assets for composition/quality standard ONLY.

- [Aeolian Palimpsest #32](https://github.com/techrote/tokensplurge/pull/32): dry radial wind-listening annulus, sediment motion, evaporite canyon. Here: a non-radial ice shear, linear bridge span network and geothermal/strain response, different value and environmental mechanism.
- [Quarry That Refused the Ground #35](https://github.com/techrote/tokensplurge/pull/35): suspended batholith, upward root lattice and spring beneath. Here: grounded opposing glaciers, no levitation or roots, crossing paths and visible rupture tension.
- [Thirst of the Sky #39](https://github.com/techrote/tokensplurge/pull/39): woven fog-capture wings and gravity-fed terraces. Here: inhabited tensile *transit* bridges anchored to glacial plates, no textiles/catchment/agriculture, slowly opening fracture rather than fluid collection.
- [Storm Fossil Field #41](https://github.com/techrote/tokensplurge/pull/41): branching mineralised electrical discharge, porcelain hamlets and rust-iron basin. Here: connected ice plate surfaces, icy topographic sweep, copper bridges and thermal night seams, no lightning or silica dendrites.

No prior HTML, structure, layout, props, typography, palette or simulation code was forked or traced.

## Real execution and limitations

**Actual Chromium 144, Python Playwright, Canvas2D**, final HTML passed to a real Chromium page using `page.set_content()`. Direct `file://` access was blocked in this hosted runtime (`ERR_BLOCKED_BY_ADMINISTRATOR`), so direct file launch itself is **not** qualified. Local Node embedded-script syntax check passed.

- **Desktop:** 1440×900, DPR 1; initial/later frames; 81% strain, 84% warmth, click-to-wave, day/night, pause-time stability over 350 ms, native PNG export (1440×900).
- **Mobile:** 390×844, DPR 2; first/later frames, 73% strain, 65% warmth, touchscreen tap, PNG export (780×1688).
- Both: zero browser `pageerror` events and zero horizontal overflow. PNGs decoded and dimensions validated; manual inspection of desktop day/night composition. First/later PNG difference nonblank across whole composition.
- Source re-fetched from GitHub and blob SHA matched the exact tested local file.

**Locally retained screenshots (not GitHub-hosted):** desktop initial `a419b2b165145a85f94371307dcd4c893038e0c3b2a8ad112366343ce77b4419`; strain `1c087ff4400b8d65fabf39a86fea70fd06989a635128ad80485cb9e1d8e4f8f2`; night `6dc13e0d559908da9383da18f425130ade16e31df182b8f75633d5e122a51366`; mobile initial `8bac3c159be7b61838e19bcda403810ded64053f407d2db8d5ddb02310bb35a8`; mobile later `d874cd53d7d0572b83d67af358a88a34000468c197da8a697cd1c97817f2ddb5`. Export PNGs also tested and retained. Browser image captures and source may be supplied independently as an evidence ZIP.

No Firefox/Safari, independent GPU implementation, or native CyberSand material tests; do not claim those were qualified.

**Draft-only, no merge, no release.**
