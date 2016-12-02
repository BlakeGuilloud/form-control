import webpack from 'webpack';
import path from 'path';

module.exports = {
  entry: {
    'react-form-control': [path.join(__dirname, './src/components/index.js')],
  },
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },
  output: {
    path: path.join(__dirname, './dist/js'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'react-form-control',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/] },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};
