const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const miniCss = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [miniCss.loader, "css-loader", "sass-loader"],
          },
        ],
      },

    plugins: [
        new HtmlWebpackPlugin ({
            template: path.resolve(__dirname, './src/public/template.html'),
            filename: 'Newindex.html'
        }),
        new miniCss({
            filename: 'NEWstyle.css',
        })
    ],

}
