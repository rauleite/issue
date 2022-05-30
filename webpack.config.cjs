const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  target: "webworker",
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: './src/index.ts',
  externals: [
    nodeExternals()
  ],
  externalsPresets: {
    node: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}

