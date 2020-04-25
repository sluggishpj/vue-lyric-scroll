module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-lyric-scroll/' : '/',
  productionSourceMap: false,
  css: {
    extract: false
  }
}
