const path = require("path");
// const { find } = require("lodash");
// const argv = require("yargs").argv;
// const CompressionPlugin = require("compression-webpack-plugin");
// const webpack = require("webpack");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  // .BundleAnalyzerPlugin;
// const { env } = argv;

const config = {
  // configureWebpack: config => {
  //   return {
  //     plugins: [
  //       // Ignore all locale files of moment.js
  //       // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  //       // 依赖大小分析工具
  //       // new BundleAnalyzerPlugin(),
  //       new CompressionPlugin({
  //         test: /\.js$|\.html$|.\css/, //匹配文件名
  //         threshold: 10240, //对超过10k的数据压缩
  //         deleteOriginalAssets: false //不删除源文件
  //       })
  //     ]
  //   };
  // },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // 开启 CSS source maps?
  css: {
    sourceMap: false,
    loaderOptions: {
      less: {
        modifyVars: {
          // 主题配置颜色
          // "primary-color": "#2b85e4"
          // "primary-color": "#1976D2",
          // "body-background": "#131722",
          // "component-background": "#131722",
          // "border-color-base": "#212738",
          // "text-color": "#c5cbce"
        },
        javascriptEnabled: true
      }
    }
  },
  
};
module.exports = config;