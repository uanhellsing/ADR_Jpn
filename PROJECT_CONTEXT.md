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
Article date: **2026-06-21** (date of the Asteria configuration discussion thread).
- Bought in BOOKOFF junk section for **¥13,000** as non-working.
- User has soldering tools/skills and repaired/configured it.
- Hilt: **Ultimate Works RVS (Darth Revan)**.
- Soundboard: **Asteria V2.5**.
- Photos: `images/blog/asteria-rvs-1.jpg`, `asteria-rvs-2.jpg`.
- Video: https://youtube.com/shorts/kvVOWWPNig4

### Xenopixel / Obi-Wan Kenobi Episode I
Article date: **2026-08-25** (Mercari ¥18,000 discussion).
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
