/* eslint-disable @typescript-eslint/no-var-requires */
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.module
      .rule("eslint")
      .exclude.add(/sdk-core/)
      .add(/sdk-vue/)
      .end();
  },
  // configureWebpack: (config) => {
  //   config.plugins.push(new BundleAnalyzerPlugin());
  // },
};
