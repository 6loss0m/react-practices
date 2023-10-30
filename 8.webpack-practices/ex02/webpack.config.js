const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve('./src/index.js'),
    output:{
        // build할때만 사용
        path: path.resolve('../backend/src/main/resources/'),
        filename: 'assets/js/bundle.js'
    }
}