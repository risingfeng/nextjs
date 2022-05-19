import App from 'next/app'
import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
class MyApp extends App {
  static async getInitialProps(ctx) {
    if (!ctx.ctx.req) {
      window.location.reload()
    }
    const { Component } = ctx
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps}></Component>
      </>
    )
  }
}

export default MyApp