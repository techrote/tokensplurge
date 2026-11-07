# Environment Laboratory 009 — The Ambulant Kilns

**Authored:** 2026-11-07 UTC · **Class:** original experimental browser artwork · **Integration:** Draft PR only

## Concept and spatial argument

Three massive inhabited ceramic kilns migrate across a near-empty field of fired shale. Their articulated struts, smoking furnace throats, suspended domestic pods, and ceramic roof courses establish the paradox: a settlement that must move because each firing changes the substrate beneath its feet. Broken, vitrified paths register previous passage. Distant dark folded strata, minute pedestrian silhouettes, and embers in the air establish nested scales. This is an imaginative environmental mechanism, not an engine-native or scientifically validated simulation.

The artwork is a **self-contained HTML/CSS/Canvas2D** document at `environments/009-the-ambulant-kilns.html`. It has no external assets or network dependency. Furnace draft and marching rhythm sliders, afterglow/night mode, drag-to-pan, pointer/touch ember responses, pause/resume, reframe and real PNG export are included. The default design is a complete tripartite environment painting, not merely a single object or a palette study.

## Source ancestry / custody

- Refresh of accepted `main` before branch: `179b8ba6df6d1bc59b8c27b512c1432b9ea37844`.
- New isolated branch: `art/environment-lab-20261107-ambulant-kilns-009`.
- Original authored source SHA-256: `0fb0198b3cd6d10932729f70c5aa8151e6bf434facca6fa3945df4afdc8d4eda`.
- GitHub-published source blob SHA-1: `21394e73678e08407aff41f2071ae7fc539eaf60`, independently fetched after publication and confirmed equal to local Git blob.
- Initial source commit: `06a36a63551dbe06296cab0eac11ccf559df7e90`.
- This report is the only other new path. No edits to earlier `environments`, `editions`, `hybrids`, `salvage`, `lineage`, `references`, CyberSand, or any other worker branch.

## Creative distance

The closest existing works were inspected as **source/design context**, not traced or reused:

| Compared work | Deliberate departure |
| --- | --- |
| Environment Lab 001 — Aeolian Palimpsest | A sequence of animate, traversing habitation structures replaces one stationary tension-engine; firing and substrate vitrification replace advection; ochre ceramic mass against teal slate replaces radial instrument design. |
| Environment Lab 004 — Thirst of the Sky | Solid walking pottery and smoke-carried heat replace suspended textile moisture infrastructure; horizontal migration across a basin replaces clifftop vertical collection; thermal windows rather than condensation grids provide light. |
| Environment Lab 006 — Suture of Winter | No glacial cliff, abyss, span, or bridge motif: the major negative space is an open fired plain and staggered moving machines; mechanical gait rather than tectonic strain; warm combustion rather than frozen architecture. |
| Environment Lab 008 — Chromatic Escarpment | Although both refer to ceramic technologies, this contains **no circular basins, channels, fixed mineral dyeworks, slurry, or cataract**: the vessel itself is an ambulatory inhabited kiln, and the primary force is locomotion/heat, not pigment conveyance. |
| Edition 021 — Garden Inside the Bone | Habitation here is inside industrial ceramic machines, not skeletal remains or botanical fossil sanctuary; repeating grounded feet, vents and fired tracks replace ribs and growth. |

Transferable to possible CyberSand future concepts are **material processes that rewrite landscape**, legible inhabited machinery at multiple scales, and geological tracks that imply history. Nothing here is a native CyberSand map, tested material catalogue, physics/locomotion evidence, or gameplay acceptance.

## Executed graphical qualification

Tested **the exact final published HTML source** locally through Playwright `page.set_content()` with actual installed Chromium, because browser policy blocked direct `file://` navigation. The test captured framebuffer screenshots from the first frame and a later animated frame on both devices; checked that those pixels differed; interacted with controls; tested daylight/night, pointer drag (desktop), touchscreen tap (mobile), pause/restart; captured full canvas and downloaded actual PNG data; and checked no JS page exceptions, outbound requests or horizontal overflow. Source bytes were later verified against the published Git blob.

| Check | Desktop | Mobile |
| --- | --- | --- |
| Browser viewport | 1440×900, DPR1 | 390×844, DPR2 |
| PNG canvas dimensions | 1440×768 | 780×1406 |
| Exported PNG bytes | 1,021,336 | 891,135 |
| Export SHA-256 | `2cfce71ef74d2eb3908d0b0f2f7f7c093110f1f8a47dc2239321c5aa5b2831dd` | `292c02447707e949a6bdb3388bb2993d60787e23c72f2f2ff4289be3e7e909d5` |
| Initial vs animated pixels | Different, actual framebuffer | Different, actual framebuffer |
| Draft/march at 95/78, night mode | Verified | Verified |
| Pointer/touch | Mouse drag changed pan ~126 units | Actual touchscreen tap executed |
| Pause | Exact pixel and animation-time equality | Exact pixel and animation-time equality |
| Browser exceptions / outbound requests / overflow | 0 / 0 / 0 | 0 / 0 / 0 |

Actual full desktop and mobile first-frame and night-frame captures were **visually inspected**. Local evidence archive contains the final HTML, eight screenshots (first, later, night, exported PNG at two viewport sizes), and machine-readable test report with per-PNG SHA-256 values.

**Limitations:** the screenshots/evidence are saved as local run artifacts, not durably published to GitHub; direct `file://` navigation is blocked by testing policy and has not been separately accepted; Firefox and Safari not tested; this is browser art only. No native CyberSand materials, mechanical movement or simulation capabilities are claimed.

## Design-quality self-assessment

Macro: staggered tall/medium/small kiln silhouettes and outstretched walking struts establish a unified skyline. Meso: ceramic sub-dwellings and attachment details establish credible residential use; seams, vents and feet explain local functions. Micro: individual fired bricks, flaking glaze, seams, sparks, pins, workers and roadside signals reward detail inspection. Value: luminous furnace openings concentrate focal energy while dark mountains and plain remain subordinate. Main risk: the highly graphic, illustrative treatment is not automatically superior to the five source-pinned CyberSand engine-gallery benchmark renders.

**Disposition:** distinct original concept; Draft; no merge or public release; leave art/reference library unchanged.