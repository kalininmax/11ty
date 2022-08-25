const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const filters = require('./lib/filters');

const dev = global.dev = (process.env.ELEVENTY_ENV === 'development');
const now = new Date();

module.exports = config => {

  // Plugins

  config.addPlugin(eleventyNavigationPlugin);

  // Shortcodes

  config.addShortcode('navlist', shortcodes.navList);

  // Collections

  config.addCollection('post', collection => 
    collection
      .getFilteredByGlob('./src/articles/*.md')
      .filter(post => dev || (!post.data.draft && post.data.date <= now))
  );

  // Filters

  config.addFilter('datehuman', filters.dateformat.friendly);
  config.addFilter('datetime', filters.dateformat.ymd);
  config.addFilter('readtime', filters.readtime);

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