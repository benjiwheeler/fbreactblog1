const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
//    entry: "./src/app.jsx",
  entry: {
    bundle: "./src/app.jsx",
    vendor: ['react', 'react-dom']
  },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
      loaders: [
        {
                test: /\.jsx?$/,
                // Enable caching for improved performance during development
                // It uses default OS directory by default. If you need something
                // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'survivejs-kanban']
                },
                // Parse only app files! Without this it will go through entire project.
                // In addition to being slow, that will most likely result in an error.
                include: __dirname + "/src"

        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'public' }
      ]),
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    devtool: 'eval',
    devServer: {
      contentBase: __dirname + "/dist",

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      colors: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT || 3388
    }

};
