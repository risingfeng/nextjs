import React, {useState}  from 'react'

import Link from 'next/link'
import Router, { withRouter } from 'next/router'

import Button from '../components/button'


const Test = ({ router }) => {
    const [color, setColor] = useState('red')
    // const changeColor = () => {
    //     setColor(color === 'blue' ? 'red' : 'blue')
    // }
    return (
        <React.Fragment>
            <h3>测试</h3>
            <p>添加路由跳转参数{router.query.id}</p>
            <Button>按钮自定义</Button>
            <div><Link href="/">to Home（Link方式）</Link></div>
            <button onClick={()=>{Router.push('/')}}>去Home页面（router方式）</button>
            {/* <button onClick={changeColor}>改变字体颜色</button> */}
        </React.Fragment>
    )
}

export default withRouter(Test)

