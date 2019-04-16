// module.exports = {
// 	baseUrl: process.env.NODE_ENV === 'production'
// 		? '/' // asset url prefix in production mode
// 		: '/', // asset url prefix in development mode
// 	outputDir: '/Users/cpuzzuol/mampstack/apache2/htdocs/ucrisko', // running 'yarn build' will send production code here
// }
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [ '/'],
          {
            // options
          }
        ),
      ]
    }
  }
}
