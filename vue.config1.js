const markdownItContainer = require('markdown-it-container');

module.exports = {
  configureWebpack: () => ({
    module: {
      rules: [{
        test: /\.md$/,
        use: [{
          loader: 'vue-loader',
        },
        {
          loader: 'vue-markdown-loader/lib/markdown-compiler',
          options: {
            wrapper: 'article',
            wrapperName: '123',
            raw: true,
            preventExtract: true,
            use: [
              [markdownItContainer, 'tip'],
              [markdownItContainer, 'warning'],
              [markdownItContainer, 'danger'],
              [markdownItContainer, 'details'],
            ],
          },
        },
        ],
      }],
    },
  }),
};
