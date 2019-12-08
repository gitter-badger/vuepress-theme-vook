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
      title: 'vuepress-theme-vook',
      description: 'Write your book by vuepress',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress 主题 - Vook',
      description: '书写属于你自己的人生',
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
