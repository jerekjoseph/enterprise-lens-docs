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
  
  /**
   * Docusaurus does not process JSX `<img src ="...">` URLs
   * This plugin rewrites the src attribute to `src={require("...").default}`
   * Markdown links `[]()`, images `![](/image)` and anchor `<a href="...">`
   * are already automatically processed
   */
  const remarkImageSrcWithRequire = (options) => {
    return (ast) => {
      visit(ast, 'jsx', (node) => {
        const matches = node.value.match(/^(<img\s.*?src=)"(\s*\/.*?)"(.*)$/);
        if (matches != null) {
          node.value = `${matches[1]}{require("${matches[2]}").default}${matches[3]}`;
        }
      });
    };
  };