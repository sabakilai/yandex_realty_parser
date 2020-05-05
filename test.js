// const casper = require('casper').create();
const YANDEX_REALTY_URL = "http://realty.yandex.ru/moskva/snyat/kvartira/odnokomnatnaya/?renovation=DESIGNER_RENOVATION&areaMax=50&priceMin=40000";
const HEADERS= {
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
  }
// casper.start(YANDEX_REALTY_URL);
// var links = [];
// function getLinks() {
// // Scrape the links from top-right nav of the website
//     var links = document.querySelectorAll('.Link__click-area');
//     return Array.prototype.map.call(links, function (e) {
//         return e.parentNode.href
//     });
// }


// casper.then(function () {
//     links = this.evaluate(getLinks);
//     console.log(links)
//     for(var i in links) {
//         console.log(links[i]);
//     }
// });

// casper.run()


var casper = require('casper').create();

casper.start().then(function() {
    this.open(YANDEX_REALTY_URL, {
        method: 'get',
        headers: HEADERS
    });
});

casper.run(function() {
    console.log(this.getPageContent())
    //require('utils').dump(JSON.parse(this.getPageContent()));
    this.exit();
});