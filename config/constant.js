const dev = process.env.APP_ENV === 'dev'

const BASEURL = 'http://192.168.1.5:8190' // 线上地址
const MOCKURL = 'http://localhost:3000'

const BASEURLS = {
    DEV: MOCKURL,
    PROD: BASEURL,
}

const categoryAll = [
    {
        categoryId: 1,
        categoryName: '考试流程',
    },
    {
        categoryId: 2,
        categoryName: '毕业申请',
    },
]



module.exports = {
    categoryAll,
    BASEURLS,
}