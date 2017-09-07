import * as L from 'leaflet'
import BaiduMercator from './projection'
import BaiduCRS from './crs'
import BaiduLayer from './layer'

L.Projection.BaiduMercator = BaiduMercator

L.CRS.Baidu = BaiduCRS

L.TileLayer.BaiduLayer = BaiduLayer

L.tileLayer.baiduLayer = (type, options) => {
  return new BaiduLayer(type, options)
}

export default L
