const path = require('path')
const head = require('./config/head')
const themeConfig = require('./config/themeConfig')
module.exports = {
  base: '/',
  title: 'vuepress-theme-vook',
  description: 'Write your book by vuepress',
  head,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Writing life',
      description: 'A book is a dream that you hold in your hand',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '书写人生',
      description: '书是您手中的梦想',
    },
  },
  evergreen: true,
  theme: path.resolve(__dirname, '../../vook'),
  themeConfig,
  host: 'localhost',
  port: 2234,
  dest: 'public',
  extraWatchFiles: [
    '/docs/.vuepress/config.js',
  ],
}
