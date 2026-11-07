# Environment Laboratory 004 — The Thirst of the Sky

**Classification:** finished, original, independent browser-rendered environment art. **Not CyberSand native rendering, materials, collision, Water simulation or production world evidence.**

## Creative hypothesis and authored place

An inhabited high-altitude ridge is surviving through an invented dew-harvesting infrastructure: three monumental asymmetric tensioned condenser veils stretch between fractured mountain pylons, with warp/weft threads, selvedge rivets, catenary tie-downs, mooring nodes and pressure vanes. Condensate travels down the fabric, gathers at three low anchor points, descends through a central stepped gravity spillway, and irrigates a deliberately small terraced settlement. The giant pale canopy is the macro silhouette; load-bearing paths, anchor hardware and cliff-hugging villages are the meso vocabulary; minuscule droplets, streaked volcanic cleavage, mesh joints, etched gradients, irrigation marks, survey pins and airborne particulates form the micro-detail.

**Visual language:** painterly vector/cartographic Canvas2D with mint-and-porcelain daylight, dark lichen-colored ridges, apricot selvedges and glacial cyan water. The afterglow mode uses its own dusk atmosphere. The large upper veil and two dependent lower veils form a single distinctive hydrologic machine rather than a repeated decorative motif.

**Visible cause and effect:** fog condenses on the biased woven surface → rivulets run inward to the apexes → elevated collector releases suspended beads → stepped aqueduct delivers water to retaining terraces. Crosswind changes the directional field; fog mass changes condensation density, rate and displayed yields. The response is *illustrative*, not a conservation-law simulation.

## Independent invention and distance

Reviewed current `main` inventory and active PRs/branches on 2026-11-06 before creation. Closest comparators:

