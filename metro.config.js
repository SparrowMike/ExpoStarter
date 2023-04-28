module.exports = {
  resolver: {
    resolverMainFields: ['react-native', 'browser', 'main'],
    useJIT: true,
  },
  transformer: {
    minifierPath: 'metro-minify-terser',
    minifierConfig: {
      // You can configure the Terser minifier here.
      // For example, you can enable source maps for easier debugging.
      // See: https://www.npmjs.com/package/terser#minify-options
      keep_fnames: true,
      compress: {
        drop_console: true,
      },
      output: {
        comments: false,
      },
    },
  },
};
