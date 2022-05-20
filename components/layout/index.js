import React, { useState } from "react"
import Head from "../head"
import NavigatorBar from "../navigatorBar"

import styles from './index.module.css'

export default function Layout({
    children,
    seoConfig,
    categoryCurrent = [], // 当前位置
    ...props
}) {
    return (
        <div className={styles['layoutWrap']}>
        <Head seoConfig={seoConfig} />
            <div>
            <NavigatorBar
                // userInfo={userInfo}
                categoryCurrent={categoryCurrent}
            />
            </div>
            {children}
        </div>
    )
}
