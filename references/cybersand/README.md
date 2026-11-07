# CyberSand × TokenSplurge environmental reference atlas

**Initial edition:** 2026-11-06 · **Curation extension:** 2026-11-06. Original 19 sources and their evidence remain immutable. Two individually pinned environment studies have been selected across separate curation sessions. Aeolian has genuine Chromium captures; Lantern Ossuary is pending exact-source Chromium capture at the beginning of session 02. Actual CyberSand engine-side graphical acceptance remains outstanding.

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

## Curation 02 — migration-scale inhabited relic study

A second independently source-pinned study, `lantern-ossuary`, was selected from Environment Laboratory PR #37 for its distinct way of converting a large structural relic, negative space, small-scale settlement and a moving environmental procession into legible place-making. Source `17b09a592a30e52ef35040ef2076f336ad6380ec`, blob `f6260fa0b9c4694e3978c3520f840de74a39ff45`; see `TRACKING.md` for the assessed alternatives, rubric, creative-distance prohibitions and original CyberSand design briefs. This is a new provisional *inspiration*, not a primary benchmark. Its Chromium evidence is initially pending; the unchanged capture workflow must supply actual PNG bytes, verified source and SHA-256 report before it may be labelled captured. Original historical PNGs/benchmark refs and previous Aeolian evidence must remain unchanged.

### Curation 02 source-bound result

