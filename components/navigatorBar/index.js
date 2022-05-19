import React, { Component, useState } from "react"
import ArLink from '../arLink/index'

import { categoryAll }  from '../../config/constant.js'

import styles from './index.module.css'

function Nav(props) {
    const renderNav = () => {
        const {
            categoryCurrent = [],
        } = props

        console.log('categoryCurrent======', categoryCurrent)

        const navlistJSX = categoryAll.map((item) => (
            <li key={item.categoryId}>
                <ArLink
                    categoryId={item.categoryId}
                    className={styles[`navItem${categoryCurrent && categoryCurrent[0] && +categoryCurrent[0] === +item.categoryId ? ' active' : ''}`]}
                >
                    {item.categoryName}
                </ArLink>
            </li>
        ))

        return (
            <ul className={styles.navList}>
                <li key={-1}>
                    <ArLink
                        href={'/'}
                        className={styles[`navItem${categoryCurrent && categoryCurrent.length ? '' : ' active'}`]}
                    >首页
                    </ArLink>
                </li>
                {navlistJSX}
            </ul>
        )
    }
    return (
        <div className={styles.navigatorWrap}>
        <div className={styles['navigatorWrap-top']}>
            <div className={styles['navigatorCont']}>
            <div className={styles['g_left']}>
            </div>
            <div className={styles['g_right']}>
            </div>
            </div>
        </div>
        <div className={styles['navigatorCont-nav']}>
            { renderNav() }
        </div>
      </div>
    )
}

export default Nav
