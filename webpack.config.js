const path = require('path')

module.exports = {
    entry: './cinema/frontend/src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: "style-loader",
                        // Allows lazy styles import
                        options: {
                            injectType: 'lazyStyleTag'
                        }
                    },
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname + '/frontend/src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json']
    }
}