The new Lantern Ossuary desktop/detail PNGs were **actually captured by hosted Chromium** at [run 42299562733](https://github.com/techrote/tokensplurge/actions/runs/42299562733), published in the same isolated Draft PR and recorded under `captures/report.json`. There are now 21 reference cards (five primary CyberSand engine-gallery benchmarks) and 16 actual source-pinned browser capture records, with no lost prior PNGs and no failed captures. The selected work is still *provisional visual inspiration*, not a CyberSand native/material/physics test or claim of exceeding the five engine benchmarks.

The edition-labelled moodboard screenshot is immutable once first published: later CI runs still execute actual Chromium screenshot and UI assertions but discard their ephemeral re-render instead of silently rewriting the original PNG. A new edition explicitly chooses a new screenshot path. This preserves historical visual evidence while allowing documentation-only requalification.

## Curation 03 — source-pinned resource-catchment study

One provisional reference, Environment Laboratory [#39](https://github.com/techrote/tokensplurge/pull/39), adds the **environmental resource-conveyance** design problem, distinct from the existing Aeolian and Lantern giant-form studies. The immutable source is `d2d7eb71bb4fdab431ab4a36515421e7c6f5df1c` (HTML blob `87b6343d2827ad036e4b894f41864923c83695b1`). The source/author report describes fog interception, controlled gravity routing and a settlement dependent on small-scale infrastructure. This is one provisional inspiration, not a native CyberSand visual.

The moodboard edition 03 contains 22 source-locked cards including the same five original primary benchmarks. Initially only 16 artwork capture records are verified; the new work remains **pending** until the existing exact-source GitHub-hosted Chromium workflow publishes both actual PNGs and validates their SHA-256. The edition-02 Lantern source and image names are separately locked against silent change. See `TRACKING.md` for ranked alternatives, no-copy boundaries, real test results when available and outstanding native/human gates.

### Curation 03 actual hosted Chromium captures

The existing dedicated docs workflow [42314175464](https://github.com/techrote/tokensplurge/actions/runs/42314175464) now **passed** and published two original source-verified PNGs: [full-frame](captures/thirst-of-the-sky-desktop.png) (SHA-256 `adb1aab223e5cbeafa2f76fdc594dd0ce85f59431030eafac982bf0cf7b5e12a`) and [detail](captures/thirst-of-the-sky-detail.png) (SHA-256 `9e168f8738333123e26b65d228e39e119354d13f46ea9352a9a13ef485c87dfa`). The source-bound browser capture register is now **17/17**, all five engine-gallery reference identities are unchanged, and the catalogue embeds 22 entries. The author’s unpublished local screenshot claims are no longer the source of these images. Actual visual-quality comparison, Godot rendering and human art acceptance remain unqualified.

## Curation 04 — climate-driven biological architecture (7 November 2026)

Environment Laboratory [#46](https://github.com/techrote/tokensplurge/pull/46) is added as one **provisional**, source-pinned secondary reference for cause-and-effect between environment, internal functional spaces and large-scale architectural form. Exact original readable source: `2f38d84ef7ffd03cd51e44057dda3aeb1c03b657` / blob `767d23bccae92eb312a79722c33358a33af1e6d6`. The prior 22 cards, 17 Chromium captures, original five CyberSand references and established image bytes remain immutable. Curation-03 source/image custody now has an additional regression lock. Current #454 remains Draft and read-only.

The new full/detail Chromium captures are **pending real hosted browser execution and PNG SHA-256 verification** at publication; see `TRACKING.md` for independent seven-axis assessment, rejected/deferred sources, no-copy principles and original environmental prompts. Browser captures do **not** establish genuine CyberSand shader/material rendering or human acceptance.

### Curation 04 actual Chromium result

[Run 42326228347](https://github.com/techrote/tokensplurge/actions/runs/42326228347) generated and verified authentic original-source Chromium [desktop](captures/breathing-citadel-desktop.png) and [detail](captures/breathing-citadel-detail.png) PNGs, with source Git blob and image SHA-256 evidence in `captures/report.json`. The gallery is now **23 entries / five primary CyberSand references / 18 validated browser capture records / zero pending**. Desktop/mobile real Canvas pixels and controls passed; the curator directly inspected the actual detail crop and recorded its weaknesses as well as strengths in `TRACKING.md`. Full five-reference aesthetic comparison, human acceptance and real Godot/native rendering remain **open**. Earlier paragraphs record the chronological pre-capture state, not the current result.

## Curation 05 — mobile infrastructure as landscape memory (7 November 2026)

A single provisional secondary reference, [Environment Lab #48 — The Ambulant Kilns](https://github.com/techrote/tokensplurge/pull/48), has been selected for an **environment-making migration** design principle rather than copying its triptych of fired-earth walkers. Authored source is pinned to `57b7c7ff09caff703dadc3073122157ed16e49e7` and Git HTML blob `21394e73678e08407aff41f2071ae7fc539eaf60`. The entry is initially **pending real repository-hosted Chromium/Playwright full-frame and detail captures**; author-only reports are not accepted as independent PNG evidence. The scheduled dedicated reference workflow will attempt the source-pinned capture and verify hashes, historical images, source revision and the single-file moodboard controls; if unavailable, the new card remains pending. The 23 existing cards (including five original CyberSand benchmarks), 18 existing capture records and all older image blobs remain unmodified. All previous selections are historical and the stage-04 reference is now separately locked.

The environmental prompt and seven-axis provisional comparison against #47/#45/#43 and the quarry lineage are in `TRACKING.md`. Even a passing browser capture does **not** establish Godot-native material rendering, moving buildings, terrain alteration, physical heat transport, or the aesthetic quality of PR #454's proposed maps.

### Curation 05 published Chromium result

[Exact-source workflow run 42335188617](https://github.com/techrote/tokensplurge/actions/runs/42335188617) produced the real [desktop](captures/ambulant-kilns-desktop.png) and [detail](captures/ambulant-kilns-detail.png) PNGs from the pinned PR #48 source and independently verified their SHA-256 in `captures/report.json`. The source-matched desktop/mobile Playwright Canvas-pixel/control/PNG smoke and gallery UI filter checks passed. The library is now **24 cards, five original primary CyberSand references, 19 source-pinned Chromium capture records, zero pending**. Existing historical images were preserved; those files remain browser evidence, not CyberSand engine render or artistic acceptance. Full byte hashes, exact smoke numbers and limitations are recorded in `TRACKING.md`.
