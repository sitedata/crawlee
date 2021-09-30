module.exports = {
    comments: false,
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: '10.17.0',
            },
        }],
    ],
    plugins: ['@babel/plugin-syntax-class-properties'],
};
