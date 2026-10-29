# SALVAGE

A series of small interactive works set after the end of the `lineage/` run. Each one has

- a **pointer layer**: something the mouse (or a finger) does to the piece, which works on its own, and
- a **keyboard game**: a quiet, learnable mechanic, with the controls spelled out in the footer.

Most titles are named after, or loosely inspired by, an earlier work in the lineage (the header of each page says which).

## Running it

Open `index.html` for the browsable list (it has a filter box, a random-specimen button and `#NNN` deep links, e.g. `index.html#045`). Any single `NNN-name.html` also runs on its own. Everything is plain HTML, canvas and a tiny shared shell; there is no build step and nothing is fetched from the network.

From a checkout, any static server will do:

```
python -m http.server 8000
```

then open `http://localhost:8000/salvage/`.

## Common controls

| Key | Does |
|---|---|
| arrows / WASD | the piece's main controls (listed in the footer of each page) |
| Space | the main action |
| Esc | pause / resume |
| R | reseed (except in the typing works, which use the **Reseed** button) |

The footer buttons **Pause**, **Reseed** and **Collect** (saves a PNG of the canvas) are on every page that uses the shell.

## Files

- `kit.js` is the shared shell (canvas, loop, controls, readouts, notes). Works from S004 onward load it with `<script src="kit.js">`, so keep it beside them. It also records which specimens have been opened in this browser (`localStorage`, key `salvage-seen`) for **S100, Wall of Specimens**.
- `001`–`003` are the first three works and are standalone.
- `index.html` lists every work; `S100` reads that list at run time, so new works appear on the wall automatically.

## Adding a work

```html
<script src="kit.js"></script>
<script>
Salvage({ id:'S120', title:'NAME', parent:'NNN SOMETHING FROM THE LINEAGE',
  help:'…controls…', aria:'…for screen readers…',
  reset(K){ /* new specimen */ }, step(K,dt){ /* update */ }, draw(K,ctx){ /* paint */ },
  key(K,e,fresh){ /* return true to claim the key */ }, down(K,x,y){ /* pointer */ },
  readout:K=>['LEFT TEXT','RIGHT TEXT'] });
</script>
```

then add a link to `index.html`.
