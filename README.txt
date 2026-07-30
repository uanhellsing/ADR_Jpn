ADR HTML PROJECT — SKELETON

1. Откройте index.html двойным щелчком — по умолчанию используется красная версия.
2. index-red.html — версия с красным рисунком и красным следящим глазом.
3. index-black.html — предыдущая версия с чёрным CSS-глазом и затемнением.
4. index-black-overlay.html — новый вариант: красный рисунок и чёрный следящий оверлей глаза.
5. Отдельная страница выбора вариантов удалена.
6. Клик в центральной активной области запускает волны и переводит на home.html.
4. Большинство изображений аппаратуры и коллекции пока являются локальными SVG-заглушками.
5. Чтобы заменить изображение, положите новый файл в соответствующую папку images и поменяйте src в HTML.
6. Скрытая ссылка HIWY находится в подвале каждой основной страницы и теперь оформлена как глаз с движущимся зрачком.
7. В hiwy/index.html через 5,5 секунды происходит переход на hiwy/home.html. Заставку можно пропустить кнопкой.
8. Технические характеристики техники являются черновым шаблоном и требуют проверки перед публичной публикацией.

Основные файлы:
- css/style.css — общий стиль ADR и глаз в подвале
- css/welcome-red.css — красная welcome-страница
- css/welcome-black.css — предыдущая welcome-страница с чёрным CSS-глазом
- css/welcome-black-overlay.css — красный рисунок с чёрным следящим оверлеем
- css/hiwy.css — стиль HIWY, включая компактный режим и магазин
- js/welcome-red.js — движение красного слоя глаза и водные волны
- js/welcome-black.js — движение чёрного зрачка и водные волны
- js/site.js — появление элементов, фильтры и движение зрачка в подвале
- js/hiwy-intro.js — заставка продолжительностью 5,5 секунды
- js/hiwy.js — мобильное меню и анимации HIWY

ОБНОВЛЕНИЕ HIWY (23.07.2026)
- Раздел HIWY полностью переработан.
- Добавлены официальные ссылки: Amazon Music, VK, YouTube, Apple Music, Spotify и Bandcamp.
- Удалены все обратные ссылки из HIWY в ADR.
- Удалены вымышленные даты концертов; до реальных анонсов выводится нейтральная заглушка.
- Добавлены локальные обложки релизов «Известное», «Неизвестное» и «Затмение».
- Заставка сокращена с 10 до 5,5 секунды.
- Уменьшены заголовки, обложки, ширина контента и отступы для небольших экранов.
- Добавлен отдельный компактный режим для экранов высотой до 820 px.
- Добавлена страница hiwy/store.html с цифровыми товарами Bandcamp.
- В магазине добавлена официальная футболка HIWY в белом и чёрном цветах с ценой 3500 ₽.

ОБНОВЛЕНИЕ V4
- images/welcome/index-wave.jpg — полноэкранный полупрозрачный фон welcome-страницы.
- images/common/adr-eye-logo.png — логотип глаза без зрачка для подвала ADR.
- Подвижный зрачок в подвале создаётся отдельным HTML/CSS-элементом поверх логотипа.


V5 fixes:
- Removed the white canvas behind the welcome eye.
- Made the footer pupil red, placed it lower, and expanded vertical movement in both directions.


V6 update:
- Welcome wave opacity increased by 50% (.24 -> .36; mobile .19 -> .29).
- Added the HIWY T-shirt as one product in white and black, with both supplied photos and a 3500 ₽ price.


V7 changes:
- ADR pages use the supplied dark paper texture as a fixed background.
- Removed the HIWY caption below the footer eye.
- Added a fixed social strip to HIWY Home/Live/Shop/About.
- HIWY navigation labels are Home / Live / Shop / About.
- Shop begins directly with the T-shirt; original shirt photos are used without filters.
- Live begins with “Новые даты скоро”; the archive uses a compact YouTube player starting at 05:59.


V8 changes:
- Welcome wave/logo opacity increased to 0.54 (0.43 on small screens).
- Live archive reduced to a compact embedded player only.
- Real equipment photos added; file 1 is used as cover and files 2/3 as internal gallery images.
- Added Sumiko Pearl.
- Audio-Technica cartridge changed to AT-VM95E.
- SMSL model corrected to PH-1.

V12 — ПРОВЕРКА ВИДЕО
---------------------
YouTube может показывать ошибку 153, если HTML открыт напрямую через file://.
Для проверки плееров запустите START_SITE.bat или откройте папку через VS Code Live Server.
После запуска откройте http://localhost:8000/hiwy/concerts.html


V13: restored supplied ADR CLAN image in header and home; horizontal #5e0d73-to-black header gradient; classic menu font restored.

V15 changes:
- Telegram footer artwork cleaned: white counters inside ADR lettering filled, position raised to align with the eye and copyright.
- Welcome page rebuilt on a black background with Index 1 as the central base artwork.
- Index 2 converted into a transparent red eye drawing with enhanced contrast and a moving pupil.


V16 changes:
- Added eight verified albums to the static Collection catalogue.
- New cover artwork is stored locally as optimized 600×600 WebP files.
- Collection images use lazy loading and asynchronous decoding.
- Applied the pending red Index 2 artwork and the clean Telegram variant without ADR Jpn lettering.

V17 changes:
- ADR footer height reduced; Telegram artwork moved about 10 px lower and the tracking eye moved 10 px right.
- Collection intro shortened to a single sentence.
- About title changed to ADR with the revised short description.
- ADR and HIWY copyright range changed to 2018–2028.
- Blog and Collection cards now use a consistent portrait-card layout with square cover artwork.

V18: centre-only index entry, dark eye shadow, footer-eye alignment, ADHD/AURORA collection additions, corrected Japanese catalogue labels.


V21 — TWO INDEX VARIATIONS
- index.html: default red version.
- index-red.html: new supplied red layered eye.
- index-black.html: previous black tracking eye.
- index-variations.html: simple chooser for comparing both versions.


V22 — BLACK OVERLAY INDEX
- index-variations.html удалён.
- Добавлен index-black-overlay.html.
- В новом варианте основной рисунок остаётся красным, а отдельный следящий оверлей глаза перекрашен в чёрный.


V23 — USER-SUPPLIED COLLECTION COVERS
- Replaced the three Japanese single covers in Collection with the latest supplied images:
  * Yasuha — Fly-Day Chinatown
  * Mariya Takeuchi — Plastic Love
  * Miki Matsubara — Stay With Me
- Rebuilt images/welcome/index-2-eye-black.png from the supplied overlay file with a clean black color replacement.
- Added index-var-3.html as an alias of the black-overlay version for quick testing.

V24 — CONSOLIDATED FULL PROJECT
- index.html and index-red.html use the red moving eye with the same soft black shading as the black variant.
- index-black.html remains available as the alternative black-eye version.
- Removed extra experimental index variation pages.
- Integrated the compact responsive footer: Telegram, eye and copyright stay aligned in one horizontal row on narrow windows.
- Includes all Collection, ADR, HIWY, equipment, blog and image updates from v23.

V25 — GITHUB PAGES / YOUTUBE EMBED FIX
- Added .nojekyll for direct static hosting on GitHub Pages.
- Checked all local HTML/CSS references using case-sensitive paths: no missing files.
- YouTube embeds now use www.youtube.com/embed with an explicit strict-origin-when-cross-origin referrer policy.
- When pages are opened through file://, the Live page shows a local-preview notice instead of a broken Error 153 player.
- Added GITHUB_PAGES_README.txt with browser-upload instructions.
