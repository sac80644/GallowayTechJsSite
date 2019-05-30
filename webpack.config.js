
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devtool: '#source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { 
                from: './src', 
                to: './', 
                ignore: ['*.js'] 
            }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
        ]
    }
}