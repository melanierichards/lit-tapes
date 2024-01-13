# Lit Tapes

Playlists made from songs mentioned in books

## Setup from Template Checklist

* [x] Update `package.json`, `_data/site.json`, and `feed.njk` with project details
* [ ] Go thru `eleventy.js` and un-comment or delete utilities
* [ ] Update or remove `icon-sprite.njk`
* [ ] Update `head.njk` with any info for: RSS, social metadata, icons
* [ ] Update images referenced in `manifest.webmanifest`

-------------------------------------------------------------

## To build

0. Install [Node](https://nodejs.org/) :)
1. Clone the repo
2. Run `npm install`
3. Run `npm run start`
4. Visit `localhost:8080`

## Commands

| Command                      | Purpose                      |
| :--------------------------- | :--------------------------- |
| `npm run start`              | Serve project + watch Sass   |
| `npm run build`              | Build project                |
| `npm run checks`             | Validate HTML & lint JS      |
| `npm run lint`               | Run eslint                   |
| `npm run lint:fix`           | Run eslint and fix issues    |
| `npm run validate`           | Run html-validate            |

## Post Template

```
---
title: 
date: 2024-
author: 
bookCover: title.webp
bookGenres: 
bookPages: 
bookLink: 
playlistTracks: 
playlistRuntime: 00:00:00
playlistLink: 
cassDeco: bandTop, bandBottom, stripes, or none
cassColorDesc: {list of colors for cassette tape alt text}
cassColorScheme: light or dark
cassColor: ""
cassthingyColor: "" {the trapezoid at the bottom}
cassLabelColor: ""
cassBandColor: "" {required if using this style}
cassStripe1: "" {required if using this style}
cassStripe2: "" {required if using this style}
cassStripe3: "" {required if using this style}
tags: ["posts"]
---

## Music in this book

## Playlist

## Albums Mentioned

## Artists Otherwise Mentioned

```

### SVG sprite references

```
<svg role="image" focusable="false" class="c-rating" viewBox="0 0 20 20" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
  <title>Accessible label</title>
  <use href="#" y="-20">
</svg>
```

## Reference

* [Eleventy docs](https://www.11ty.dev/docs/)
* [ESLint docs](https://eslint.org/)
* [HTML Validate docs](https://html-validate.org/)
* [Nunjucks templating language](https://mozilla.github.io/nunjucks/templating.html)
* [Luxon date formatting](https://moment.github.io/luxon/docs/manual/formatting.html)
