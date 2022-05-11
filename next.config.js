const withCss = require("@zeit/next-css")
const withLess = require('@zeit/next-less')

if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => { }
}

module.exports = withLess(withCss({
  lessLoaderOptions: {
    javascriptEnabled: true,
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  distDir: 'build',
  // webpack: (config, { dev }) => {
  //     config.module.rules.push(
  //         {
  //           test: /\.(png|jpg|svg|eot|otf|ttf|woff|gif|woff2)$/,
  //           use: {
  //             loader: "url-loader?limit=8024",
  //             options: {
  //               name: "[name].[ext]"
  //             }
  //           }
  //         },
  //         {
  //             test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
  //             loader: require.resolve('file-loader'),
  //             options: {
  //                 name: '/static/media/[name].[hash:8].[ext]'
  //             }
  //         }
  //     )
  //     // config.plugins.push(new CleanWebpackPlugin())
  //     return config
  // }
}))
