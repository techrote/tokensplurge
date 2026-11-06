# CyberSand reference-atlas tracking and acceptance

**Initial selection:** 2026-11-06 · **Repository destination:** `techrote/tokensplurge` · **Integration:** separate docs branch; no modifications to CyberSand world-design PR #454.

## Inventory and provenance

| Class | Count | Revision | Evidence |
| --- | ---: | --- | --- |
| Primary CyberSand gallery benchmarks | 5 | `06522e300dcf91efbab0ac8f4f4370af72cf2029` | Original source-controlled PNGs, with Git blob SHA in catalogue |
| TokenSplurge environmental works | 11 | `f9deae20ded26e959f2096ba9fed9a0e3b61a6ed` | HTML source; new Chromium screenshots require capture report |
| TokenSplurge procedural studies | 3 | `f9deae20ded26e959f2096ba9fed9a0e3b61a6ed` | HTML source; new Chromium screenshots require capture report |
| Total | **19** | All pinned | No moving-branch dependencies in manifest |

## Qualification gate

- [x] Source inventory and 40-hex commit/blob identities pinned.
- [x] Each reference annotated with design-principle, translation and no-copy boundary.
- [x] Benchmark images kept distinct from experimental browser artworks.
- [x] Filterable single-file HTML library authored with embedded catalogue and source links.
- [x] Chromium smoke test of 19/5/11/3 card groups, free-text/discipline/collection filters, reset, desktop/mobile horizontal overflow and zero page errors; rendered UI preview committed.
- [x] All 14 TokenSplurge artworks/studies actually rendered at pinned revisions; 28 viewport/detail PNGs committed.
- [x] Capture report verifies 14/14 without page errors; PNG SHA-256 verified.
- [x] Manual inspection of all 14 detail crops (and the railway desktop screenshot) found real, nonblank composition evidence; full independent aesthetic acceptance remains outstanding.
- [ ] Cross-repository discoverability handoff to CyberSand art workers recorded (without shared branch writes).
- [ ] Independent artistic comparison against all five CyberSand benchmark images, performed in comparable contexts.
- [ ] Human acceptance of selected improvements in CyberSand's actual native rendering.

**Current state:** The initial source and capture checks are complete. The checked render gates are *Chromium/browser* evidence, not proof of CyberSand's actual material/world renderer. Native-world graphical comparison and human quality approval remain outstanding.

### Browser capture and moodboard UI evidence — 2026-11-06

- Successful GitHub Actions run: [42257449047](https://github.com/techrote/tokensplurge/actions/runs/42257449047), Chromium via Playwright 1.56.1 on Ubuntu 24.04; source revision `f9deae20ded26e959f2096ba9fed9a0e3b61a6ed`.
- Capture commit: `20aa1271a91b1dfa7f91209dbc667fba6f1f2a99`, containing 28 PNG screenshots plus `captures/report.json`. Each file has source SHA, PNG SHA-256, byte size, viewport/crop and recorded process result.
- All 14 source-bound works generated genuine PNG evidence; 14/14 success, no recorded browser page exceptions. A read-only manual inspection of every detail crop found meaningful rendered imagery, not a placeholder or empty frame.
- Successful moodboard UI smoke: [GitHub Actions 42259217914](https://github.com/techrote/tokensplurge/actions/runs/42259217914), with browser-verified class filters, search, discipline/collection selection, reset, responsive viewport and no JavaScript page exceptions. The resulting `captures/moodboard-preview.png` is a genuine Chromium screenshot; published together in capture commit `786c500bbba5d58bed8ec366fc870706d17cd19d`.
- Original first workflow run [42257222694](https://github.com/techrote/tokensplurge/actions/runs/42257222694) failed before capture because Playwright 1.56.1 did not support the default Ubuntu 26.04 runner. The runner was corrected to Ubuntu 24.04. Do not treat the failed run as a successful graphical check.
- The sampling frame is post-load, not a frozen scientific simulation state; images are source- and procedure-pinned but **not guaranteed bit-identical** across different capture times or hosts. Nor are they independently hosted-preview, GPU-parity or CyberSand engine proof.


## Specific initial reference choices

**Core geological/ecological:** Where the Rivers Were; The Estuary That Learns; Below the Beacon; The Orchard of Second Suns.

**Core infrastructure/architectural:** The Midnight Railway of Elsewhere; A City Practicing Dawn; The Cathedral of Unsent Messages.

**Additional environment mood:** The Choir of Drowned Bells; The House That Held the Weather; The Freight of Small Suns; The Archive of Unfallen Rain.

**Supporting mechanics and procedural studies:** LINEAGE 023 Stratigraphic Slip; SALVAGE S063 Terraform; SALVAGE S060 Truchet Loops.

This document tracks the library's *own* completeness and reproducibility. CyberSand PR #454's quality rubric and native/graphical acceptance gates are separate and remain unchanged.
