/*
 * @Author: miky 
 * @Date: 2019-03-11 22:13:43 
 * @Last Modified by: miky
 * @Last Modified time: 2019-03-13 00:44:16
 */

 const path = require('path');
 const webpack = require('webpack');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const HtmlWebpackPlugin = require('html-webpack-plugin')

 module.exports = {
     entry: "./src/App.js",
     output: {
         path: path.resolve(__dirname, './dist'),
         filename: 'js/app.js'
     },
     devServer: {
         port: '8088',
        contentBase: './dist',
        open: true,
        hot: true
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /(node_modules)/,
                 use: {
                     loader: 'babel-loader',
                     options: {
                         presets: ['@babel/preset-env', '@babel/preset-react']
                     }
                 }
             },
             {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
             },
             {
                 test:/\.(png|jpg|gif)$/,
                 use: [
                     {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                     }
                 ]
             }, 
             {
                 test: /\.(woff|woff2|svg|ttf|eot)$/,
                 use: {
                     loader: 'url-loader',
                     options: {
                         limit: 8192,
                         name: 'resource/[name].[ext]'
                     }
                 }
             }
         ] 
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: './src/index.html'
         }),
         new ExtractTextPlugin("css/[name].css"),
         new webpack.optimize.CommonsChunkPlugin({
             name: 'common',
             filename: 'js/base.js'
         }),
         new webpack.HotModuleReplacementPlugin()
     ]
 }