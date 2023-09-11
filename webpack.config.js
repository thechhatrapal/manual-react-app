const path = require('path')

// without dev server
// module.exports = {
//     entry:'./app/app.js',
//     output: {
//         filename: 'myBundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     watch:true,
//  }

// with dev server


// devserver does not directly created  the mybundle.js file  in harddrive but it loades when you run localhost:8080/myBundle.js
// it reloads the browser when you change any code and save it.
// by adding hot module it does not reload but it change it in the memory

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'myBundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8080,
        static: {
            directory: path.join(__dirname, "dist")

        },
        hot: true

    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }, {
                test: [/\.js$/, /\.jsx$/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                ],

            }],
    }
}