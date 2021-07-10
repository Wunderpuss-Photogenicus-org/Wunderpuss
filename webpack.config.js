const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
      },
      mode: 'development',
      module:{
        rules: [
            { 
            test: /\.jsx?/,
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