- [Environment Lab 001 — Aeolian Palimpsest #32](https://github.com/techrote/tokensplurge/pull/32): both allow a wind control, but this has suspended **woven membrane triangles** and dew-path funnels rather than a **metal annular wind-listener**; irrigated villages rather than exposed evaporite-scar geometry; live condensation routing rather than airborne sediment drift; a mint/porcelain/apricot aerial palette rather than ochre/slate/indigo.
- [Environment Lab 002 — The Quarry That Refused the Ground #35](https://github.com/techrote/tokensplurge/pull/35): no floating batholith, mineral rupture, roots, inverted quarry or central suspended rock. Here the material is textile mesh, supported between *stationary* windward cliffs; the process transports atmospheric water into a reservoir, not roots upward from a spring.
- [Environment Lab 003 — The Lantern Ossuary #37](https://github.com/techrote/tokensplurge/pull/37): no biological remains, rib scaffolding, snowfield, hanging settlement or migrating lantern procession. Structures are exposed textile aerodynamics and inhabited agricultural terraces, not habitations inside a skeleton.
- [The Marsh of Borrowed Stars #30](https://github.com/techrote/tokensplurge/pull/30) and [The Archive of Unfallen Rain](https://github.com/techrote/tokensplurge/blob/main/hybrids/007-the-archive-of-unfallen-rain.html): no marsh boardwalk, willow, phase-coupled fireflies, rain archive façade or retained droplets as cabinet specimens. Moisture is collected from lateral fog and visibly directed *downstream* through infrastructure, not shown as blinking lights or archived rain.
- [The House That Held the Weather](https://github.com/techrote/tokensplurge/blob/main/editions/012-the-house-that-held-the-weather.html): the environmental process is distributed across open mountain space, not a house-scale contained meteorology object.

No prior code, shapes, source styles, station graphs, facade grids, benchmark palettes or compositions were copied. The five CyberSand gallery assets and its [visual quality bar](https://github.com/techrote/cybersand/blob/d7baad924a0d5ab69d0fc5bf95080057f875bb3d/docs/world-design/QUALITY_BAR.md) were treated as quality scope only. This work is a standalone *concept*, not a native CyberSand gallery candidate.

## Standalone artifact and source identity

- **Single new artwork:** `environments/004-the-thirst-of-the-sky.html`.
- **New report only:** `environments/004-the-thirst-of-the-sky-REPORT.md`.
- **Source ancestry:** fresh `main` commit `dba3f7ba18beb87628f496fefe828fce52f780f4` (read 2026-11-06), unchanged original art/reference files.
- **Isolated branch:** `art/environment-lab-20261106-thirst-of-the-sky-004`.
- **Original readable unpacked HTML:** 21,164 bytes; SHA-256 `1071e39e05022d3a7f3c0e1f68ea8e3c2b846efb43e4ad6021e294b13b0705c3`.
- **Published standalone wrapper** (with compressed self-contained HTML payload): 13,206 UTF-8 bytes; SHA-256 `5e20e37b77004390c431bc95a198ea3057aab6ce3b6c9e9486b4474337ca9be0`; Git blob `87b6343d2827ad036e4b894f41864923c83695b1`, independently verified by fetching the published file.
- Modern browsers with native `DecompressionStream('gzip')` are required. All rendering, styles, code, images and particle data live in this single portable HTML; there are **no external script/image/network requests**. To inspect the human-readable payload offline: use Python `base64.b64decode(re.search(r'const a="([^"]+)"', Path('environments/004-the-thirst-of-the-sky.html').read_text()).group(1))`, then `gzip.decompress(...)`. Verify unpacked SHA-256 above.

## Actual local Chromium qualification (not a visual mockup)

Executed using **Chromium 144.0.7559.96**, Debian GNU/Linux, Playwright's real browser page and Canvas2D. Because managed Chromium disallows `file:` navigation, the actual *final published HTML bytes* were injected with `page.set_content()`; the browser's native gzip decompression, reconstructed DOM, Canvas2D and animation all executed. Both exact viewport variants were checked.

| Check | Desktop | Mobile |
| --- | --- | --- |
| Browser CSS viewport | 1440×900 | 390×844, DPR 2 |
| Actual PNG canvas pixels | 1440×900 | 780×1688 |
| First and later browser screenshot | yes; 41,697 changed pixels (>7 threshold) | yes; 159,702 changed pixels |
| Afterglow interaction/capture | yes | yes |
| Crosswind and fog controls | tested on readable source (−73%, 96%) | tested on readable source (−73%, 96%) |
| Dew-release button; pause/resume | yes | yes |
| Pause frame invariant after 220 ms | true | true |
| Pointer interaction | desktop click/drag | real browser touchscreen tap |
| Exported PNG verified with Pillow | 1,974,419 bytes | 2,151,540 bytes |
| PNG SHA-256 | `704fe8021dbaa30df7fe80aa6bc74375e65917b13c9a1592a18eb8323939942` | `a9f27da8a5d1eb706e781568b4b02d06a5b507dbc0b09244e4903afe71e27c65` |
| Browser page exceptions | zero | zero |
| Horizontal overflow | none (scrollWidth=innerWidth) | none (scrollWidth=innerWidth) |

Publication-wrapper first-frame captures: desktop SHA-256 `1c00b69e96ad7fc94124bbf495071c71508392f498ae86a6091ee1afe283d921`, mobile `ae7e831a95cc0e9a16860eb7b7a902c41bef3f9b324b3a69a6fe712ece19655a`. Afterglow captures: desktop `274c2dd37c2df0beeb0e2699ad697a52acdbbe34dc39111c4ab404b6f34095ca`, mobile `972aa7b410aa0ced8ca0d933d65fb01936cbb0a680a74d8dbee2b3709cf48014`.

The first uncompressed source was also tested across both screen sizes and interacted with; the final standalone *published wrapper* was then separately tested on both sizes, including real PNG downloads and paused-frame invariance. Final GitHub file content blob matches this tested wrapper byte-for-byte.

**Evidence limitations:** Screenshots/test logs are stored in this execution's local evidence ZIP, not yet published as durable GitHub-hosted evidence. We have not claimed human gallery acceptance, Firefox/Safari, older browsers without `DecompressionStream`, resource-constrained mobile performance, public HTML preview-host behavior or any CyberSand/Godot/native physics qualification. The displayed hourly water yield is an artistic readout, not a measured real fluid transport rate.

## Scope and disposition

Exactly two *new* files under `environments/`. No existing works, lineages, folios, hybrids, salvage, reference library assets, existing branch or CyberSand production files were modified. No PR merged, no public release, no automatic map or shader integration. **Remain Draft. Record progress and stop.**
