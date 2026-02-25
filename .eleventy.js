module.exports = function (eleventyConfig) {
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
