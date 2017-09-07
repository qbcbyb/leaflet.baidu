import * as L from 'leaflet'

const urls = {
  Normal: {
    Map: 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl'
  },
  Satellite: {
    Map: 'http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
    Road: 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl'
  },
  subdomains: '0123456789'
}

const attribution = '© 2017 Baidu - GS(2015)2650号 - Data ©'

export default L.TileLayer.extend({
  options: {
    minZoom: 3,
    maxZoom: 19
  },

  initialize: function (type, options) {
    type = type || 'Normal.Map'
    const parts = type.split('.')
    const mapName = parts[0]
    const mapType = parts[1]
    const url = urls[mapName][mapType]
    options = options || {}
    options.subdomains = urls.subdomains
    options.attribution = options.attribution || attribution
    L.TileLayer.prototype.initialize.call(this, url, options)
  },

  getTileUrl: function (coords) {
    const offset = Math.pow(2, coords.z - 1)
    const x = coords.x - offset
    const y = offset - coords.y - 1
    const baiduCoords = L.point(x, y)
    baiduCoords.z = coords.z
    return L.TileLayer.prototype.getTileUrl.call(this, baiduCoords)
  }
})
