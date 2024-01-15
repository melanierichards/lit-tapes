# Lit Tapes

Playlists made from songs mentioned in books

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
slug: matches-json-file-name
tags: ["posts"]
---

## Music in this book

{% sectionEnd "postDetails" %}

{% sectionStart "playlist", "Playlist" %}
{% tidalPlayer "ID from Tidal" %}
{% sectionEnd %}

{% sectionStart "albums", "Albums Mentioned" %}
{% sectionEnd %}

{% sectionStart "artists", "Artists Otherwise Mentioned" %}
{% sectionEnd %}
```

## Data Template

Duplicate `src/_data/tapes/_template.json` and use the same file name as referenced in `slug`.

### About shortcodes

Because layout elements are interspersed with post content, use the `sectionStart` shortcode in place of usual `## Heading Level 2` markdown. `sectionEnd` just creates a closing section tag; when passed `"postDetails"` it also closes the final div in that special section.

## SVG sprite references

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
