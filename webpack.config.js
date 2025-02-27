const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    indexPC: './src/js/indexPC.js',
    indexMobile: './src/js/indexMobile.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'img/[name][ext][query]', // Salva le immagini nella cartella img
          },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',   // Assicurati che il file index.html esista
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/indexPC.html',  // Assicurati che il file indexPC.html esista
      filename: 'indexPC.html',
      chunks: ['indexPC'],
    }),
    new HtmlWebpackPlugin({
      template: './src/indexMobile.html',  // Assicurati che il file indexMobile.html esista
      filename: 'indexMobile.html',
      chunks: ['indexMobile'],
    }),
    new CopyWebpackPlugin({
        patterns: [
          { from: 'src/img', to: 'img' }, // Copia la cartella img da src a dist
        ],
      }),
  ],
  devServer: {
    static: './dist',
    open: true,
  },
  mode: 'development',
};