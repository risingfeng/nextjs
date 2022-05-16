// import Head from 'next/head'
// import Image from 'next/image'
import React from 'react'
import { Button } from 'antd'
import Link from 'next/link'

import scss from './index.module.scss'


export default function Home() {
  return (
    <div>
       <ul>
          <li><Link href='/a'><a>a</a></Link></li>
          <li><Link href='/b'><a>b</a></Link></li>
      </ul>
      <Button>
          Home Page
      </Button>
      {/* <span style={{ color: scss.primaryColor }}>green</span> */}
      {/* <p style={{ color: 'red' }}>hi there</p> */}

    </div>
  )
}
