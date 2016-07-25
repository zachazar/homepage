var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    './app/app.js'
  ],
  output: {
    path: path.join(__dirname, 'app/build'),
    filename: 'bundle.js',
    publicPath: "/app/build",
  },
  resolve: {
    modulesDirectories: ['node_modules','bower_components', 'app'],
    extension: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      //Helps Angular work, don't know why
      {
        test: /[\/]angular\.js$/,
        loader: 'exports?angular'
      },
      //For all js, lint and use babel
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "app/")
        ],
        loaders: ['babel?presets[]=es2015', 'jshint']
      },
      //Export html as raw strings
      {
        test: /\.html$/,
        loader: 'raw'
      },
      //Process sass files, make them compatible, and serve
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin({alwaysNotify: true}),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  devServer: {
    hot: false
  }
};