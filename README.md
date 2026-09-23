# Dysfunctional Wands: a 360° virtual exhibition

A WebVR gallery for "Dysfunctional Wands", a show by 16 sculpture students from the Accademia di Belle Arti di Bologna. You stand inside a 360° room, look at an artist's portrait and the page takes you to that artist's room, where their works hang as photos, videos and spinnable 360° objects. Built with A-Frame and plain JavaScript, no build step.

The exhibition ran in May 2021 (online, and in person at OFV Studio in Bologna). The site is not hosted any more. To see it, run it locally (see below).

## What it is

The show came out of a workshop by the artist Rebecca Agnes, in the sculpture course of Ivana Spinelli. Each student made a "dysfunctional magic wand" around a social wish, and the works are objects, videos, installations and performances. Museums were closed at the time, so the students wanted a virtual space that felt like a room you could walk through, and an Instagram page to go with it. I built the website; Beatrice Matassi and Valeria Scardino worked on it with me. The texts in the concept room are in Italian, as written by the curators and the students.

## How it works

- `index.html` is the main hall. A `link-list` component reads a list of artists and places 17 round portrait buttons in a circle around the camera (16 artists plus a "Testi critici" room with the curatorial texts). Nothing is hand-placed.
- `rooms/<Artist>.html` is one page per artist. An `artist-link-list` component turns a few empty `<a-entity data-url data-text>` children into a row of thumbnails: back, the artist's works, and the concept page.
- `works/<Artist>/*.html` are the works themselves. Three kinds: a photo page, a video page (`video-player` starts playback on the first tap, which mobile browsers require), and a 360° object page that uses a Sirv spin viewer instead of A-Frame.
- `crytic-room.html` shows the curatorial texts on three walls of a white room, rendered with a custom MSDF font so accents display correctly. A `set-text` component copies the text from hidden `<p>` blocks into `<a-text>` entities.
- Navigation works with a gaze cursor: hover a button for 1.5 s and it fires, so the site is usable in a cardboard headset without a controller. Buttons scale up on hover and animate on click.
- `manifest.json` lets people add it to the home screen as a standalone app.

All A-Frame libraries (0.8.2, plus the animation, event-set, layout and template components) are vendored in `assets/libs`, so the site works offline once loaded.

## Run it locally

The pages use absolute paths (`/assets/...`), so serve the repo root, do not open the files directly:

```
npx serve .
# or
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Drag to look around, click or gaze to move between rooms.

## Status

Built in April and May 2021 for the exhibition, not maintained since. Photos and videos of the works are committed to the repo, which makes the clone large (about 330 MB checked out, about 1 GB with the git history). The 360° object photos are hosted on Sirv and depend on that account staying up.

## License

MIT for the code. The artworks, photos, videos and texts belong to the artists and curators and are not covered by the license.
