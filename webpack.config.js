var webpack = require('webpack');

module.exports = {
  entry: ['script-loader!jquery/dist/jquery.min.js',
  'script-loader!foundation-sites/dist/foundation.min.js',
  './app/app.jsx',
],
externals: {
  jquery:'jQuery'
},
plugins: [
  new webpack.ProvidePlugin({
    '$':'jquery',
    'jQuery':'jquery'
  })
],

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      Main:'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
      Nav: 'app/components/nav.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Controls: 'app/components/Controls.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components)/
      },
      {
        loader:['style-loader','css-loader'],
        test: /\.css?$/
      },
      {
        loader:['style-loader','css-loader', 'sass-loader'],
        test: /\.scss?$/,
      }

    ],
  },
  devtool: 'inline-source-map'
};
