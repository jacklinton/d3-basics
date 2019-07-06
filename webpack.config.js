const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    module: {
        rules: [
            // {
            //   test: /\.js$/,
            //   loader: 'eslint-loader',
            //   exclude: /node_modules/,
            // },
            // {
            //     test: /\.ts?$/, // Another convention is to use the .es6 filetype, but you then
            //     // have to supply that explicitly in import statements, which isn't cool.
            //     exclude: [/(node_modules|bower_components)/],
            //     loader: 'ts-loader',
            //     // loaders: ['babel-loader', 'ts-loader'],
            // },
            {
                test: /\.js?$/, // Another convention is to use the .es6 filetype, but you then
                // have to supply that explicitly in import statements, which isn't cool.
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            // This nifty bit of magic right here allows us to load entire JSON files
            // synchronously using `require`, just like in NodeJS.
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            // This allows you to `require` CSS files.
            // We be in JavaScript land here, baby! No <style> tags for us!
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};
