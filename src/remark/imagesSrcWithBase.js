const visit = require('unist-util-visit');

const plugin = (options) => {
/**
 * Docusaurus does not process JSX `<img src ="...">` URLs
 * This plugin rewrites the URLs to be relative to `baseUrl`
 * Markdown links `[]()`, images `![](/image)` and anchor `<a href="...">`
 * are already automatically processed
 */
  const remarkImageSrcWithBase = (options) => {
    return (ast) => {
      visit(ast, 'jsx', (node) => {
        const matches = node.value.match(/^(<img\s.*?src="\s*)\/(.*)$/);
        if (matches != null) {
          node.value = `${matches[1]}${baseUrl}${matches[2]}`;
        }
      });
    };
  };
  return remarkImageSrcWithRequire;
};

module.exports = plugin;
