# ADR Project Context — 2026-09-08

This file is the handoff point for continuing the website project in a fresh ChatGPT thread.

## Canonical branches

- **ADR UAN** — full site. Start screen with animated eye, RU/JA/EN ADR pages, Telegram footer, hidden HIWY eye link, HIWY microsite, JS animations.
- **ADR Lite** — simplified Japanese static site. No HIWY and no JavaScript; separate Blog / Collection / Audio equipment / About pages. Header uses the illustrated eye background from ADR UAN; page body uses the same dark paper texture.

## Main navigation / language

ADR UAN has Russian, Japanese and English versions with round flag icons. Russian is default. HIWY remains its own original section.
ADR Lite is Japanese.

## Blog chronology

The purchase diary is ordered newest to oldest. Major known purchase dates include:
- 2026-08: Art Tatum / Ben Webster; Kamifusen; Rachmaninov / Ashkenazy; Shirley Bassey; Jinpachi Nezu.
- 2026-07: Tatsuro Yamashita POCKET MUSIC; Foreigner 4; Wham! Make It Big; Porno Graffitti THUMPχ; MOONDROP Variations.
- 2026-02: Tatsuro Yamashita RIDE ON TIME, FOR YOU; Yosui Inoue 招待状のないショー.
- 2025-12: Kazumi Band; The Chanels; N.S.P; Takao Horiuchi こんにちは; Shigeru Suzuki Serenade.
- 2025-11: TEAC A-H01.
- 2025-10: Wharfedale Diamond 10.1; Ortofon 2M Red; Elmo Hope Trio; William Ackerman; Fly-Day Chinatown; Stay With Me; Plastic Love.
- 2025-03: GIGABYTE AORUS FO48U.
- 2024-08: SMSL PH-1.
- 2024-07: Lo-D PS-38; Audio-Technica AT-VM95E.
- 2023-03: The Weeknd Starboy.
- 2022-11: AURORA The Gods We Can Touch.
- 2021-10: Sumiko Pearl.
- 2021: MOONDROP KATO, around summer / release year.
- 2010: AKG Q701, release year.

## Saber articles added 2026-09-08

### Asteria / Ultimate Works RVS
Acquisition date: **late April 2026** (user correction; do not use the later configuration-thread date as the purchase date).
- Bought in BOOKOFF junk section for **¥13,000** as non-working.
- User has soldering tools/skills and repaired/configured it.
- Hilt: **Ultimate Works RVS (Darth Revan)**.
- Soundboard: **Asteria V2.5**.
- Photos: `images/blog/asteria-rvs-1.jpg`, `asteria-rvs-2.jpg`.
- Video: https://youtube.com/shorts/kvVOWWPNig4

### Xenopixel / Obi-Wan Kenobi Episode I
Acquisition date: **mid-June 2026** (user correction; the later Mercari discussion date is not the purchase date).
- Bought on Mercari for **¥18,000** as non-working.
- Newer and less common hilt; fault was software/configuration related.
- Hilt: **Obi-Wan Kenobi Episode I / The Phantom Menace**.
- Manufacturer is not marked; visual construction, USB-C and removable Xenopixel core most closely match **LGT / Nexus Sabers OWK TPM**, so keep attribution explicitly probabilistic.
- Soundboard: **Xenopixel** (version not claimed).
- Photos: `images/blog/xenopixel-obiwan-1.jpg`, `xenopixel-obiwan-2.jpg`, `xenopixel-core-leds.jpg`.
- Video: https://youtube.com/shorts/eS4plwdPCi0

YouTube embeds use `youtube.com/embed/...` plus `referrerpolicy="strict-origin-when-cross-origin"` to avoid Error 153 on HTTPS hosting. Direct `file://` opening may still not behave like GitHub Pages.

## Collection

ADR UAN collection currently has 33 entries grouped/filterable by LP/Vinyl, CD and Digital. ADR Lite keeps the compact static collection grid. Newly added photo-derived releases include POCKET MUSIC, Tatum/Webster, Kamifusen, Foreigner 4, Rachmaninov/Ashkenazy, Wham! Make It Big, Shirley Bassey, Porno Graffitti THUMPχ and Jinpachi Nezu.

## Important design constraints

