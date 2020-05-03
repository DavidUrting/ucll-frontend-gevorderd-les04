module.exports = {
    output: {
        filename: '../wwwroot/main.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};