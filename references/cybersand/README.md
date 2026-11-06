# CyberSand × TokenSplurge environmental reference atlas

**Initial edition:** 2026-11-06 · **Curation extension:** 2026-11-06. Original 19 sources and their evidence remain immutable. One newly pinned environment candidate is pending independent Chromium capture; actual engine-side graphical acceptance remains outstanding.

[Open the filterable moodboard](index.html) · [Canonical selection and revision manifest](catalogue.json) · [Creative-distance instructions](CURATORIAL_GUIDE.md) · [Acceptance and tracking ledger](TRACKING.md)

## Purpose and location

This is a **supplementary design reference library**, located in TokenSplurge so it does not compete with the three CyberSand atlas workers' shared PR. It is not a new CyberSand map-writing lane, new production material authority or engine import proposal.

The HTML interface is a **single file** (embedded CSS, filtering code and source-pinned catalogue). Screenshots live alongside it in `captures/` so reviewers can compare real pixels. CyberSand's five existing reference images remain in their original repository and are referenced by immutable commit URLs, avoiding multi-megabyte duplication.

The original immutable 19 entries comprise five **primary CyberSand visual benchmarks**, eleven **TokenSplurge environmental artworks**, and three **smaller procedural studies**. Each entry contains exact repository commit and Git blob identity, a named transferable principle, a proposed CyberSand use and an explicit copying boundary. Source URLs and links are pinned; moving `main` and GitHub rendered previews are not evidence.

## Opening and filtering

Open `references/cybersand/index.html` in a current browser after checking out the branch. Filter by source class, discipline, CyberSand collection or free-text. Click **Open pinned source** to inspect the untouched original; use **Inspect detail crop** for local render evidence.

A local checkout displays the TokenSplurge captures when present. The primary CyberSand reference images are remotely loaded from immutable `raw.githubusercontent.com` commit URLs, so internet access is needed for those thumbnails. This is a standalone HTML **interface**, not an offline archival image package. Missing thumbnails are explicitly labelled rather than replaced by AI-reconstructed artwork. The public GitHub source-HTML preview service has not been independently accepted.

## Exact source revisions

- TokenSplurge: `f9deae20ded26e959f2096ba9fed9a0e3b61a6ed` (initial merged-art snapshot).
- CyberSand: `06522e300dcf91efbab0ac8f4f4370af72cf2029` (existing benchmark assets).
- Each asset also has its exact Git blob SHA in `catalogue.json`. Changing source contents requires a **new edition** and fresh captures, not an in-place unrecorded pin update.

## Repeatable Chromium capture

The capturer runs browser-rendered TokenSplurge **source HTML at its immutable Git revision**, not a screenshot guess. Its output is explicitly different from genuine CyberSand Godot-material captures. It requires Node 22+, Git history including the pinned TokenSplurge commit, and Playwright Chromium.

```sh
npm install --no-save --no-package-lock playwright@1.56.1
npx playwright install chromium
node references/cybersand/tools/capture.cjs
node references/cybersand/tools/verify.cjs --require-captures
node references/cybersand/tools/smoke-ui.cjs
```

The original 14 TokenSplurge items retain 28 historically source-bound PNGs. New references require their *own* immutable commit and blob readback and new 1440×900 + 768×480 captures; only missing new items are captured. Existing reported screenshots are checked and never silently overwritten after a checksum failure. The independent UI-smoke script exercises search, class/discipline/collection filters, reset and desktop/mobile layouts. An optional resulting screenshot is stored as `captures/moodboard-preview.png`. It verifies pinned Git blob hashes, blocks external runtime requests, waits for real canvas content and records browser exceptions. Each PNG gets a SHA-256 and source provenance entry in `captures/report.json`.

**Limitations:** This proves source-bound Chromium framebuffer rendering only at the reported viewport/time. It does not prove third-party preview-host availability, interaction paths, artistic superiority, cross-browser/mobile compatibility, native materials, collision, Water/Brine containment, performance or Godot rendering. Source-independent visual review remains necessary.

The original 19 per-card commit/blob pins and benchmark image identities are frozen in `tools/initial-pins.json`; later cards may use different pinned source revisions. `tools/test-policy.cjs` exercises mixed-revision report tampering, historical repins, missing original cards and image-path collision. New entries remain `capture.status=pending` until Chromium actually produces hashes and the report verifies their pixels. The capture workflow then updates both the JSON catalogue and its single-file HTML embedding together.

The documentation-branch GitHub Action `.github/workflows/cybersand-reference-capture.yml` runs this procedure and commits resulting screenshots/report to that same isolated branch only after the relevant checks pass. Existing exact-source verified captures are reused instead of needlessly generating new random frames on every docs edit. It never writes to CyberSand or to a creative worker's branch.

## Updating and maintaining this reference set

1. Investigate the new artwork itself, its source commit, available executed screenshot and artistic ancestry. Select only work that offers genuinely **distinct** transferable ideas.
2. Add a card in `catalogue.json`, pin both Git commit and blob SHA; record specific transfer and copying boundary. Keep five primary CyberSand references separate from experimental images.
3. Regenerate the embedded catalogue in `index.html` exactly. The verification script rejects divergence between JSON and embedded data; do not silently edit only one.
4. Execute source-pinned captures, verify report and PNGs, inspect actual visual results, then update `TRACKING.md` with acceptance findings. If images are absent or fail tests, mark the entry **capture blocked**—do not imply a successful render.
5. Publish changes through a dedicated documentation branch/PR. Do not edit the three-worker CyberSand atlas PR branch, merge production changes or activate paused schedulers.

The portfolio curation and implementation contracts in CyberSand's [world-design QUALITY_BAR](https://github.com/techrote/cybersand/blob/d7baad924a0d5ab69d0fc5bf95080057f875bb3d/docs/world-design/QUALITY_BAR.md) remain authoritative for that programme.

## Curation 01 capture evidence

The new Aeolian entry has now been captured on hosted real Chromium at source-pinned [run 42283462249](https://github.com/techrote/tokensplurge/actions/runs/42283462249), producing checksummed desktop/detail PNGs in `captures/` and a 15-item report. Its creative assessment remains provisional pending human/pixel comparison and genuine Godot native material presentation. The original 19-card identities and 28 art/study PNG captures are unchanged. For UI-review reproducibility, the original `captures/moodboard-preview.png` remains preserved, and subsequent editions write a separate edition-labelled moodboard UI screenshot.
