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

### Actual source-matched capture qualification — 2026-11-06 19:52–19:53 UTC

GitHub-hosted [workflow run 42283462249](https://github.com/techrote/tokensplurge/actions/runs/42283462249) **completed successfully** for exact source commit daa9fef7120a4cce7d157bba1dec983b2a07bcb8. The hosted job recorded PASS for immutable-source/mixed-revision policy negatives, incremental Chromium capture with source/blob/PNG verification, dynamic catalogue verification and real browser UI/search/filter/mobile smoke. It committed capture assets and synchronized embedded JSON onto docs-only commit 6543df04b3bc2c4bd25c0a63907c0ce811eb9785.

New #32 actual Chromium 1440×900 desktop and 768×480 detail readbacks are now committed, and the new entry reports capture.status=captured. The exact item source pin remains ea0c04508670af179e8e104253c94c3a3b703bb3 with Git blob 6d83aca13bb686505527edc0ebe0026aad8c0836; capture/report.json contains:
- Desktop: 852,335 bytes, SHA-256 e822f8e645942964a9af8a0394cdf417cdfedee292b0d4586929d45544a1e110.
- Detail: 312,103 bytes, SHA-256 38467c3a51bb916758684b489cc67c9dc5db3be789a3f6dcd8cce1f8fae7f68c.

**Independent post-publication source/report custody read:** all 14 historical report rows are identical byte-for-byte as JSON data. Every one of the original 28 artwork PNG Git blob identities remains unchanged. All five primary CyberSand benchmark URLs and identities remain locked. The source-bound report now contains 15/15 captured items without failures. The moodboard UI preview originally changed through UI smoke (not an artwork source screenshot); this follow-up restores its exact historical blob and preserves the new 20-card preview under a separate edition-labelled filename.

**Still not claimed:** independent human/curator visual comparison of the newly generated pixels, Chromium-to-Godot parity, source-independent artistic acceptance, production CyberSand maps or physical world validation. Existing five real CyberSand benchmark images are the primary art quality control.

## Curator session 02 — 2026-11-06, cross-stream source assessment

**Read-only source custody:** TokenSplurge main `5771b6285e917526359a35b2bf973487dcbd9c4b`; existing curation PR #33 `3f1e6cb755cec8dcb80eb90c08aea500be0def8c` at start. CyberSand design PR #454 observed at `6ebb7d55ff7349a85ac72da3c9efc28cf59df27b`, a live moving creative branch. Its `QUALITY_BAR.md` demands actual native-Godot image comparison against five original primary benchmarks; neither a browser image nor a source design pack meets that gate. Previous 19 baseline entries plus first curation Aeolian source and report are preserved. No CyberSand source or scheduled worker changed.

**One new candidate for provisional inclusion:** [Environment Laboratory #37 — The Lantern Ossuary](https://github.com/techrote/tokensplurge/pull/37), commit `17b09a592a30e52ef35040ef2076f336ad6380ec`, source `environments/003-the-lantern-ossuary.html`, verified Git blob `f6260fa0b9c4694e3978c3520f840de74a39ff45`. Inspected actual 18,257-character UTF-8 source: authored Canvas2D drawing functions include `skeleton`, `rib`, `platforms`, `procession`, `foreground` and `snow`; render sequence is background → terrain → skeleton → settlement → moving lights → foreground → weather. The source implements time-varying motion, clear/storm, memory tide, pointer wakes, pause and PNG export. Its reported author-side Chromium 144 rendering, interactive/mobile checks and local screenshots are **not independent pixel inspection**, and author screenshots are not durably attached; promotion is source-curated **pending exact-source hosted screenshot capture**. This is not a Godot-native reference.

**Artistic screening rubric (0–5; provisional source-grounded judgments, not visually accepted pixel scores):** O originality, M macro silhouette, S spatial relationships, F fine craft, V value hierarchy, N environmental narrative, T CyberSand creative transfer. Numerical scores are hypotheses until direct full-frame/detail inspection.

| Candidate / source head | O | M | S | F | V | N | T | Session disposition |
| --- | --: | --: | --: | --: | --: | --: | --: | --- |
| [#37](https://github.com/techrote/tokensplurge/pull/37) `17b09a59` | 5 | 5 | 4 | 4 | 4 | 5 | 4 | **Select for independent capture**: biological giant-form as inhabited negative space, a distinct visual lineage from geological instruments, wetlands and rail infrastructure |
| [#35](https://github.com/techrote/tokensplurge/pull/35) `30c31ecc` | 4 | 5 | 4 | 4 | 4 | 4 | 4 | **Defer**: very strong suspended quarry/void idea, but compare directly to newly authored dependent #36 before adding another monumental geology entry |
| [#36](https://github.com/techrote/tokensplurge/pull/36) `9c1a9763` | 3 | 4 | 4 | 5 | 4 | 5 | 3 | **Defer**: carved abbey and inhabitants show refined craft but closely inherit #35's floating quarry and reverse-water morphology; published SVG is explicitly a *diagrammatic key*, not framebuffer proof |
| [#34](https://github.com/techrote/tokensplurge/pull/34) `7fe2f45c` | 3 | 4 | 3 | 4 | 4 | 4 | 3 | **Reject this edition**: source is an acknowledged refinement of already-curated #32; desert exposure, wind apparatus and excavation have limited incremental portfolio diversity |
| [#30](https://github.com/techrote/tokensplurge/pull/30) `c103ccaa` | 3 | 3 | 4 | 3 | 3 | 4 | 3 | **Previously deferred, still deferred**: local light ecology useful but wetland imagery overlaps Estuary/Orchard before independent source-bound comparison |
| [#29](https://github.com/techrote/tokensplurge/pull/29) `10746e46` | 3 | 4 | 4 | 4 | 3 | 4 | 2 | **Previously deferred, still deferred**: richly composed orbital harbour but limited direct environmental terrain transfer |

**Diversity finding:** #37's original composition uses a non-rectilinear, non-built *structural void*, with human-scale paths/rudimentary settlement nested within it and a time-dependent memorial procession. This is a different environment problem from the fixed cross-sections, hydrography, electrical architecture and weather-machine modes currently prominent in the moodboard. The source's biological-remains and suspended-village form is *precisely what must NOT be copied*. The transferable principle is the legibility of enormous historical structure, access constraints and ecological/infrastructural occupation at three scales.

**Optional open-ended CyberSand design briefs, not transfer instructions:**

- Invent a ruined landscape in which the geometry of a vanished **non-biological** system becomes a sheltering network for new habitation; let genuine material constraints and negative spaces decide access, not the source's skeleton or settlement layout.
- Design an ancient undercut structure whose supports show multiple generations of repair, erosion and opportunistic reuse. Create entirely new silhouettes, material strata, mechanical logic and spatial orientation. Preserve visual restraint rather than uniform decorative noise.
- Build a distant-to-near environmental narrative through one monumental low-frequency shape, a handful of legible mid-scale connectors and small dense craft accents, then independently compare actual Godot captures against all five CyberSand benchmarks. Treat moving lights, storm and glow as optional **illustrative motifs** only unless native material/shader/runtime evidence supports them.

**Immutable provenance:** New card #37 individually pins its exact commit/blob; existing curation #32 and initial 19 remain untouched. This session additionally locks #32's prior curated identity into policy regression checks, so a future editor cannot silently replace it. Screenshots must come from actual exact-commit Git HTML in Chromium via the branch's existing capture workflow, with per-PNG SHA256, browser exceptions, source identity, dynamic catalogue/HTML consistency and history checks. If capture cannot be executed, leave the new card `pending`; do not mark pixel/artistic acceptance.

**Open acceptance questions:** Source-bound #37 PNGs and crop, firsthand pixel comparison to #35/#36 and all five CyberSand benchmark gallery images, user-facing visual-quality judgement, cross-browser/production GPU, native physics or material validation, and the full 15-pack/#454 genuine Godot campaign. No PR merge or Ready transition is authorised.

### Curator session 02 — actual Chromium evidence, exact source and historical custody

The first capture workflow on the session-02 source commit [42299562733](https://github.com/techrote/tokensplurge/actions/runs/42299562733) **PASSED** on Ubuntu 24.04 Playwright Chromium, with the exact source `17b09a592a30e52ef35040ef2076f336ad6380ec` and Git blob `f6260fa0b9c4694e3978c3520f840de74a39ff45`. The workflow produced and committed the real source-pinned browser PNGs, not SVG redraws or author-provided image substitutes:

- `captures/lantern-ossuary-desktop.png`: 1,252,978 bytes, SHA-256 `ce2400fa840ab3ec240040da34340e8e60a10325f4674d33709f265b1241e1c8`.
- `captures/lantern-ossuary-detail.png`: 420,478 bytes, SHA-256 `9ad69d11d6fffe2f3f11a465fbe966b6e695de87adea0a21fd8d3b283bb29d3b`.
- UI preview `captures/moodboard-2026-11-06-curation-02-preview.png` is a genuine Chromium gallery-frame screenshot and is **not** a third artwork capture.

**Completed cross-revision checks:** 21/21 reference cards, five primary CyberSand benchmarks, 16/16 actual source-pinned browser capture records, zero capture failures. Exact `catalogue.json` vs embedded `index.html` object equality verified by readback. Compared published Git trees to previous curation `3f1e6cb755cec8dcb80eb90c08aea500be0def8c`: all 32 preexisting PNG files retain byte-identical Git blobs; historical initial pin policy file is byte-identical, and no previously published reference file was removed. A new immutable curation-01 pin policy protects the Aeolian source/filenames too.

This evidence qualifies the **capture pipeline and published source-bound PNG identities**, not independent visual superiority, interaction coverage or CyberSand material authenticity. A subsequent browser-interaction pass tests selected #37 desktop/mobile controls, pause/resume and exported PNG actual bytes; its outcome must be reported separately. Direct aesthetic inspection of the new PNGs against all five original CyberSand gallery images and human acceptance remain open.
