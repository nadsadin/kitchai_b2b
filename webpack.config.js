const autoprefixer = require('autoprefixer');
module.exports = [{
    entry: {
	    style: './css/style.scss',
        product: './css/product.scss'
    },
    output: {
        // This is necessary for webpack to compile
        // But we never use style-bundle.js
        filename: './js/[name]-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './css/[name].css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
            }
        ]
    },
}];
