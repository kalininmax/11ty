const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const shortcodes = require('./shortcodes');

module.exports = config => {

  // Plugins

  config.addPlugin(eleventyNavigationPlugin);

  // Shortcodes

  config.addShortcode('navlist', shortcodes.navList);

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