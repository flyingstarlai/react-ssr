/**
 * Created by flyin on 2017/11/14.
 */
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // inform webpack
    target: 'node',
    // tell webpack the root
    entry: './src/index.js',
    // tell webpack output build
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);