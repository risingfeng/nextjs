const defaultConfig = {
  title: '【尚德机构】自考，MBA，注册会计师，教师资格证，人力资源师培训-新锐的互联网大学',
  keywords: '尚德,尚德机构官网,尚德机构怎么样,尚德教育,尚德培训',
  description: '尚德机构，专注于学历教育，职业教育的互联网教育公司。包含了自考本科、自考专科、高自考、专升本、财会、注册会计师（CPA）、注册管理会计师（CMA）、MBA、人力资源师、教师资格证、证券基金从业资格证等业务。截至目前,尚德教育已经助力8w人通过考试,通过率高达98%。-尚德机构',
}

const seoMap = {
  '考试动态': {
    title: '【自考考试动态_自考考试资讯_自考考试信息】-尚德机构',
    keywords: '自考政策大全,自考最新资讯',
    description: '尚德机构，是最新锐的互联网大学。尚德机构考试动态栏目，为您提供自考考试动态、自考考试资讯、自考考试信息，最权威的自考政策大全、自考最新资讯相关问题解答，更多考试动态信息介绍请关注尚德机构官网。-尚德机构',
  },
  '专业选择': {
    title: '【$province自考专业选择_$province自考本科专业_$province自考专科专业】-尚德机构',
    keywords: '自考专业科目一览表,自学考试有哪些专业',
    description: '尚德机构，是最新锐的互联网大学。尚德机构专业选择栏目，为您提供$province自考专业选择、$province自考本科专业、$province自考专科专业信息，最权威的自考专业科目一览表、自学考试有哪些专业相关问题解答，更多专业选择信息介绍请关注尚德机构官网。-尚德机构',
  },
}

const getSeoConfig = (categoryName, province) => {
  const config = seoMap[categoryName]
  if (config) {
    let {
      title,
      keywords,
      description,
    } = config
    if (province) {
      title = title.replace(/\$province/g, province)
      keywords = keywords.replace(/\$province/g, province)
      description = description.replace(/\$province/g, province)
    }
    const year = new Date().getFullYear()
    title = title.replace(/\$year/g, year)
    keywords = keywords.replace(/\$year/g, year)
    description = description.replace(/\$year/g, year)
    return {
      title,
      keywords,
      description,
    }
  }
  return defaultConfig
}

const getSeoConfigZK = () => {
  return {
    title: 'zikao',
    keywords: 'zikao',
    description: 'zikao',
  }
}

module.exports = {
  getSeoConfig,
  getSeoConfigZK,
}