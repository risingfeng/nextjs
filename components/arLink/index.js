import React, { Component, useState } from "react"
import Link from 'next/link'

const CATEGORYMAP = {
    15: 'school',
}

const ArLink = ({
  children,
  categoryId, //  一级项目
  tagId = 0, // 二级项目
  provinceId = 0, // 省份id
  page = 1,
  className,
  target,
  ...props
}) => {
  const categoryType = [15].includes(categoryId) ? CATEGORYMAP[categoryId] : 'category'
  const href = props.href ? props.href : `/${categoryType}/${categoryId}-${tagId}-${provinceId}-${page}`

  return (
    <Link 
      {...props}
      href={`${href}`}
    >
      <a className={className} target={target}>{children}</a>
    </Link>
  )
};

export default ArLink