const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Rewrites internal links/src attributes to respect pathPrefix at build time
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy static assets to _site without processing them
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  // Ignore the old flat HTML folder
  eleventyConfig.ignores.add("html/");

  return {
    dir: {
      input: "src",       // Source pages live here
      output: "_site",    // Built site is written here
      includes: "_includes", // Reusable partials
      layouts: "_layouts",   // Full-page layout templates
    },
  };
};
