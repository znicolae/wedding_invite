# Botanico Romantico — Academic Replica

Independent responsive wedding-invitation frontend inspired by the romantic botanical mood of the Sponsalia preview. This project uses original HTML/CSS/JavaScript and CSS illustrations; it does not include copied Sponsalia source code, branding, proprietary images, or music.

## Run locally

1. Unzip the project folder.
2. Open `index.html` in a modern browser, or (recommended) start a local server from this folder:

   ```bash
   python -m http.server 8000
   ```

3. Visit http://localhost:8000.

No build step or package installation is needed. Google Fonts are loaded online; fallback fonts are specified for offline use.

## Included

- Responsive desktop/mobile layout
- Animated hero entrance and scroll reveals
- Interactive envelope-opening dialog with animated flap, seal, and ribbon
- Optional music player: choose a local audio file you own or are licensed to use
- Live countdown to the sample date
- RSVP form with browser validation and local confirmation

## Customize

- Edit names, dates, venue, address, and invitation copy in `index.html`.
- Change `weddingDate` in `script.js` to match the invitation date/time.
- Edit the `:root` color variables and typography in `styles.css`.
- Replace fictional details and the sample map link before publishing.

## Demo limitations

- RSVP is frontend-only. It does not transmit or store responses. Connect a backend or form service to receive submissions, and add an appropriate privacy notice.
- No music is bundled. Visitors select their own audio file; playback remains local in their browser.
- Couple names, venue, and event details are fictional placeholders.
- This is an academic implementation, not an official Sponsalia product or an exact reproduction of its protected assets.
