ADR + HIWY — GitHub Pages upload notes

1. Extract this ZIP before uploading. Do not upload the ZIP as the website.
2. Upload the CONTENTS of the adr-html-skeleton-v25 folder so index.html is in the repository root.
3. GitHub browser upload accepts up to 100 files per operation, so upload this project in at least two batches.
4. Recommended first batch: root HTML/TXT files, css, js, blog, collection, equipment and hiwy.
5. Recommended second batch: the complete images folder and the .nojekyll file.
6. In Settings > Pages select: Deploy from a branch, main, /(root).
7. YouTube Error 153 occurs when a page is opened directly through file:// because no HTTP Referer is sent.
   Use START_SITE.bat / Live Server locally, or test the published GitHub Pages URL.
8. The Live page now explicitly uses Referrer-Policy: strict-origin-when-cross-origin and standard youtube.com embeds.
