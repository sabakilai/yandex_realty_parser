const request = require('request');

const HEADERS= {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
}
const YANDEX_REALTY_URL = "http://realty.yandex.ru/moskva/snyat/kvartira/odnokomnatnaya/?renovation=DESIGNER_RENOVATION&areaMax=50&priceMin=40000";

const options = {
  method: "GET", 
	jar: true, 
  host: YANDEX_REALTY_URL,
  headers: HEADERS
};


request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});