const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/scrollspy.js");

  // Add markdown-it with attributes plugin
  eleventyConfig.setLibrary("md", markdownIt({ html: true }).use(markdownItAttrs));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
