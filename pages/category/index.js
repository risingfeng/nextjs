import React, { Component } from "react"
import Layout from "../../components/layout/index"
import seo from "../../utils/seo"

import { categoryAll } from '../../config/constant'

import styles from './index.module.css'


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static async getInitialProps({ router }) {
    const seoConfig = seo.getSeoConfigZK()
    const categoryCurrent = [Number(router.query.categoryId)]
    return {
      seoConfig,
      categoryCurrent,
    }
  }

  componentDidMount() {
  }
  render() {
    const {
      seoConfig,
      categoryCurrent,
    } = this.props
    console.log('this.props======Category==', this.props)
    return (
      <Layout
        seoConfig={seoConfig}
        categoryCurrent={categoryCurrent}
      >
        <div style={{ flex: 1 }}>
            Category
        </div>
      </Layout>
    );
  }
}

export default Category

