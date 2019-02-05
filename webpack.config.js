
module.exports = {
    // mode: "development",
    entry: "./src/app.js",
    output: {
        path: __dirname + "/public"
    },
    devServer: {
        contentBase: __dirname + "/public",
        port: 3000
    },
    module: {
        rules : [
            {
                loader: "babel-loader",
                test: /\.js/
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                // enabled: false,
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ]

            }
        ]
    }
}