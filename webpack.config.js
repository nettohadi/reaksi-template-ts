const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.tsx',
    output : {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/reaksi-template.js',
        publicPath: "/public/",
    },
    devServer: {
        port: 3334,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public'),
        filename: 'reaksi-template.js',
        hot: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            }

        ]
    },
    resolve: {
        extensions: ['.js','.ts', '.tsx']
    },
    plugins: [new htmlWebpackPlugin({
        filename: "index.html",
        hash: true,
        publicPath: '/public/',
        template: './html_template/index.html'
    })],
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
};