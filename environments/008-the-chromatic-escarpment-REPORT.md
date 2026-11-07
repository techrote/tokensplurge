# Environment Laboratory 008 — The Chromatic Escarpment

**Status:** Standalone original experimental environment artwork; browser-qualified locally, Draft/unmerged.

## Concept and visual construction
An abandoned mineral dyeworks stretches across a two-sided escarpment. Five large circular ceramic precipitation pans feed chromatic slurry down an inclined sequence of elevated flumes; a suspended agitator turns above a void while the final pan spills into a deep prismatic cataract. Refinery houses, buttress terraces, survey gantries, cable tensions, a mineral sorting crane, crystal accretions and dozens of miniature dwellings/figures establish layered scale. Palette: smoky slate and oxidised aubergine, restrained copper/peach structural edges, and cyan–madder flowing pigments.

**Transferable environmental question:** What would an inhabited industrial landscape look like if its architecture was designed around chemical deposition gradients, with sediment stains revealing historical operating levels? The interactive chemistry is an artistic metaphor only; this is not an actual fluid, corrosion or CyberSand physics simulation.

**New file:** `environments/008-the-chromatic-escarpment.html`; UTF-8, 24,999 bytes, entirely self-contained (embedded Canvas2D, CSS, UI, textures, animation and exports). No external assets or libraries. Open directly in a current browser.

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
- Verified published HTML Git blob: `5864954ca7b01350a92ab8ace33501de5a65a48b`.
- Independently tested source SHA-256: `b29805a48cbcfcd2e7ae6566db3ee2011586fac93eb02959ed3972af32b98b60`.
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

Screenshots were genuinely captured and inspected at both sizes, including desktop daylight, desktop pan/detail, and mobile interaction. Mobile was iterated from an undersized panorama to a purposeful portrait crop, while retaining zoom/pan discovery. The dawn-state heading was subsequently corrected for contrast; the entire desktop/mobile browser suite was rerun against the final exact source after this correction.

**Final post-correction evidence hashes** (SHA-256):
- Desktop initial PNG: `abbc32324b3128e879de93ef3257004a9cad2b17198903ecc04f7051b54ef11c`
- Desktop animated PNG: `73ea627af14b743dcb0cee39554fbb5e9feca01e2a3145edbc25fdc134dca29a`
- Desktop dawn PNG: `e9dddfc3dd892708d29098ee8118c53a4bfd11417d4606c7fa46a81983484638`
- Desktop detail PNG: `7179aa7bce6463158083f47d60be29fb21a049e43dc450a4398136e63fe79031`
- Mobile initial PNG: `b2f4f42487afc17cfea211778218eedad21bd040104b84d203af51e17370fcbc`
- Mobile interaction PNG: `b96ced1d7be4fead342f576c6c2e6a91f8dc75b1a6b0c75a3abd11976acd094b`

Final source revision after the executed contrast correction: commit `d322d77b616b479444083c0cf63ab174b3bda62e`. The two-file PR branch is based on immutable main `dba3f7ba18beb87628f496fefe828fce52f780f4`.

### Remaining limitations
Screenshot bytes are preserved in the local delivery evidence bundle, not committed to GitHub as immutable screenshot artifacts. Independent external quality acceptance, browser parity (Safari/Firefox), full-session performance, direct `file://` navigation and native CyberSand/Godot material/physics/scene validation are untested. These limitations do not block a usable experimental concept artwork.

**One new original work only. Draft, no merge or release. Record progress and stop.**
