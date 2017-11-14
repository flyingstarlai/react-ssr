/**
 * Created by flyin on 2017/11/14.
 */
const path = require('path');

module.exports = {
    // inform webpack
    target: 'node',
    // tell webpack the root
    entry: './src/index.js',
    // tell webpack output build
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    //tell webpack to run babel
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }

};