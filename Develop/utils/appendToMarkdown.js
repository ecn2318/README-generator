function appendToMarkdown(results) {
    return `
  ## FAQ
  Any Questions?
  ${results.username}
  
  ## Author

  `
};

module.exports = appendToMarkdown;