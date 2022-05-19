import React from "react"
import Head from "next/head"

function PageHead(props) {
    const { title = '', keywords = '', description = '' } = props.seoConfig || {}
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
        </Head>
    )
}

export default PageHead
