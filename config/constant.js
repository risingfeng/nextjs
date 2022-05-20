// const dev = process.env.NODE_ENV === 'dev'

const MOCKURL = 'http://localhost:3000/api'
const REMOTEURL = '' // 测试地址或者联调地址
const PRODURL = '' // 线上地址 

const BASEURLS = {
    dev: MOCKURL,
    remote: REMOTEURL,
    prod: PRODURL,
}

const NAV_LIST = [
    {
        categoryId: 1,
        categoryName: '考试流程',
    },
    {
        categoryId: 2,
        categoryName: '毕业申请',
    },
    {
        categoryId: 3,
        categoryName: '免费资料',
        showSubMenu: true,
        nodeList: [
            {
                id: 31,
                categoryId: 3,
                name: '免费资料1',
            },
            {
                id: 32,
                categoryId: 3,
                name: '免费资料2',
            },
        ],
    },
]



module.exports = {
    NAV_LIST,
    BASEURLS,
}