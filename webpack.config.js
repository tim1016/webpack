
module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: __dirname + "/public"
    },
    devServer: {
        contentBase: __dirname + "/public",
        port: 3000
    }
}