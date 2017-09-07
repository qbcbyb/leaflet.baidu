import * as L from 'leaflet'
import BaiduMercator from './projection'

export default L.extend({}, L.CRS, {
  code: 'BAIDU',

  projection: BaiduMercator,

  // TODO: distance
  // distance: (latlng1, latlng2) => {
  //   return 0
  // },

  scale: zoom => 256 * Math.pow(2, zoom),

  zoom: scale => Math.log(scale / 256) / Math.LN2,

  transformation: (() => {
    const zoom = 18
    const scale = 1 / (256 * Math.pow(2, zoom))
    return new L.Transformation(scale, 0.5, -scale, 0.5)
  })()
})
