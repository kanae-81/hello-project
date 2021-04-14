const cheerio = require("cheerio");
const request = require("request");
const url = "http://www.helloproject.com/artist/";

request(url, (e, response, body) => {
  if (e) {
    console.error(e);
  }
  try {
    const $ = cheerio.load(body); //bodyの読み込み
    const titles_arr = [];
    $(".artist_listbox a").each((i, elem) => {
      //'.artist_listbox'クラス内のspanタグ内要素に対して処理実行
      titles_arr[i] = {
        name: $(elem).next().text(),
        menberUrl: `${url}${elem.attribs.href}/profile/`,
      }; //配列にタイトルを挿入していく
    });
    console.log(titles_arr);
  } catch (e) {
    console.error(e);
  }
});
