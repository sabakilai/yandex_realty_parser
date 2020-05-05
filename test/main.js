const cheerio = require("cheerio");
const { fetch } = require("./scrappers/index.js");

const URL = "https://parabola.io/";
const YANDEX_REALTY_URL = "http://realty.yandex.ru/moskva/snyat/kvartira/odnokomnatnaya/?renovation=DESIGNER_RENOVATION&areaMax=50&priceMin=40000";


fetch(
    YANDEX_REALTY_URL,
  error => {
    console.log(error);
  },
  html => {
      console.log(html)
    const $ = cheerio.load(html);
    const title = $("title").text();

    console.log(title);
  }
);