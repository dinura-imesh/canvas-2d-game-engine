const path = require('path');

module.exports = {
    entry: './sample-game/game.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    devtool: 'inline-source-map'
};


//npx webpack --config webpack.config.js
