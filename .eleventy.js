// require('dotenv').config(); // Reference env vars
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation'); // Navigation
const pluginRss = require('@11ty/eleventy-plugin-rss'); // RSS
const { DateTime } = require('luxon'); // Date formatting

module.exports = function (eleventyConfig) {

  // UNIVERSAL

    // Don't try to build asset files, just transparently copy them through
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/manifest.webmanifest');
    eleventyConfig.addPassthroughCopy('src/robots.txt');

    // NAVIGATION
    // eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // POSTS

    // RSS FEED
    eleventyConfig.addPlugin(pluginRss);

    // DATE FILTERS

      // Machine-readable dates
      eleventyConfig.addFilter("machineDate", function(value) {
        return DateTime.fromJSDate(value, {zone: 'utc'}).toISO();
      });

    // SHORTCODE - SECTION START
    eleventyConfig.addShortcode("sectionStart", function(slug, headingText) {
      return `<section class="post-section" aria-labelledby="{slug}-heading"><h2 id="${slug}-heading">${headingText}</h2>`;
    });

    // SHORTCODE - SECTION END
    eleventyConfig.addShortcode("sectionEnd", function(specialSection) {
      if (specialSection & specialSection === 'postDetails') {
        return '</div></section>';
      } else {
        return '</section>';
      }
    });

    // SHORTCODE - TIDAL PLAYER
    eleventyConfig.addShortcode("tidalPlayer", function(playlistId) {
      return `<div style="position: relative; padding-bottom: 75vh; height: 0; overflow: hidden; max-width: 100%;"><iframe title="Playlist for this book on Tidal" src="https://embed.tidal.com/playlists/${playlistId}" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 1px; min-height: 100%; margin: 0 auto;"></iframe></div>`;
    });
  
  // CUSTOMIZE INPUT DIRECTORY
  return {
    dir: {
      input: 'src'
    }
  }
  
};
