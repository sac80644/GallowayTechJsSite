
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "development",

    //default so not needed
    entry: {
        main: './src/index.js'
    },

    //default so not needed
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',

    },

    // devtool: '#source-map',
    devtool: 'inline-source-map',
    
    //hmr
    // devServer: {
    //     contentBase: './dist',
    //     hot: false
    // },

    plugins: [
        new CleanWebpackPlugin(),
        
        //copy what i need to dist
        new CopyWebpackPlugin([
            { 
                from: './src/data', 
                to: './data', 
                ignore: ['*.js'] 
            }
        ]),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        //can shrink from say 1,795 KB to 355 KB but build time is slow.  use only for production build
        // new UglifyJSPlugin(),

        //hmr
        // new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            //importing css into js modules
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            //importing html into js modules
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader'
                }
              }
        ]
    }
}