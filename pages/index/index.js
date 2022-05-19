import React, { Component } from "react"
import Layout from "../../components/layout/index"
import IndexApi from "../../networking/service/index"
import seo from "../../utils/seo"

import styles from './index.module.css'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static async getInitialProps({ req }) {
    console.log('req======', req)
    const seoConfig = seo.getSeoConfigZK()

    return {
      seoConfig,
    }
  }

  componentDidMount() {
  }
  render() {
    const {
      seoConfig,
    } = this.props

    return (
      <Layout
        seoConfig={seoConfig}
      >
        <div style={{ flex: 1 }}>
            test
        </div>
      </Layout>
    );
  }
}

export default Index

