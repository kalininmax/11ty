const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = config => {

  // Plugins

  config.addPlugin(eleventyNavigationPlugin);

  // 11ty defaults
  return {
    dir: {
      input: 'src',
      layouts: 'layouts',
      output: 'build'
    },
    templateFormats: ['md', 'njk'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};