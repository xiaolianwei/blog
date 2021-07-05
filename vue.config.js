/* eslint  no-param-reassign:off */
/* eslint  global-require:off */
const SSRClientPlugin = require('vue-server-renderer/client-plugin');
const SSRServerPlugin = require('vue-server-renderer/server-plugin');
const markdownItContainer = require('markdown-it-container');

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node';
const target = TARGET_NODE ? 'server' : 'client';
module.exports = {
  configureWebpack: () => ({
    entry: `./src/entry/${target}.entry.js`,
    target: TARGET_NODE ? 'node' : undefined,
    module: {
      rules: [{
        test: /\.md$/,
        use: [
          {
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
    output: {
      libraryTarget: TARGET_NODE ? 'commonjs2' : undefined,
    },
    optimization: {
      splitChunks: TARGET_NODE ? false : undefined,
    },
    plugins: [TARGET_NODE ? new SSRServerPlugin() : new SSRClientPlugin()],
  }),
};
