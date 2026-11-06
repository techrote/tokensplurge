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

### Hosted curation-02 interaction evidence — exact source and both display sizes

The **corrected** [run 42300145915](https://github.com/techrote/tokensplurge/actions/runs/42300145915) **PASSED** at the exact documentation candidate head `5014f4bc147605dfa3ce66ce9757a2e1fd92af25`, with actual Chromium/Playwright checks of the immutable #37 HTML Git blob:

- **Desktop 1440×900, DPR 1:** 92 distinct sampled real Canvas RGB colours; 72/96 light-valued sample points; genuine `SAVE / PNG` 1,438,961 bytes at 1440×900.
- **Mobile 390×844, DPR 2:** 85 distinct sampled RGB colours; 67/96 light-valued points; genuine `SAVE / PNG` 1,266,953 bytes at 780×1688.
- Both sizes passed memory-tide slider, snow/storm, pause-frame stability, resumed-frame changes, canvas pointer action, PNG download, zero browser JS exceptions and zero horizontal overflow.
- The same workflow passed 21 source-pinned references, 16 verified capture records, five immutable CyberSand primary benchmarks, historical pin controls and exact embedded HTML catalogue equality. The gallery passed search/filter/reset/responsive smoke.

**Retained negative:** [run 42300070796](https://github.com/techrote/tokensplurge/actions/runs/42300070796) correctly failed a newly introduced independent blob check because its test script initially encoded a wrong Git blob-header NUL separator (`80b5ee85...` versus the pinned `f6260fa0...`). Corrected at `5014f4bc...`; do not substitute that earlier red run for the genuine later desktop/mobile qualification.

**UI-preview custody:** The passing run generated an additional moodboard-preview commit `f59bdb5c7e7ae06347cd3126a96c3030f6ba3395`, changing *only* `moodboard-2026-11-06-curation-02-preview.png`. The capture branch now preserves the first preview bytes per edition while continuing to execute screenshot smoke on each iteration. All 32 pre-session artwork/gallery PNGs and the original five benchmark asset identities were separately verified unchanged; neither this preview nor any browser PNG establishes native Godot quality.

**Remaining:** Source-verified, screenshot-captured and independently interaction-tested, but not firsthand fine-art pixel critique at matching scale to all five original CyberSand gallery examples, nor human acceptance, Godot material/physics/world simulation, cross-browser GPU, or CyberSand atlas qualification. Curation scores above remain provisional until genuine side-by-side aesthetic review.

## Curator session 03 — 2026-11-06 23:43 UTC: source-bound environmental resource transfer

**Source custody and scope.** Current TokenSplurge main `dba3f7ba18beb87628f496fefe828fce52f780f4` already contains merged #33 (the 21-card, 16-capture library). Its former curator PR is **merged**, not an active branch for reuse; a new isolated `docs/cybersand-reference-library-curation-20261106-2343` branch is therefore required. Live CyberSand #454 was Draft at `2dd02632ff38683988b443479c2fc34e5db76c4a` with 15 proposed collections / 120 original modules; its [QUALITY_BAR](https://github.com/techrote/cybersand/blob/2dd02632ff38683988b443479c2fc34e5db76c4a/docs/world-design/QUALITY_BAR.md) remains separate authoring authority. The five **primary** benchmark image identities remain pinned to CyberSand `06522e300dcf91efbab0ac8f4f4370af72cf2029`, unchanged. No native comparison or aesthetic superiority is implied. Reviewed main editions/hybrids/studies, recent standalone and refinement PRs, Environment Laboratory originals, and existing screenshot reports. PR descriptions and locally claimed screenshot metrics are secondary evidence: **original PR #39 screenshots are not GitHub-published**, and no new firsthand pixel-level benchmark comparison is asserted here.

**Selection: one distinct candidate, provisional until hosted source-pinned Chromium evidence.** [Environment Laboratory #39 — The Thirst of the Sky](https://github.com/techrote/tokensplurge/pull/39), immutable original `d2d7eb71bb4fdab431ab4a36515421e7c6f5df1c`, HTML blob `87b6343d2827ad036e4b894f41864923c83695b1`, 13,203-byte compressed standalone wrapper with browser-native `DecompressionStream('gzip')`, author report `40be325c8817f5a2a192322fb9ef99cb882eba8f`. Inspected the actual committed wrapper and report: its design connects distant fog interception to gravity-fed conveyance and inhabited agriculture, giving a distinct **resource-catchment spatial story**, not a dry-wind register (#32) or memorial giant-form (#37). The author reports real Chromium screenshots and controls, but they were not durably published or independently inspected here. The 0–5 scores below are **source/report-informed provisional hypotheses**, not a substitute for original PNG comparison.

| Candidate (exact PR/source SHA) | Originality | Macro silhouette | Spatial relations | Fine craft | Value hierarchy | Narrative | CyberSand transfer | Verdict |
| --- | --: | --: | --: | --: | --: | --: | --: | --- |
| [#39](https://github.com/techrote/tokensplurge/pull/39) `d2d7eb71` | 4 | 5 | 5 | 4 | 4 | 5 | 4 | **Select one**: strong cause→infrastructure→settlement chain; require independently captured actual pixels before any visual-acceptance claim |
| [#41](https://github.com/techrote/tokensplurge/pull/41) `937b357f` | 5 | 5 | 4 | 4 | 4 | 4 | 3 | **Defer**: fresh electro-mineral tree is promising; charge-lit landmarks overlap Aeolian giant-form / capacitor motifs and original screenshots are not durably published |
| [#40](https://github.com/techrote/tokensplurge/pull/40) `9b15dda7` | 4 | 4 | 4 | 5 | 4 | 4 | 3 | **Defer**: advanced interactive interference folio, but an enclosed observatory/water basin overlaps established maritime references; preview SVG embeds claimed browser plates, not independent Godot data |
| [#38](https://github.com/techrote/tokensplurge/pull/38) `727d28ca` | 3 | 4 | 4 | 5 | 4 | 5 | 3 | **Reject this edition**: rich fossil-garden refinement is compositionally close to already curated #37 giant-organic-shelter lineage |
| [#35](https://github.com/techrote/tokensplurge/pull/35) `30c31ecc` | 4 | 5 | 4 | 4 | 4 | 4 | 4 | **Defer**: suspended quarry remains a contender but would add another giant object/void before source-frame comparison with #36 |
| [#36](https://github.com/techrote/tokensplurge/pull/36) `9c1a9763` | 3 | 4 | 4 | 5 | 4 | 5 | 3 | **Defer**: detailed quarry-derived abbey but the same compositional family as #35; its SVG was stated as a schematic key, not published framebuffer evidence |

**All streams reviewed for portfolio coverage.** TokenSplurge main already contains unrestricted standalone works and hybrid sources (including original Anatomy of a Shared Dawn, the Estuary, Choir, Archive and Freight). The currently visible hybrid branch `art/hybrid-anatomy-shared-dawn-20261106-07` at `14aa0bacd608966118151409fd647d6544e5a802` reproduces the same `hybrids/004-anatomy-of-a-shared-dawn.html` blob `033cf8e1f8ddacf7f6925fe83213702da87bc922` now on main, so offers no fresh unique source to promote. The unrestricted seed branch `art/atlas-impossible-seeds-20261105` at `1513baace5d5e8e9331bfc8052fcacc28f3aa030` is not a fresher verified environment-quality challenger. Newer dependent work `art/refinement-seamstress-last-cloud-20261106-r21` is acknowledged as a distinct source writer; no edits made to it. No new work is promoted merely for recency.

**Creative distance — transfer only the problem.** Source-level strength is the *legible flow of scarce resource through landscape, supports and population*. A CyberSand design should invent a fresh resource type/catchment medium, topography, transfer topology, settlement arrangement, stage-by-stage material readout and macro hierarchy. **Do not copy** the original's three triangular condenser sails, ridge aperture, precise cable/anchor positions, spillway/terrace geometry, fabric weave formula, droplet tracks, minted porcelain/apricot colours, annotations, typography or framed camera. Do not assert that source Canvas2D dew/airflow or CyberSand Water/Brine moves/conserves in the same way.

**Open CyberSand briefs for optional future atlas workers, not commands to copy #39:**
- Design a resource-poor inhabited place where a passive surface collects an environmental input, and make at least three *different, independently invented* transitions from capture to storage to reuse visually traceable at macro, meso and native-cell levels. Find a silhouette unlike any current benchmark or original experiment.
- Build a landscape where infrastructure deliberately preserves a fragile ecosystem: let maintenance routes, repair history and accumulation scars explain why the structures occupy each height, while selecting an original geometry, palette, native-cell material set and access/void system.
- Compare an actual native-presentation flagship against all five primary gallery images at equivalent scale. Mark illustrative process, unverified material behaviour and simulated physics separately, and record both successes and regressions.

**Publication contract:** new card pending exact-source hosted Chromium desktop/detail PNG capture and report SHA-256 verification; no author-local image is accepted as a published reference. New `tools/curation-02-pins.json` and adversarial tests protect #37 source/blob/image filenames, supplementing unchanged initial 19 and #32 locks. The existing capture workflow accepts `docs/cybersand-reference-library-*` branches and must produce the browser PNGs and synchronized catalogue/HTML. One must check the **actual completed** run and its Git head before replacing these pending statements with evidence, including any browser/PNG failures.

**Outstanding:** genuine comparative full-frame/detail pixel review against all five CyberSand images; human artistic acceptance; independent Godot/material, active-fluid and original #454 15-collection graphical qualification. None is implied by Chromium success.

### Curator session 03 — verified hosted Chromium publication, separate from artistic acceptance

- Hosted exact-source [run 42314175464](https://github.com/techrote/tokensplurge/actions/runs/42314175464) **PASS** at docs source head `b249982d3049c766d5b216e2d750b7062f5cc91d`. The first `verify --require-captures` correctly detected the genuinely **pending** candidate, and the runner then fetched original PR #39's immutable source through Git, recomputed Git blob `87b6343d2827ad036e4b894f41864923c83695b1`, executed its gzip-wrapped browser code, captured both actual Playwright Chromium frames, and verified the SHA-256 bytes.
- New real Chromium full 1440×900 screenshot `captures/thirst-of-the-sky-desktop.png`: **1,384,584 bytes**, SHA-256 `adb1aab223e5cbeafa2f76fdc594dd0ce85f59431030eafac982bf0cf7b5e12a`.
- New 768×480 detail `captures/thirst-of-the-sky-detail.png`: **526,727 bytes**, SHA-256 `9e168f8738333123e26b65d228e39e119354d13f46ea9352a9a13ef485c87dfa`. Both use the original `d2d7eb71bb4fdab431ab4a36515421e7c6f5df1c` source commit.
- Real capture runner reported **22/22 cards, 17/17 Chromium capture records, 0 pending, 0 failures**. Existing exact-original 5 CyberSand benchmark cards remain primary. New source/card was set to captured **only after** runner-generated PNGs and report verification.
- A separate real browser gallery UI smoke passed groups **22/5/14/3**, source search (including this edition), discipline/collection filters, reset, desktop responsiveness. The prior independent Lantern source interaction smoke still passed desktop/mobile, canvas colour samples, pause/resume and real PNG export. That Lantern interaction is **not** a test of new #39 controls.
- Initial docs commit's `catalogue.json` and embedded `index.html` were exact JSON matches; runner subsequently rewrote both together and verification passed again. No #39 art source or CyberSand file was changed.

**Important unresolved distinction:** The source-bound *artifact capture* is now proven, but direct side-by-side critical inspection of the actual captured artwork pixels against all five CyberSand benchmark images has **not** been completed; author-local interaction claims remain secondary until independently tested. Actual native Godot/material/physics and human art acceptance remain separate gates. No promotion to primary benchmark or assertion of benchmark superiority.
