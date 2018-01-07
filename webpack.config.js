const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
            }
        ]
    }
};