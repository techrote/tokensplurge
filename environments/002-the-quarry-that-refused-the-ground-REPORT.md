# Environment Laboratory 002 — The Quarry That Refused the Ground

**Status:** Original, browser-executable environment artwork. Design-only. **Not a CyberSand native/Godot material or simulation capture.**

## Source custody

- Repository: `techrote/tokensplurge`, isolated branch `art/environment-lab-20261106-quarry-refused-ground-002`.
- Fresh `main` base: `5771b6285e917526359a35b2bf973487dcbd9c4b`.
- New standalone source: `environments/002-the-quarry-that-refused-the-ground.html` — 19,894 UTF-8/ASCII bytes, no libraries, external resources or runtime network dependency.
- Exact Git blob from the uploaded, tested source: `a68998ce6993c42207fb0f5d729fe3ce669abd84`.
- Local source SHA-256: `1636affa05f5d6253790df5311f63bf8535590101d1f41ae78b3d9a8d5b8981c`.
- Creative source commit: `c3dbd6f61fc87c85a7243abf0101a14928de5a91`. The connector subsequently returned this exact Git blob SHA; no bytes changed between test and publication.
- All paths are **additions** under `environments/`. No existing art, refinement branch, hybrid, lineage, salvage, reference catalogue or CyberSand production file was edited.

## Environment and artistic mechanism

A vast *unmoored geological cross-section* floats over a black underground spring. Excavation beds, habitable cuttings, thin bridges, ladders, sparse vegetation and mineral compression planes express centuries of occupation and tectonic history. Its asymmetric luminescent geode fault is both the focal rupture and the source of an ascending root-and-spore field. Basalt cliffs enclose a large negative-space cavity, while minute workers' lights and survey annotations establish scale. Cool jade mineral light contrasts with the rock's muted rose and slate, in two independent lighting conditions.

**Interaction:** Pressure slider alters visible root/spore motion and the mass's suspended breathing; pointer/touch evokes a pressure shock; blue-hour/daylight shift changes the actual render; pause/resume freezes the simulation clock; Export PNG downloads the actual canvas framebuffer. The mass's motion and upwelling are **authored visual fiction**, not physically conserved fluid or native-world behaviour.

## Creative-distance assessment

This work was invented from a fresh layout and drawing code, rather than a fork, edit, or combination of old works. Relevant near neighbours:

1. [The Aeolian Palimpsest, PR #32](https://github.com/techrote/tokensplurge/pull/32): exposed salt-scar basin, fixed radial bronze wind register and *horizontal* wind-driven dust. Here the primary shape is an airborne, inverted **stone quarry with asymmetric internal mineral fault**; its environment is a shadowed wet cavern and its growth is **upward**, not wind-advected. No wind ring, canyon layout, palette or source code reused.
2. [The Throat of the Desert, PR #34](https://github.com/techrote/tokensplurge/pull/34): a seventeen-pipe *buried wind organ*, vertical anemographic chamber and engraved pressure instruments. This work has no pipe organ or wind mechanics: broad slab stratification, habitable cut terraces, a jagged geode opening and a living root lattice form its silhouette and motion.
3. [The Pelagic Reliquary](https://github.com/techrote/tokensplurge/pull/20) and [Where the Rivers Were](https://github.com/techrote/tokensplurge/pull/7): mineralogical ocean and mapped vanished river systems. This is not a sea map or drainage network; its visual tension is the physical separation between a monumental hanging cut of land and the still dark spring that nourishes it.

The five original [CyberSand engine gallery benchmarks](https://github.com/techrote/cybersand/pull/454) informed only the ambition for macro silhouette, visible structural continuity, micro-detail density, luminance hierarchy, and scale cues. No source compositions, pixel maps, IDs, shaders, physics, simulation code or material palette were ported.

**Potential transferable principle:** Use a strongly defined **negative-space corridor plus asymmetric internal feature** to communicate scale and a specific environmental process. For an original CyberSand design, solve the environmental question independently in native material constraints; do not reproduce this slab, cavity geometry, root curves, colour map, or pressure interface.

## Actual graphical tests

**Runtime:** Local Linux Chromium `144.0.7559.96`, via Python Playwright using browser `set_content()` with the exact committed HTML source bytes. Chromium rendered actual Canvas2D framebuffers; screenshot capture is neither synthetic CPU art nor CyberSand Godot evidence. The automated session requested ANGLE/SwiftShader flags; no hardware-GPU compatibility is claimed.

| Test | Desktop 1440×900 | Mobile 390×844 |
| --- | --- | --- |
| Initial and later live frame | Executed, captured, inspected | Executed, captured, inspected |
| Initial → later changed RGB pixels | 327,402 | 144,204 |
| Initial → daylight changed RGB pixels | 1,033,156 | 324,698 |
| Pressure slider 42% → 86% | PASS | PASS |
| Exposure toggle | PASS | PASS |
| Pause clock remains unchanged | PASS | PASS |
| Pointer drag / touch | PASS — pressure to ~94.5% | PASS — real mobile touch to 49% |
| Actual PNG export | PASS — 1440×900, 1,474,436 bytes | PASS — 390×844, 558,307 bytes |
| PNG signature | `89504e470d0a1a0a` | `89504e470d0a1a0a` |
| Horizontal overflow | None | None |
| Browser page exceptions | 0 | 0 |

Export SHA-256 desktop: `05584de4ad8c78805632498fdd873ebf7215fe2f4efe6afac6d7016a3dbaf501`.
Export SHA-256 mobile: `6c70fc2f7469cd48c78610025f3b5e5d5e2a75eb9ea61c3274f5abe344a6a806`.

The source was syntax-checked with `node --check` on its extracted JavaScript. Captured desktop and mobile initial/later/daylight PNGs were viewed and compared with Pillow; there were no placeholder/blank canvases. A separate Playwright context with `has_touch=true, is_mobile=true` tested a real synthetic-browser touchscreen tap, increasing pressure from 0.42 to 0.49 without exceptions.

**Evidence limitation:** Full-resolution local Chromium PNGs, test JSON and reproducer were produced and retained in the execution workspace, but they have **not yet been uploaded into durable GitHub Actions artifacts or committed screenshots**. Treat numerical results and local screenshots as author-generated, not independent hosted proof. The post-load frame timing and source geometry are pinned; the animated screenshot *bytes* are not promised identical on another host.

## Honest limitations and handover

This piece does not establish CyberSand materials, native RG8 cells, Rapier interactions, fluid conservation, real Godot shader appearance, mobile GPU performance or frame-rate guarantees. Firefox/Safari and cross-device GPU results are unqualified. There is no external asset licensing issue: graphics and source were authored from procedural primitives in this file.

Independent visual review should inspect the actual committed source in a browser, re-capture both viewports, critique clarity of its jagged inner fault and hanging edge, and decide whether its *principles* justify a new CyberSand design brief. Do not automatically add it to the reference library or merge it; that is separate curator/owner authority.

**Record progress and stop.**
