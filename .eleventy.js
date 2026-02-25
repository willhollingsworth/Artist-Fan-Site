const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy static assets from src/ to _site/ without processing them
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  return {
    dir: {
      input: "src",       // Source pages 
      output: "_site",    // Built location
      includes: "_includes", // Reusable partials
      layouts: "_layouts",   // Full-page layout templates
    },
  };
};
