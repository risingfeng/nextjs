// import Head from 'next/head'
// import Image from 'next/image'
import React from 'react'
import { Button } from "antd"
import scss from './index.module.scss';
export default function Home() {
  return (
    <Button>
      Home Page
      <span style={{ color: scss.primaryColor }}>red</span>
    </Button>
  )
}
