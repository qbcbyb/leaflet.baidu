import buble from 'rollup-plugin-buble'

const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  plugins: [buble()],
  external: ['leaflet'],
  output: [
    {
      format: 'umd',
      name: pkg.name,
      file: pkg.main
    }
  ]
}
