const path = require('path')
// const { BASEURLS } = require('./config/constant')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'pages')],
    },
};
