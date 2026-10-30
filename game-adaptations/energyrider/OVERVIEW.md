# ENERGYRIDER — Development Overview

ENERGYRIDER is a web game adapted from the SALVAGE artwork S007 *Liquid Retention*. It blends a side-scrolling shooter with Line Rider-style riding on a liquid surface.

Play it by opening `index.html` in a browser. It mounts on the shared SALVAGE shell at `../../salvage/kit.js`, so the shell's pause, reseed and PNG collect controls work as they do for the artwork.

## Origin: the SALVAGE series

Before the game, the work was an animated art series in `salvage/`:

- **S001–S135** are standalone or shell-mounted pieces. Each has a mouse-reactive layer and a keyboard "game layer", and a clear rule for what the viewer is trying to do.
- **`salvage/kit.js`** is the shared shell. It provides the canvas, the `K` helpers (`rand`, `hash`, `noise`, `clamp`, `lerp`, `pointer`, `keys`, `note`), pause, reseed and collect controls, and visit counting in `localStorage`.
- **`salvage/index.html`** lists the works, with a filter, a random button and `#NNN` deep links. **`salvage/README.md`** documents the series and how to add a work.
- Two phases of development were reviewed: the first pass built the series and fixed rendering and input bugs (for example, the S010 unbound `this`, the S100 apostrophe that broke the script, and the S091 ring arcs). The second pass added S128–S135 and smoke-tested each one in the browser.

S007 was chosen as the first game because its mechanics were already there: a tilted tank, a damped wave solver, a retention bracket and a drifting memory.

## ENERGYRIDER design

**Core loop.** You run along the liquid surface, which is a wave solver on top of a fixed hill profile. You collect five memories floating above it, shoot drones that fire back, and reach the gate at the far end. The gate only opens once every memory is retained. Each tank is longer and has more drones than the last.

**Controls**

| Input | Effect |
|---|---|
| A / D | Run directly. Ctrl halves the run speed. |
| W or Space | Light the jetpack. The jetpack has three fuel sections and burns the current section to its floor, even after the key is released. |
| S (in the air) | Triples gravity. |
| Ctrl | Glide: halves gravity and horizontal speed while held. Stacks with S for 1.5× gravity. |
| F | Fire. |
| ← / → (also ↑ / ↓), Q / E | Tilt gravity. |
| 1 / 2 / 3 | Read a stored tilt preset. |
| Shift + 1 / 2 / 3 | Store the current tilt in that preset. Defaults are 0°, +23°, −23°. |
| Pointer drag | Grab a point on the liquid surface and pull it. |

**Fuel rules.** Fuel is three sections. A jetpack press lights the current section and burns it down to the start of the section below, then stops. Fuel refills only while you are in contact with the liquid.

**Gravity rules.** Tilt changes the direction of gravity. Changing the tilt also sloshes the liquid toward the low side, so the surface lags and then settles.

## Verification

- **Syntax:** the inline script parses with `new Function`.
- **Headless behaviour test:** 27 checks drive the game's hooks directly with stubbed DOM and canvas. They cover resting on the surface, running, jetpack sections, fuel regen rules, S, Ctrl and Ctrl+S gravity multipliers, tilt keys and presets, pointer drag, memory pickup, gate clear, death and retry, and a two-minute random-input stress run that checks state stays finite.
- **Not yet verified:** rendering and feel in a real browser. The Browser pane could not reach the local server during development, so the look of the surface, drones and HUD and the balance of jetpack and gravity are untested by eye.

## Known limits and next steps

- **Balance:** jetpack thrust (1300), gravity (900) and the three-section burn time (1.5 s each) are guesses. They need playtesting.
- **Browser check:** open the game in a real browser and play one full tank.
- **Ctrl+W:** the browser may intercept it while Ctrl is held.
- **Scoring:** the score is memories (500 each), drones (200 each) and a gate bonus (1000 × stage). There is no high score store yet.
- **Series:** S128–S135 are not yet listed in `salvage/index.html`.
