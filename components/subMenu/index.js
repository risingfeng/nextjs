import React, { Component, useState } from "react"
import { Menu, Dropdown, Space } from 'antd'
import { DownOutlined, SmileOutlined } from '@ant-design/icons'

import ArLink from '../arLink/index'

import styles from '../navigatorBar/index.module.css'



const SubMenu = ({
    item,
    children,
    categoryId,
    categoryCurrent,
    ...props
}) => {
    const itemFormat = item.nodeList.map(i => {
        i.label = (
            <ArLink
                    categoryId={i.categoryId}
                    className={styles[`navItem${categoryCurrent && categoryCurrent[0] && +categoryCurrent[0] === +item.categoryId ? ' active' : ''}`]}
                >
                    {i.name}
            </ArLink>
        )
        return i
    })
    const menu = (
        <Menu
          items={itemFormat}
        />
    )
    return (
        <Dropdown overlay={menu}>
            <a onClick={e => e.preventDefault()}>
                <Space>
                    <div
                        className={styles[`navItem${categoryCurrent && categoryCurrent[0] && +categoryCurrent[0] === +item.categoryId ? ' active' : ''}`]}
                    >
                        {item.categoryName}
                    </div>
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
};

export default SubMenu