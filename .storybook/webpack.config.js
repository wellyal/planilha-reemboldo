const paths = require('../config/paths')
const postcssLoaders = require('../config/postcss-loaders')

module.exports = storybookBaseConfig => {
  /* eslint-disable no-param-reassign */
  storybookBaseConfig.resolve.root = paths.appSrc
  storybookBaseConfig.module.loaders.push({
    exclude: [
      /\.html$/,
      /\.(js|jsx)$/,
      /\.css$/,
      /\.json$/,
      /\.svgz?$/
    ],
    loader: 'url',
    query: {
      limit: 10000,
      name: 'static/media/[name].[hash:8].[ext]'
    }
  })
  storybookBaseConfig.module.loaders.push({
    test: /\.svgz$/,
    loader: `svg-sprite?${JSON.stringify({
      name: '[name]_[hash]',
      prefixize: true
    })}`
  })
  storybookBaseConfig.module.loaders.push({
    test: /\.svg$/,
    loader: 'file',
    query: {
      name: 'static/media/[name].[hash:8].[ext]'
    }
  })
  storybookBaseConfig.module.loaders.push({
    test: /\.css$/,
    loader: 'style!css?importLoaders=1!postcss'
  })
  storybookBaseConfig.module.loaders.push({
    test: /\.json$/,
    loader: 'json'
  })
  storybookBaseConfig.postcss = () => postcssLoaders

  return storybookBaseConfig
  /* eslint-enable */
}
