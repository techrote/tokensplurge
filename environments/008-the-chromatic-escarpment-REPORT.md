# Environment Laboratory 008 — The Chromatic Escarpment

**Status:** Standalone original experimental environment artwork; browser-qualified locally, Draft/unmerged.

## Concept and visual construction
An abandoned mineral dyeworks stretches across a two-sided escarpment. Five large circular ceramic precipitation pans feed chromatic slurry down an inclined sequence of elevated flumes; a suspended agitator turns above a void while the final pan spills into a deep prismatic cataract. Refinery houses, buttress terraces, survey gantries, cable tensions, a mineral sorting crane, crystal accretions and dozens of miniature dwellings/figures establish layered scale. Palette: smoky slate and oxidised aubergine, restrained copper/peach structural edges, and cyan–madder flowing pigments.

**Transferable environmental question:** What would an inhabited industrial landscape look like if its architecture was designed around chemical deposition gradients, with sediment stains revealing historical operating levels? The interactive chemistry is an artistic metaphor only; this is not an actual fluid, corrosion or CyberSand physics simulation.

**New file:** `environments/008-the-chromatic-escarpment.html`; UTF-8, 24,778 bytes, entirely self-contained (embedded Canvas2D, CSS, UI, textures, animation and exports). No external assets or libraries. Open directly in a current browser.

## Interaction
- Sluice pressure changes particle/channel transport.
- Mineral saturation changes each basin's chromatic layering.
- Dawn/dusk changes illumination and sky palette.
- Tap/click creates expanding pigment disturbance rings; pointer-drag pans; mouse-wheel zooms.
- New Patina reseeds deterministic fine detail. Reset View restores desktop fit or a deliberately closer portrait view.
- Pause/Resume freezes simulation time. Export PNG downloads the real canvas framebuffer at its native pixel dimensions.

## Source custody
- Inspected main SHA: `dba3f7ba18beb87628f496fefe828fce52f780f4`.
- Source branch: `art/environment-lab-20261107-chromatic-escarpment-008`.
- Verified published HTML Git blob: `38d6cc2dda53bb7037110434baf4ca9e8ead3337`.
- Independently tested source SHA-256: `0a7c2f3cf176596a3af0a59e8940333c87fabe79dd933f9be6fe25af780e9ca0`.
- Existing originals, editions, hybrids, salvage, lineage, previous environment studies and reference-library files were not modified. No CyberSand changes.

## Independent creative distance
| Comparable | Meaningful differences |
| --- | --- |
| [Lab 004 — The Thirst of the Sky](https://github.com/techrote/tokensplurge/pull/39) | Mineral-fluid precipitation rather than atmospheric fog collection; a downward settling cascade instead of suspended woven collectors; inhabited foundry/cistern landscape rather than mountain agriculture. |
| [Lab 006 — The Suture of Winter](https://github.com/techrote/tokensplurge/pull/45) | Ceramic processing infrastructure instead of alpine glacial strain; multiple rounded precipitation vessels rather than split ice plates; chemical colour gradients rather than stress/heat fissures. |
| [Lab 007 — The Breathing Citadel](https://github.com/techrote/tokensplurge/pull/46) | Industrial human-made network rather than colony-built porous architecture; stepwise settling rather than chamber ventilation; exposed ravine/gantries rather than enclosed brood chambers. |
| [The Aether Distillery](https://github.com/techrote/tokensplurge/pull/27) | Full inhabited landscape/cutaway rather than an instrument folio; sediment-bearing engineered pans instead of symbolic alchemical plates; physically legible gravity route instead of abstract kinetics. |

No recognisable layouts, palette systems, motifs, typography, simulations or source code were copied. CyberSand's five benchmark gallery works and the source-pinned reference catalogue were consulted solely for the quality bar (strong macro legibility; scale-bearing meso relations; constrained highlights; environmental narrative; credible micro wear).

## Real executed browser qualification
**Chromium via Python Playwright**, Linux local browser at `/usr/bin/chromium`. Exact final HTML was loaded with `page.set_content()`; a native `file://` open is **not** independently qualified. Source captured at 1440×900 desktop DPR 1 and 390×844 mobile DPR 2.

| Check | Desktop | Mobile |
| --- | --- | --- |
| Initial and later animated frames | PASS | PASS |
| Actual slider settings and alternate light | PASS | PASS |
| Pointer disturbance / touch | PASS | PASS |
| Pan, wheel zoom, view reset, seeded patina | PASS | UI smoke / not all desktop gestures |
| Pause exact simulation-time stability | PASS | Desktop-only |
| Actual PNG download signature and dimensions | PASS (1440×900) | PASS (780×1688) |
| JavaScript page exceptions | **0** | **0** |
| Document horizontal overflow | **0** | **0** |

Screenshots were genuinely captured and inspected at both sizes, including desktop daylight, desktop pan/detail, and mobile interaction. Mobile was iterated from an undersized panorama to a purposeful portrait crop, while retaining zoom/pan discovery.

**Actual evidence hashes** (SHA-256):
- Desktop initial PNG: `9060550ec5304b97e9dd2370ab371ed8262d259bafae86493c55e8941eb3dbe5`
- Desktop animated PNG: `51f14209525cb46935a05e7ea8846924dc6ec8a79627d3604b947d93d25860c1`
- Desktop dawn PNG: `10d1777738e697fab87c16f5654ed226c53bbb06b483fc7781844f65ca0b51c4`
- Desktop detail PNG: `8b5800fdf76e9971b4a222061b875afc03629c6a385f95f6e99a6e7797560175`
- Mobile initial PNG: `135f1947f22c244c9623c5f92fce517e06537370cdb67c999f54225e8527c940`
- Mobile interaction PNG: `e323ce1a6978e5f5fa4f3089aaf6901b693adf25895c348b895983f0b92ca0ea`

### Remaining limitations
Screenshot bytes are preserved in the local delivery evidence bundle, not committed to GitHub as immutable screenshot artifacts. Independent external quality acceptance, browser parity (Safari/Firefox), full-session performance, direct `file://` navigation and native CyberSand/Godot material/physics/scene validation are untested. These limitations do not block a usable experimental concept artwork.

**One new original work only. Draft, no merge or release. Record progress and stop.**
