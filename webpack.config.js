const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/ 
            }
        ]
    },
    watch: true,
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}