- Full site: keep animated eye landing pages, dark paper background, illustrated header, Telegram footer and hidden HIWY eye.
- Lite: keep no JavaScript and no HIWY; use full-site header artwork and paper background.
- Album cards do not open separate album detail pages.
- Use English product/brand/model names in Latin script.
- Keep GitHub Pages compatibility; `.nojekyll`, `index.html` at root, relative local paths.


## Pending V28 article refinements (2026-09-08)
- Replaced Asteria and Xenopixel saber images with the user's newly cropped versions.
- Reduced oversized article titles.
- Enlarged vertical YouTube Shorts embeds.
- ADR UAN: RU / 日本語 / EN article pages are present and article-language flags are shown directly below the title.
- The next article has now been added; package the branches only when the user asks for the archives.

## PC upgrade article — 2026-08-18

Title:
- RU: **Обновка для ПК**
- JA: **PCのアップグレード**
- EN: **PC Upgrade**

Story:
- Previous case: **Dr Zaber Sentry 2.0** — compact and ventilated, but with limited thermal headroom in the Japanese summer.
- Bought a **Thermaltake TH360 V2 ARGB Sync** 360 mm AIO at auction for **¥7,000**.
- The 360 mm radiator is physically too large for the Sentry 2.0, which triggered the case replacement.
- New case: **Thermaltake The Tower 250 Matcha Green Edition**.
- Article uses six user photos: old Sentry build, Tower 250 box, empty-case comparison, panel view, hardware transfer, finished build.
- Full ADR UAN article files: `blog/pc-upgrade.html`, `blog/pc-upgrade-ja.html`, `blog/pc-upgrade-en.html`.
- ADR Lite article file: `blog/pc-upgrade.html`.
- Blog chronology: place this article on **2026-08-18**. Xenopixel is now mid-June 2026, so the PC article is newer than the saber article.


## DATE CORRECTION
- Ultimate Works RVS / Asteria: acquired **late April 2026**.
- Obi-Wan Episode I / Xenopixel: acquired **mid-June 2026**.
- These purchase dates override earlier dates inferred from later discussion threads.


## PC Build article — 2022-10-22

Title: **PC Build**. Initial compact SFF build in **Dr Zaber Sentry 2.0**.
Confirmed from user data/photos:
- CPU: **Intel Core i7-10700K** (8 cores / 16 threads).
- Motherboard: **ASUS ROG Strix Z490-I Gaming** (Mini-ITX / Z490).
- GPU: **GIGABYTE GeForce RTX 3070 EAGLE OC 8G** (8 GB GDDR6).
- RAM: **32 GB HyperX FURY DDR4**; exact memory clock is not claimed.
- Storage visible in component photo: **HP EX950 M.2 2 TB** + **Samsung 970 PRO NVMe M.2**; 970 PRO capacity is not claimed.
- Case: **Dr Zaber Sentry 2.0**.
Photos: `pc-build-2022-parts.jpg`, `pc-build-2022-internal.jpg`, `pc-build-2022-front.jpg`, `pc-build-2022-side.jpg`.
Full branch pages: `blog/pc-build-2022.html`, `blog/pc-build-2022-ja.html`, `blog/pc-build-2022-en.html`. Lite: `blog/pc-build-2022.html` in Japanese.
Blog chronology: insert on **22 October 2022**, after AURORA (Nov 2022) and before 2021 entries.


## V31 correction
- Article directories are explicitly visible on blog landing pages.
- Full ADR home pages link directly to all four long-form articles in RU/JA/EN.
- Article gallery photography is never cropped: original aspect ratios are preserved with height:auto/object-fit:contain.


## V32 — EARLY PC + DIESEL WATCH
- Added First PC article dated 7 March 2014, with five supplied photos.
- Confirmed base hardware: Intel Core i7-3770K, ASUS P8Z77-I DELUXE/Z77, 16 GB G.Skill DDR3, Corsair H100, Intel 80 GB SSD, Kingston HyperX 3K 240 GB, WD Blue 500 GB.
- MSI GeForce GTX 980 GAMING 4G is documented as a later upgrade because GTX 980 postdates the March 2014 original build.
- RAM exact clock intentionally left unconfirmed; P8Z77-I DELUXE officially supports up to DDR3-2400 (OC).
- Corrected user recollection: photographed red HyperX SSD is HyperX 3K 240 GB, not HyperX Savage.
- Added Diesel DZ1295 article dated 27 May 2015 with supplied photo.
- ADR UAN articles exist in RU / JA / EN; ADR Lite retains its Japanese-only architecture.
