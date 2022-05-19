const path = require('path')
const { BASEURLS } = require('./config/constant')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'pages')],
    },
    async rewrites() {
        console.log('process.env.APP_ENV', process.env.APP_ENV);
        return [
            {
                source: '/api/zikao/:path*',
                destination: process.env.APP_ENV === 'dev' ? `${BASEURLS.DEV}/api/zikao/:path*` : `${BASEURLS.PROD}/zikao/:path*`,
            },
        ];
    },
};
