const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const dist = path.join(__dirname, 'dist');

module.exports = {
    mode,
    target: 'node',
    devtool: "source-map",
    entry: "./src/index.ts",
    stats: "verbose",
    plugins: [
        new CleanWebpackPlugin(dist, {}),
    ],
    output: {
        path: dist,
        filename: "fetch-utils.js",
        library: 'fetch-utils',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
        alias: {
            src: path.resolve(__dirname, 'src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    externals: [
        nodeExternals(),
        {
            commonjs: 'lodash/merge',
            commonjs2: 'lodash/merge',
            amd: 'lodash/merge'
        }
    ]
};
