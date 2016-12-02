module.exports = {
    bundle: {
        app: {
            scripts: [
                './src/js/zigbang_detail.js',
            ],
            styles: [
                './src/sprite/sprite.css',
                './src/css/style.css'
            ]
        },
        vendor: {
            scripts: './src/vendor/polymer.min.js'
        }
    }
};