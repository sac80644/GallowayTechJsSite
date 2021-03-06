
/*********************************
 * Clues on how to get it to work.
 * https://www.excitoninteractive.com/articles/read/61/webpack4/step-by-step-javascript-and-css
*********************************/

/*********************************
* environment and imports
*********************************/
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const environment = process.env.NODE_ENV || "development";

/*********************************
/ entry 
*********************************/
const entry = {
    main: './src/index.js'
}

/*********************************
/ output
*********************************/
const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
}

/*********************************
/ devtool
*********************************/
const devtool = 'inline-source-map';

/*********************************
/ devServer
*********************************/
const devServer = {
    contentBase: './dist',
    hot: false
}

/*********************************
/ Plugins
*********************************/
const plugins = [
    
    new CleanWebpackPlugin(),
    
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),

    new MiniCssExtractPlugin({
        filename: 'styles.css',
        chunkFilename: '[id].css',
      }),

    new webpack.HotModuleReplacementPlugin()
];

/*********************************
/ Module
*********************************/
const _module = {
    rules: [
        
        {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../',
                  hmr: devServer.hot,
                },
              },
              'css-loader',
            ],
        },

        {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader'
            }
        },

        {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: [
                'file-loader'
            ]
        },

        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
              { loader: 'babel-loader' }
            ]
        }
    ]
}

/*********************************
* Optimization
*********************************/
const optimization = {
    minimize: false,
    minimizer: [new UglifyJsPlugin()]
}

/*********************************
/ Exports
*********************************/
module.exports = {
    mode: environment,
    entry: entry,
    output: output,
    devtool: devtool,
    devServer: devServer,
    plugins: plugins,
    module: _module,
    optimization: optimization
}
