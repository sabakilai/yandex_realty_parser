const Xray = require('x-ray')
const x = Xray()

const YANDEX_REALTY_URL = "http://realty.yandex.ru/moskva/snyat/kvartira/odnokomnatnaya/?renovation=DESIGNER_RENOVATION&areaMax=50&priceMin=40000";
 
x(YANDEX_REALTY_URL, '.OffersSerpItem', [
  {
    title: '.OffersSerpItem__title',
    link: '.Link@href'
  }
])(function(err, obj) {
    console.log(err)
    console.log(obj)
  })