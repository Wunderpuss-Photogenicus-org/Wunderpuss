const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
            '/**': {
                target: 'http://localhost:3000/',
                secure: false,
            },
        }
    },
    module:{
        rules: [
            { 
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
                },
            },
        ]
    } 
};