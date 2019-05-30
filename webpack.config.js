
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devtool: '#source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { 
                from: './src', 
                to: './', 
                ignore: ['*.js'] 
            }
        ])
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