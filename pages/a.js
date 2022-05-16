import React from 'react'
import { Carousel } from 'antd'

import Image from 'next/image'

import styles from './a.module.css'
import Img1 from '../static/images/1.png'
import Img2 from '../static/images/2.png'
import Img3 from '../static/images/3.png'


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
}

function onChange(a, b, c) {
    console.log(a, b, c);
}

export default () => (
    <div>
        <div className={styles.font}>header</div>
        <Carousel afterChange={onChange} autoplay={true}>
            <div className={styles.div1}></div>
            <div className={styles.div}>
                <Image
                    src={Img2}
                    className={styles.img}
                    // height={260}
                    // layout={`responsive`}
                    // objectFit={`contain`}
                />
            </div>
            <div className={styles.div}>
                <Image
                    src={Img3}
                    className={styles.img}
                    // height={260}
                    // layout="fill" // required
                    // objectFit="cover" 
                    // layout={`responsive`}
                    // objectFit={`cover`}
                />
            </div>
        </Carousel>
        <div className={styles.font}>footer</div>
    </div>
)
