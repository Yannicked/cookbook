const eleventyPluginCookLang = require('eleventy-plugin-cooklang');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginCookLang, {
    outputHtml: true,
  });

  eleventyConfig.addPassthroughCopy("style.css");

  return {
    pathPrefix: "/cookbook/",
    dir: {
      input: ".",
      includes: "src/_includes",
      output: "_site"
    }
  };
};
