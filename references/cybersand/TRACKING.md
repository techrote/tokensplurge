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

## Curator session 01 — 2026-11-06, source-grounded selection

**Custody:** Main was 5771b6285e917526359a35b2bf973487dcbd9c4b. Read-only CyberSand #454 head observed at b2e60ce18ffcd12cae4dab3788ffdb4800e02297, a moving multi-worker design branch; QUALITY_BAR reviewed from exact commit 86c4e5161f1f168cfa519bd20db6544f58cfa565. No CyberSand source or schedule changed. The original five benchmark cards and fourteen already captured sources/capture PNG identities are preserved.

**One provisionally selected new entry:** [Environment Lab #32: Aeolian Palimpsest](https://github.com/techrote/tokensplurge/pull/32), exact commit ea0c04508670af179e8e104253c94c3a3b703bb3, HTML blob 6d83aca13bb686505527edc0ebe0026aad8c0836. The 23.4-kB standalone HTML source and associated author report describe an exposed evaporite fault basin, segmented wind instrument, tension-supported infrastructure and drift-responsive particles. Source inspection confirms authored Canvas2D rendering and controls; **this curator did not independently execute the source or inspect the final actual framebuffer**. The author reported local Playwright desktop/mobile rendering, but its image bytes were not published in PR #32. Therefore the library card is source-curated and **capture pending, not accepted artwork**, pending real source-pinned Playwright output and comparative pixel review.

**Potential scores, 0–5 (source/author-description informed only; NOT pixel-accepted review):** O originality, M macro silhouette, S spatial relations, F fine detail, V value hierarchy, N narrative, T CyberSand transfer.

| Candidate / exact PR commit | O | M | S | F | V | N | T | Disposition |
| --- | --: | --: | --: | --: | --: | --: | --: | --- |
| [#32](https://github.com/techrote/tokensplurge/pull/32) ea0c0450 | 4 | 4 | 4 | 3 | 3 | 4 | 5 | **Select for capture**. Dry-wind structural silhouette fills a missing domain; actual visual detail and hierarchy still unverified |
| [#30](https://github.com/techrote/tokensplurge/pull/30) c103ccaa | 3 | 3 | 4 | 3 | 3 | 4 | 3 | **Defer**. Meaningful locally coupled light ecology, but marsh motif overlaps Estuary/Orchard already represented |
| [#29](https://github.com/techrote/tokensplurge/pull/29) 10746e46 | 3 | 4 | 4 | 4 | 3 | 4 | 2 | **Defer**. Docking/harbour could enrich transport history, but orbital navigation already resembles railway/freight themes |
| [#27](https://github.com/techrote/tokensplurge/pull/27) 9ed87d79 | 3 | 2 | 3 | 4 | 4 | 3 | 2 | **Reject this cycle**. Ornate thermal retort is principally an object, not a large spatial composition |
| [#31](https://github.com/techrote/tokensplurge/pull/31) 88ebf5df | 4 | 2 | 2 | 4 | 4 | 2 | 2 | **Reject this cycle**. Acoustic grain texture is intriguing, but display plates add limited place-making to existing studies |
| [#26](https://github.com/techrote/tokensplurge/pull/26) 3bca8d07 | 3 | 2 | 3 | 4 | 4 | 3 | 1 | **Reject this cycle**. Kinetic cabinet is sophisticated but primarily a specimen/UI study rather than an environment |

**Creative-distance findings:** #32 differs materially from Where the Rivers Were (watershed connectivity), Pendulum Conservatory (enclosed mechanism) and House That Held the Weather (facade and meteorological containment): it makes dry exposure, structural tension and advection visually legible. Transfer only the general *constraint* that an environmental process must shape topography and remnants. Never copy the source's concentric bronze wheel, anchors, specific canyon profile, dust track, instrument props, original colours, field equations or camera framing. Existing CyberSand Deepworks, GEN-007 gallery 4, Neon Reliquary, Blacksite Nine and GEN-007 atlas remain the mandatory visual comparison set; no quality-superiority claim is warranted.

**Actionable original prompts, for optional future CyberSand art direction:**

- Invent a dry multi-era depositional landscape in which wind shelter and geological layers constrain a distinct non-radial ruined landmark. Choose fresh materials, topology, palette, viewpoint and movement affordances; avoid the source artwork's silhouettes and composition.
- Expose the passage of an environmental force through asymmetrical wear, trapped debris and protected niches in static native-cell geometry; do not imply simulated wind, emissive sand or scientifically validated physics.
- For each new flagship, compare genuine material-presentation captures at equivalent scale with all five benchmark images; identify both visual regressions and improvements before any human acceptance.

**Publication and tests planned on this docs-only branch:** Preserve the old 19-card identity lock; enable mixed immutable per-entry revisions, incremental fresh browser captures without re-rendering 14 verified older works, SHA-256 checks of every retained PNG, dynamic inventory/UI tests, and an exact-head GitHub-hosted Chromium workflow. Newly added #32 is pending until real PNG bytes are published; do not substitute its author report or SVG/source for independent renderer proof. Test outcomes, workflow SHA, browser exits, screenshot SHA and any failures must be appended once actually observed.

**Outstanding:** Actual source-pinned Chromium screenshot publication for #32; manual pixel inspection and ranking; actual comparable Godot framebuffer acceptance for #454 via separate #457/#462 qualification; native materials, runtime physics, human judgement. The 15 world collections/120 modules are source-proposal design work, not accepted engine maps.
