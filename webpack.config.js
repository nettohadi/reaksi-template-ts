const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    context: __dirname,
    entry: './src/index.tsx',
    output : {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js',
        publicPath: "/public/"
    },
    devServer: {
        port: 3334,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: "/",
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
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: devMode ? '/public/images/' : '/images/',
                            outputPath: 'images',
                        },
                    },
                ],
            },

        ]
    },
    resolve: {
        extensions: ['.js','.ts', '.tsx']
    },
    plugins: [new htmlWebpackPlugin({
        filename: "index.html",
        hash: true,
        publicPath:  '/',
        template: './html_template/index.html'
    })],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true,
                },
                extractComments: false,
            }),
        ],
    },
};