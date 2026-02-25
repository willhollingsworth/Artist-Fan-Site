const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy static assets from src/ to _site/ without processing them
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

    // Keep .html files flat — no subdirectory clean URLs
    eleventyConfig.addGlobalData("permalink", () => {
        return (data) => {
            if (data.page.fileSlug === "") return "index.html";
            return `${data.page.fileSlug}.html`;
        };
    });

  return {
    dir: {
      input: "src",       // Source pages 
      output: "_site",    // Built location
      includes: "_includes", // Reusable partials
      layouts: "_layouts",   // Full-page layout templates
    },
  };
};;
