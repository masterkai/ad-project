const path = require('path');

const webpackBaseConfig = {
    entry: path.join(__dirname, '../src/index.jsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[fullness:4].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.js[x]$/,
                use: 'babel-loader',
            },
            {
                test: /\.ts[x]$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sc|c)ss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};

module.exports = webpackBaseConfig;
