const path = require('path')
module.exports = (opts, ctx) => {
  return {
    name: 'vuepress-theme-vook',
    plugins: [
      ['vuepress-plugin-serve'],
    ],
    enhanceAppFiles: [
      path.resolve(__dirname, 'enhanceApp.js'),
    ],
  }
}
