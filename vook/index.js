// const path = require('path')
module.exports = (opts, ctx) => {
  const { themeConfig } = ctx
  const enableSmoothScroll = !!themeConfig.smoothScroll
  return {
    name: 'vuepress-theme-vook',
    plugins: [
      ['serve'],
      ['smooth-scroll', enableSmoothScroll],
    ],
  }
}
