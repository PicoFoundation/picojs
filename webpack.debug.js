const path = require('path');

module.exports = {
    entry: {
        picojs_api: './src/picojs-api.ts',
        picojs_jsonrpc: './src/rpc-web.ts',
        picojs_jssig: './src/picojs-jssig.ts',
        picojs_numeric: './src/picojs-numeric.ts',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.web.json'
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: x => x.chunk.name.replace('_', '-') + '.js',
        library: '[name]',
        path: path.resolve(__dirname, 'dist-web'),
    }
};
