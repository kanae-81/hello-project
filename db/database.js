const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('helloProject');
const table = `
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    kana TEXT NOT NULL,
    nick_name TEXT,
    age INTEGER,
    birth_day TEXT,
    birth_place TEXT,
    group_name TEXT,
    color TEXT,
    date_of_join TEXT,
    date_of_graduation TEXT,
    blog TEXT
`
const data = [
{"name":"譜久村聖","kana":"ふくむら みずき","nick_name":"ふくちゃん","age":"24","birth_day":"1996/10/30","birth_place":"東京都","group_name":"モーニング娘。","color":"ホットピンク","date_of_join":"2011/01/02","date_of_graduation":"","blog":""}
,
{"name":"生田衣梨奈","kana":"いくた えりな","nick_name":"えりぽん","age":"23","birth_day":"1997/07/07","birth_place":"福岡県","group_name":"モーニング娘。","color":"黄緑","date_of_join":"2011/01/02","date_of_graduation":"","blog":""}
,
{"name":"石田亜佑美","kana":"いしだ あゆみ","nick_name":"あゆみん","age":"24","birth_day":"1997/01/07","birth_place":"宮城県","group_name":"モーニング娘。","color":"ロイヤルブルー","date_of_join":"2011/09/29","date_of_graduation":"","blog":""}
,
{"name":"佐藤優樹","kana":"さとう まさき","nick_name":"まーちゃん","age":"21","birth_day":"1999/05/07","birth_place":"北海道","group_name":"モーニング娘。","color":"エメラルドグリーン","date_of_join":"2011/09/29","date_of_graduation":"","blog":""}
,
{"name":"小田さくら","kana":"おだ さくら","nick_name":"おださく","age":"22","birth_day":"1999/03/12","birth_place":"神奈川県","group_name":"モーニング娘。","color":"ラベンダー","date_of_join":"2012/09/14","date_of_graduation":"","blog":""}
,
{"name":"野中美希","kana":"のなか みき","nick_name":"ちぇる","age":"21","birth_day":"1999/10/07","birth_place":"静岡県","group_name":"モーニング娘。","color":"パープル","date_of_join":"2014/09/30","date_of_graduation":"","blog":""}
,
{"name":"牧野真莉愛","kana":"まきの まりあ","nick_name":"まりあ","age":"20","birth_day":"2001/02/02","birth_place":"愛知県","group_name":"モーニング娘。","color":"ピンク","date_of_join":"2014/09/30","date_of_graduation":"","blog":""}
,
{"name":"羽賀朱音","kana":"はが あかね","nick_name":"ねちん","age":"19","birth_day":"2002/03/07","birth_place":"長野県","group_name":"モーニング娘。","color":"オレンジ","date_of_join":"2014/09/30","date_of_graduation":"","blog":""}
,
{"name":"加賀楓","kana":"かが かえで","nick_name":"かえでぃー","age":"21","birth_day":"1999/11/30","birth_place":"東京都","group_name":"モーニング娘。","color":"イタリアンレッド","date_of_join":"2016/12/12","date_of_graduation":"","blog":""}
,
{"name":"横山玲奈","kana":"よこやま れいな","nick_name":"よこやん","age":"20","birth_day":"2001/02/22","birth_place":"埼玉県","group_name":"モーニング娘。","color":"ゴールドイエロー","date_of_join":"2016/12/12","date_of_graduation":"","blog":""}
,
{"name":"森戸知沙希","kana":"もりと ちさき","nick_name":"ちぃちゃん","age":"21","birth_day":"2000/02/19","birth_place":"栃木県","group_name":"モーニング娘。","color":"白","date_of_join":"2017/06/26","date_of_graduation":"","blog":""}
,
{"name":"北川莉央","kana":"きたがわ りお","nick_name":"おんちゃん","age":"16","birth_day":"2004/03/16","birth_place":"東京都","group_name":"モーニング娘。","color":"シーブルー","date_of_join":"2019/06/22","date_of_graduation":"","blog":""}
,
{"name":"岡村ほまれ","kana":"おかむら ほまれ","nick_name":"ほまたん","age":"15","birth_day":"2005/05/09","birth_place":"東京都","group_name":"モーニング娘。","color":"デイジー","date_of_join":"2019/06/22","date_of_graduation":"","blog":""}
,
{"name":"山﨑愛生","kana":"やまざき めい","nick_name":"パンダさん","age":"15","birth_day":"2005/06/28","birth_place":"北海道","group_name":"モーニング娘。","color":"ブライトグリーン","date_of_join":"2019/06/22","date_of_graduation":"","blog":""}
,
{"name":"福田明日香","kana":"ふくだ あすか","nick_name":"ふくちゃん","age":"36","birth_day":"1984/12/17","birth_place":"東京都","group_name":"モーニング娘。","color":"","date_of_join":"1997/09/14","date_of_graduation":"1999/04/18","blog":""}
,
{"name":"石黒彩","kana":"いしぐろ あや","nick_name":"あやっぺ","age":"42","birth_day":"1978/05/12","birth_place":"北海道","group_name":"モーニング娘。","color":"","date_of_join":"1997/09/14","date_of_graduation":"2000/01/07","blog":""}
,
{"name":"市井紗耶香","kana":"いちい さやか","nick_name":"さやりん","age":"37","birth_day":"1983/12/31","birth_place":"千葉県","group_name":"モーニング娘。","color":"スカイブルー","date_of_join":"1998/05/03","date_of_graduation":"2000/05/21","blog":""}
,
{"name":"中澤裕子","kana":"なかざわ ゆうこ","nick_name":"ゆうちゃん","age":"47","birth_day":"1973/06/19","birth_place":"京都府","group_name":"モーニング娘。","color":"深緑","date_of_join":"1997/09/14","date_of_graduation":"2001/04/15","blog":""}
,
{"name":"後藤真希","kana":"ごとう まき","nick_name":"ゴマキ","age":"35","birth_day":"1985/09/23","birth_place":"東京都","group_name":"モーニング娘。","color":"オレンジ","date_of_join":"1999/08/22","date_of_graduation":"2002/09/23","blog":""}
,
{"name":"保田圭","kana":"やすだ けい","nick_name":"圭ちゃん","age":"40","birth_day":"1980/12/06","birth_place":"千葉県","group_name":"モーニング娘。","color":"ライトピンク","date_of_join":"1998/05/03","date_of_graduation":"2003/05/05","blog":""}
,
{"name":"安倍なつみ","kana":"あべ なつみ","nick_name":"なっち","age":"39","birth_day":"1981/08/10","birth_place":"北海道","group_name":"モーニング娘。","color":"赤","date_of_join":"1997/09/14","date_of_graduation":"2004/01/25","blog":""}
,
{"name":"辻希美","kana":"つじ のぞみ","nick_name":"辻ちゃん","age":"33","birth_day":"1987/06/17","birth_place":"東京都","group_name":"モーニング娘。","color":"","date_of_join":"2000/04/16","date_of_graduation":"2004/08/01","blog":""}
,
{"name":"加護亜依","kana":"かご あい","nick_name":"あいぼん","age":"33","birth_day":"1988/02/07","birth_place":"奈良県","group_name":"モーニング娘。","color":"","date_of_join":"2000/04/16","date_of_graduation":"2004/08/01","blog":""}
,
{"name":"飯田圭織","kana":"いいだ かおり","nick_name":"ジョンソン","age":"39","birth_day":"1981/08/08","birth_place":"北海道","group_name":"モーニング娘。","color":"紺","date_of_join":"1997/09/14","date_of_graduation":"2005/01/30","blog":""}
,
{"name":"矢口真里","kana":"やぐち まり","nick_name":"やぐっちゃん","age":"38","birth_day":"1983/01/20","birth_place":"神奈川県","group_name":"モーニング娘。","color":"黄","date_of_join":"1998/05/03","date_of_graduation":"2005/04/14","blog":""}
,
{"name":"石川梨華","kana":"いしかわ りか","nick_name":"チャーミー","age":"36","birth_day":"1985/01/19","birth_place":"神奈川県","group_name":"モーニング娘。","color":"ディープピンク","date_of_join":"2000/04/16","date_of_graduation":"2005/05/07","blog":""}
,
{"name":"紺野あさ美","kana":"こんの あさみ","nick_name":"こんこん","age":"33","birth_day":"1987/05/07","birth_place":"北海道","group_name":"モーニング娘。","color":"ピンク","date_of_join":"2001/08/26","date_of_graduation":"2006/07/23","blog":""}
,
{"name":"小川麻琴","kana":"おがわ まこと","nick_name":"","age":"33","birth_day":"1987/10/29","birth_place":"新潟県","group_name":"モーニング娘。","color":"青","date_of_join":"2001/08/26","date_of_graduation":"2006/08/27","blog":""}
,
{"name":"吉澤ひとみ","kana":"よしざわ ひとみ","nick_name":"よっすぃー","age":"35","birth_day":"1985/04/12","birth_place":"埼玉県","group_name":"モーニング娘。","color":"紫","date_of_join":"2000/04/16","date_of_graduation":"2007/05/06","blog":""}
,
{"name":"藤本美貴","kana":"ふじもと みき","nick_name":"ミキティ","age":"35","birth_day":"1985/02/26","birth_place":"北海道","group_name":"モーニング娘。","color":"赤","date_of_join":"2003/01/07","date_of_graduation":"2007/06/01","blog":""}
,
{"name":"久住小春","kana":"くすみ こはる","nick_name":"こはるん","age":"28","birth_day":"1992/07/15","birth_place":"新潟県","group_name":"モーニング娘。","color":"赤","date_of_join":"2005/05/01","date_of_graduation":"2009/12/06","blog":""}
,
{"name":"亀井絵里","kana":"かめい えり","nick_name":"えりりん","age":"32","birth_day":"1988/12/23","birth_place":"東京都","group_name":"モーニング娘。","color":"オレンジ","date_of_join":"2003/01/19","date_of_graduation":"2010/12/15","blog":""}
,
{"name":"ジュンジュン","kana":"じゅんじゅん","nick_name":"じゅんじゅん","age":"33","birth_day":"1988/01/11","birth_place":"中国 湖南省","group_name":"モーニング娘。","color":"青","date_of_join":"2007/03/15","date_of_graduation":"2010/12/15","blog":""}
,
{"name":"リンリン","kana":"りんりん","nick_name":"りんりん","age":"30","birth_day":"1991/03/11","birth_place":"中国 浙江省","group_name":"モーニング娘。","color":"エメラルドグリーン","date_of_join":"2007/03/15","date_of_graduation":"2010/12/15","blog":""}
,
{"name":"高橋愛","kana":"たかはし あい","nick_name":"愛ちゃん","age":"34","birth_day":"1986/09/14","birth_place":"福井県","group_name":"モーニング娘。","color":"黄","date_of_join":"2001/08/26","date_of_graduation":"2011/09/30","blog":""}
,
{"name":"新垣里沙","kana":"にいがき りさ","nick_name":"ガキさん","age":"32","birth_day":"1988/10/20","birth_place":"神奈川県","group_name":"モーニング娘。","color":"黄緑","date_of_join":"2001/08/26","date_of_graduation":"2012/05/18","blog":""}
,
{"name":"光井愛佳","kana":"みつい あいか","nick_name":"みっつぃー","age":"28","birth_day":"1993/01/12","birth_place":"滋賀県","group_name":"モーニング娘。","color":"ラベンダー","date_of_join":"2006/12/10","date_of_graduation":"2012/05/18","blog":""}
,
{"name":"田中れいな","kana":"たなか れいな","nick_name":"れいな","age":"31","birth_day":"1989/11/11","birth_place":"福岡県","group_name":"モーニング娘。","color":"ターコイズブルー","date_of_join":"2003/01/19","date_of_graduation":"2013/05/21","blog":""}
,
{"name":"道重さゆみ","kana":"みちしげ さゆみ","nick_name":"さゆみん","age":"31","birth_day":"1989/07/13","birth_place":"山口県","group_name":"モーニング娘。","color":"ピンク","date_of_join":"2003/01/19","date_of_graduation":"2014/11/26","blog":""}
,
{"name":"鞘師里保","kana":"さやし りほ","nick_name":"りほりほ","age":"22","birth_day":"1998/05/28","birth_place":"広島県","group_name":"モーニング娘。","color":"赤","date_of_join":"2011/01/02","date_of_graduation":"2015/12/31","blog":""}
,
{"name":"鈴木香音","kana":"すずき かのん","nick_name":"ズッキ","age":"22","birth_day":"1998/08/05","birth_place":"愛知県","group_name":"モーニング娘。","color":"緑","date_of_join":"2011/01/02","date_of_graduation":"2016/05/31","blog":""}
,
{"name":"工藤遥","kana":"くどう はるか","nick_name":"くどぅ","age":"21","birth_day":"1999/10/27","birth_place":"埼玉県","group_name":"モーニング娘。","color":"オレンジ","date_of_join":"2011/09/29","date_of_graduation":"2017/12/11","blog":""}
,
{"name":"尾形春水","kana":"おがた はるな","nick_name":"はーちん","age":"22","birth_day":"1999/02/15","birth_place":"大阪府","group_name":"モーニング娘。","color":"シーブルー","date_of_join":"2014/09/30","date_of_graduation":"2018/06/20","blog":""}
,
{"name":"飯窪春菜","kana":"いいくぼ はるな","nick_name":"はるなん","age":"26","birth_day":"1994/11/07","birth_place":"東京都","group_name":"モーニング娘。","color":"ハニー色","date_of_join":"2011/09/29","date_of_graduation":"2018/12/16","blog":""}
,
{"name":"矢島舞美","kana":"やじま まいみ","nick_name":"まいみぃー","age":"29","birth_day":"1992/02/07","birth_place":"埼玉県","group_name":"℃-ute","color":"レッド","date_of_join":"2005/06/11","date_of_graduation":"2017/06/12","blog":""}
,
{"name":"中島早貴","kana":"なかじま さき","nick_name":"なっきぃ","age":"27","birth_day":"1994/02/05","birth_place":"埼玉県","group_name":"℃-ute","color":"スカイブルー","date_of_join":"2005/06/11","date_of_graduation":"2017/06/12","blog":""}
,
{"name":"鈴木愛理","kana":"すずき あいり","nick_name":"お鈴（おすず）","age":"26","birth_day":"1994/04/12","birth_place":"千葉県","group_name":"℃-ute","color":"ライトピンク","date_of_join":"2005/06/11","date_of_graduation":"2017/06/12","blog":""}
,
{"name":"岡井千聖","kana":"おかい ちさと","nick_name":"ちっさー","age":"26","birth_day":"1994/06/21","birth_place":"埼玉県","group_name":"℃-ute","color":"グリーン","date_of_join":"2005/06/11","date_of_graduation":"2017/06/12","blog":""}
,
{"name":"萩原舞","kana":"はぎわら まい","nick_name":"まいまい","age":"25","birth_day":"1996/02/07","birth_place":"埼玉県","group_name":"℃-ute","color":"イエロー","date_of_join":"2005/06/11","date_of_graduation":"2017/06/12","blog":""}
,
{"name":"村上愛","kana":"むらかみ めぐみ","nick_name":"めーぐる","age":"28","birth_day":"1992/06/06","birth_place":"埼玉県","group_name":"℃-ute","color":"スカイブルー","date_of_join":"2005/06/11","date_of_graduation":"2006/10/31","blog":""}
,
{"name":"有原栞菜","kana":"ありはら かんな","nick_name":"アリカン","age":"27","birth_day":"1993/06/15","birth_place":"神奈川県","group_name":"℃-ute","color":"レッド","date_of_join":"2006/01/28","date_of_graduation":"2009/07/09","blog":""}
,
{"name":"梅田えりか","kana":"うめだ えりか","nick_name":"梅さん","age":"29","birth_day":"1991/05/24","birth_place":"神奈川県","group_name":"℃-ute","color":"イエロー","date_of_join":"2005/06/11","date_of_graduation":"2009/10/25","blog":""}
,
{"name":"清水佐紀","kana":"しみず さき","nick_name":"キャプテン","age":"29","birth_day":"1991/11/22","birth_place":"神奈川県","group_name":"Berryz工房","color":"イエロー","date_of_join":"2004/01/14","date_of_graduation":"2015/03/03","blog":""}
,
{"name":"嗣永桃子","kana":"つぐなが ももこ","nick_name":"ももち","age":"29","birth_day":"1992/03/06","birth_place":"千葉県","group_name":"Berryz工房","color":"ライトピンク","date_of_join":"2004/01/14","date_of_graduation":"2015/03/03","blog":""}
,
{"name":"徳永千奈美","kana":"とくなが ちなみ","nick_name":"ちい","age":"28","birth_day":"1992/05/22","birth_place":"神奈川県","group_name":"Berryz工房","color":"オレンジ","date_of_join":"2004/01/14","date_of_graduation":"2015/03/03","blog":""}
,
{"name":"須藤茉麻","kana":"すどう まあさ","nick_name":"まぁちゃん","age":"28","birth_day":"1992/07/03","birth_place":"東京都","group_name":"Berryz工房","color":"ブルー","date_of_join":"2004/01/14","date_of_graduation":"2015/03/03","blog":""}
,
{"name":"夏焼雅","kana":"なつやき みやび","nick_name":"みや","age":"28","birth_day":"1992/08/25","birth_place":"埼玉県","group_name":"Berryz工房","color":"パープル","date_of_join":"2004/01/14","date_of_graduation":"2015/03/03","blog":""}
,
{"name":"熊井友理奈","kana":"くまい ゆりな","nick_name":"熊井ちゃん","age":"27","birth_day":"1993/08/03","birth_place":"神奈川県","group_name":"Berryz工房","color":"グリーン","date_of_join":"2004/01/14","date_of_graduation":"2015/03/03","blog":""}
,
{"name":"菅谷梨沙子","kana":"すがや りさこ","nick_name":"りさこ","age":"26","birth_day":"1994/04/04","birth_place":"神奈川県","group_name":"Berryz工房","color":"レッド","date_of_join":"2004/01/14","date_of_graduation":"2015/03/03","blog":""}
,
{"name":"石村舞波","kana":"いしむら まいは","nick_name":"まいは","age":"28","birth_day":"1992/11/20","birth_place":"千葉県","group_name":"Berryz工房","color":"","date_of_join":"2004/01/14","date_of_graduation":"2005/10/02","blog":""}
,
{"name":"竹内朱莉","kana":"たけうち あかり","nick_name":"タケちゃん","age":"23","birth_day":"1997/11/23","birth_place":"埼玉県","group_name":"アンジュルム","color":"ブルー","date_of_join":"2011/08/14","date_of_graduation":"","blog":""}
,
{"name":"佐々木莉佳子","kana":"ささき りかこ","nick_name":"りかこ","age":"19","birth_day":"2001/05/28","birth_place":"宮城県","group_name":"アンジュルム","color":"イエロー","date_of_join":"2014/10/04","date_of_graduation":"","blog":""}
,
{"name":"上國料萌衣","kana":"かみこくりょう もえ","nick_name":"かみこ","age":"21","birth_day":"1999/10/24","birth_place":"熊本県","group_name":"アンジュルム","color":"アクアブルー","date_of_join":"2015/11/11","date_of_graduation":"","blog":""}
,
{"name":"笠原桃奈","kana":"かさはら ももな","nick_name":"かっさー","age":"17","birth_day":"2003/10/22","birth_place":"神奈川県","group_name":"アンジュルム","color":"ホットピンク","date_of_join":"2016/07/16","date_of_graduation":"","blog":""}
,
{"name":"川村文乃","kana":"かわむら あやの","nick_name":"かわむー","age":"21","birth_day":"1999/07/07","birth_place":"高知県","group_name":"アンジュルム","color":"ライトパープル","date_of_join":"2017/06/26","date_of_graduation":"","blog":""}
,
{"name":"伊勢鈴蘭","kana":"いせ れいら","nick_name":"れらたん","age":"17","birth_day":"2004/01/19","birth_place":"北海道","group_name":"アンジュルム","color":"ライトオレンジ","date_of_join":"2018/11/23","date_of_graduation":"","blog":""}
,
{"name":"橋迫鈴","kana":"はしさこ りん","nick_name":"りんちゃん","age":"15","birth_day":"2005/10/06","birth_place":"愛知県","group_name":"アンジュルム","color":"ピュアレッド","date_of_join":"2019/07/03","date_of_graduation":"","blog":""}
,
{"name":"川名凜","kana":"かわな りん","nick_name":"なりんちゃん","age":"17","birth_day":"2003/12/06","birth_place":"千葉県","group_name":"アンジュルム","color":"グリーン","date_of_join":"2020/11/02","date_of_graduation":"","blog":""}
,
{"name":"為永幸音","kana":"ためなが しおん","nick_name":"しおんぬ","age":"17","birth_day":"2004/02/09","birth_place":"長野県","group_name":"アンジュルム","color":"ピンク","date_of_join":"2020/11/02","date_of_graduation":"","blog":""}
,
{"name":"松本わかな","kana":"まつもと わかな","nick_name":"わーちゃん","age":"13","birth_day":"2007/09/01","birth_place":"神奈川県","group_name":"アンジュルム","color":"白","date_of_join":"2020/11/02","date_of_graduation":"","blog":""}
,
{"name":"小川紗季","kana":"おがわ さき","nick_name":"サキチィー","age":"24","birth_day":"1996/11/18","birth_place":"埼玉県","group_name":"アンジュルム","color":"ライトグリーン","date_of_join":"2009/04/04","date_of_graduation":"2011/08/27","blog":""}
,
{"name":"小数賀芙由香","kana":"こすが ふゆか","nick_name":"ふ〜ちゃん","age":"23","birth_day":"1997/11/19","birth_place":"神奈川県","group_name":"アンジュルム","color":"オレンジ","date_of_join":"2011/08/14","date_of_graduation":"2011/09/09","blog":""}
,
{"name":"前田憂佳","kana":"まえだ ゆうか","nick_name":"ゆうかりん","age":"26","birth_day":"1994/12/28","birth_place":"千葉県","group_name":"アンジュルム","color":"ピンク","date_of_join":"2009/04/04","date_of_graduation":"2011/12/31","blog":""}
,
{"name":"福田花音","kana":"ふくだ かのん","nick_name":"かにょん（まろ）","age":"26","birth_day":"1995/03/12","birth_place":"埼玉県","group_name":"アンジュルム","color":"ホットピンク","date_of_join":"2009/04/04","date_of_graduation":"2015/11/29","blog":""}
,
{"name":"田村芽実","kana":"たむら めいみ","nick_name":"めいめい","age":"22","birth_day":"1998/10/30","birth_place":"群馬県","group_name":"アンジュルム","color":"パープル","date_of_join":"2011/08/14","date_of_graduation":"2016/05/30","blog":""}
,
{"name":"相川茉穂","kana":"あいかわ まほ","nick_name":"あいあい","age":"21","birth_day":"1999/03/26","birth_place":"神奈川県","group_name":"アンジュルム","color":"グリーン","date_of_join":"2014/10/04","date_of_graduation":"2017/12/31","blog":""}
,
{"name":"和田彩花","kana":"わだ あやか","nick_name":"あやちょ","age":"26","birth_day":"1994/08/01","birth_place":"群馬県","group_name":"アンジュルム","color":"レッド","date_of_join":"2009/04/04","date_of_graduation":"2019/06/18","blog":""}
,
{"name":"勝田里奈","kana":"かつた りな","nick_name":"りなぷ〜","age":"22","birth_day":"1998/04/06","birth_place":"東京都","group_name":"アンジュルム","color":"オレンジ","date_of_join":"2011/08/14","date_of_graduation":"2019/09/25","blog":""}
,
{"name":"中西香菜","kana":"なかにし かな","nick_name":"かななん","age":"23","birth_day":"1997/06/04","birth_place":"大阪府","group_name":"アンジュルム","color":"ライトピンク","date_of_join":"2011/08/14","date_of_graduation":"2019/12/10","blog":""}
,
{"name":"室田瑞希","kana":"むろた みずき","nick_name":"むろたん","age":"22","birth_day":"1998/06/12","birth_place":"千葉県","group_name":"アンジュルム","color":"ライトブルー","date_of_join":"2014/10/04","date_of_graduation":"2020/03/22","blog":""}
,
{"name":"太田遥香","kana":"おおた はるか","nick_name":"はち","age":"17","birth_day":"2003/10/21","birth_place":"北海道","group_name":"アンジュルム","color":"ブライトグリーン","date_of_join":"2018/11/23","date_of_graduation":"2020/10/13","blog":""}
,
{"name":"船木結","kana":"ふなき むすぶ","nick_name":"ふなっき","age":"18","birth_day":"2002/05/10","birth_place":"大阪府","group_name":"アンジュルム","color":"ライトグリーン","date_of_join":"2017/06/26","date_of_graduation":"2020/12/09","blog":""}
,
{"name":"金澤朋子","kana":"かなざわ ともこ","nick_name":"かなとも","age":"25","birth_day":"1995/07/02","birth_place":"埼玉県","group_name":"Juice=Juice","color":"りんご","date_of_join":"2013/02/25","date_of_graduation":"","blog":""}
,
{"name":"植村あかり","kana":"うえむら あかり","nick_name":"あーりー","age":"22","birth_day":"1998/12/30","birth_place":"大阪府","group_name":"Juice=Juice","color":"メロン","date_of_join":"2013/02/25","date_of_graduation":"","blog":""}
,
{"name":"段原瑠々","kana":"だんばら るる","nick_name":"るーちゃん","age":"19","birth_day":"2001/05/07","birth_place":"広島県","group_name":"Juice=Juice","color":"オレンジ","date_of_join":"2017/06/26","date_of_graduation":"","blog":""}
,
{"name":"稲場愛香","kana":"いなば まなか","nick_name":"まなかん","age":"23","birth_day":"1997/12/27","birth_place":"北海道","group_name":"Juice=Juice","color":"ホットピンク","date_of_join":"2018/06/13","date_of_graduation":"","blog":""}
,
{"name":"工藤由愛","kana":"くどう ゆめ","nick_name":"タコちゃん","age":"16","birth_day":"2004/09/28","birth_place":"北海道","group_name":"Juice=Juice","color":"ライトピンク","date_of_join":"2019/06/14","date_of_graduation":"","blog":""}
,
{"name":"松永里愛","kana":"まつなが りあい","nick_name":"やふぞう","age":"15","birth_day":"2005/07/07","birth_place":"大阪府","group_name":"Juice=Juice","color":"ロイヤルブルー","date_of_join":"2019/06/14","date_of_graduation":"","blog":""}
,
{"name":"井上玲音","kana":"いのうえ れい","nick_name":"れいれい","age":"19","birth_day":"2001/07/17","birth_place":"東京都","group_name":"Juice=Juice","color":"白","date_of_join":"2020/04/01","date_of_graduation":"","blog":""}
,
{"name":"大塚愛菜","kana":"おおつか あいな","nick_name":"つかぽん","age":"22","birth_day":"1998/04/03","birth_place":"東京都[9]","group_name":"Juice=Juice","color":"オレンジ","date_of_join":"2013/02/25","date_of_graduation":"2013/07/05","blog":""}
,
{"name":"梁川奈々美","kana":"やながわ ななみ","nick_name":"やなみん","age":"19","birth_day":"2002/01/06","birth_place":"神奈川県","group_name":"Juice=Juice","color":"ミディアムブルー","date_of_join":"2017/06/26","date_of_graduation":"2019/03/11","blog":""}
,
{"name":"宮崎由加","kana":"みやざき ゆか","nick_name":"ゆかにゃ","age":"26","birth_day":"1994/04/02","birth_place":"石川県","group_name":"Juice=Juice","color":"ピーチ","date_of_join":"2013/02/25","date_of_graduation":"2019/06/17","blog":""}
,
{"name":"宮本佳林","kana":"みやもと かりん","nick_name":"カリン","age":"22","birth_day":"1998/12/01","birth_place":"千葉県","group_name":"Juice=Juice","color":"ブドウ","date_of_join":"2013/02/25","date_of_graduation":"2020/12/10","blog":""}
,
{"name":"高木紗友希","kana":"たかぎ さゆき","nick_name":"さゆべぇ","age":"23","birth_day":"1997/04/21","birth_place":"千葉県","group_name":"Juice=Juice","color":"レモン","date_of_join":"2013/02/25","date_of_graduation":"2021/02/12","blog":""}
,
{"name":"広瀬彩海","kana":"ひろせ あやか","nick_name":"あやぱん","age":"21","birth_day":"1999/08/04","birth_place":"神奈川県","group_name":"こぶしファクトリー","color":"ターコイズ","date_of_join":"2015/09/02","date_of_graduation":"2020/03/30","blog":""}
,
{"name":"野村みな美","kana":"のむら みなみ","nick_name":"みなみな","age":"21","birth_day":"2000/02/10","birth_place":"東京都","group_name":"こぶしファクトリー","color":"ロイヤルブルー","date_of_join":"2015/09/02","date_of_graduation":"2020/03/30","blog":""}
,
{"name":"浜浦彩乃","kana":"はまうら あやの","nick_name":"はまちゃん大佐","age":"20","birth_day":"2000/04/26","birth_place":"埼玉県","group_name":"こぶしファクトリー","color":"ピンク","date_of_join":"2015/09/02","date_of_graduation":"2020/03/30","blog":""}
,
{"name":"和田桜子","kana":"わだ さくらこ","nick_name":"わださく","age":"20","birth_day":"2001/03/08","birth_place":"愛知県","group_name":"こぶしファクトリー","color":"グリーン","date_of_join":"2015/09/02","date_of_graduation":"2020/03/30","blog":""}
,
{"name":"井上玲音","kana":"いのうえ れい","nick_name":"れいれい","age":"19","birth_day":"2001/07/17","birth_place":"東京都","group_name":"こぶしファクトリー","color":"パープル","date_of_join":"2015/09/02","date_of_graduation":"2020/03/30","blog":""}
,
{"name":"藤井梨央","kana":"ふじい りお","nick_name":"藤丼","age":"22","birth_day":"1999/03/04","birth_place":"愛知県","group_name":"こぶしファクトリー","color":"マスタード","date_of_join":"2015/09/02","date_of_graduation":"2017/07/06","blog":""}
,
{"name":"小川麗奈","kana":"おがわ れな","nick_name":"れなこ","age":"20","birth_day":"2000/03/27","birth_place":"栃木県","group_name":"こぶしファクトリー","color":"レッド","date_of_join":"2015/09/02","date_of_graduation":"2017/09/06","blog":""}
,
{"name":"田口夏実","kana":"たぐち なつみ","nick_name":"たぐっち","age":"20","birth_day":"2000/07/21","birth_place":"埼玉県","group_name":"こぶしファクトリー","color":"オレンジ","date_of_join":"2015/09/02","date_of_graduation":"2017/12/06","blog":""}
,
{"name":"山岸理子","kana":"やまぎし りこ","nick_name":"りこりこ","age":"22","birth_day":"1998/11/24","birth_place":"千葉県","group_name":"つばきファクトリー","color":"ライトグリーン","date_of_join":"2015/04/29","date_of_graduation":"","blog":""}
,
{"name":"新沼希空","kana":"にいぬま きそら","nick_name":"きそら","age":"21","birth_day":"1999/10/20","birth_place":"愛知県","group_name":"つばきファクトリー","color":"ライトブルー","date_of_join":"2015/04/29","date_of_graduation":"","blog":""}
,
{"name":"谷本安美","kana":"たにもと あみ","nick_name":"あんみぃ","age":"21","birth_day":"1999/11/16","birth_place":"北海道","group_name":"つばきファクトリー","color":"ライトパープル","date_of_join":"2015/04/29","date_of_graduation":"","blog":""}
,
{"name":"岸本ゆめの","kana":"きしもと ゆめの","nick_name":"きしもん","age":"20","birth_day":"2000/04/01","birth_place":"大阪府","group_name":"つばきファクトリー","color":"イエロー","date_of_join":"2015/04/29","date_of_graduation":"","blog":""}
,
{"name":"浅倉樹々","kana":"あさくら きき","nick_name":"ききちゃん","age":"20","birth_day":"2000/09/03","birth_place":"千葉県","group_name":"つばきファクトリー","color":"ライトピンク","date_of_join":"2015/04/29","date_of_graduation":"","blog":""}
,
{"name":"小野瑞歩","kana":"おの みずほ","nick_name":"おみず","age":"20","birth_day":"2000/09/29","birth_place":"東京都","group_name":"つばきファクトリー","color":"エメラルドグリーン","date_of_join":"2016/08/13","date_of_graduation":"","blog":""}
,
{"name":"小野田紗栞","kana":"おのだ さおり","nick_name":"さおりん","age":"19","birth_day":"2001/12/17","birth_place":"静岡県","group_name":"つばきファクトリー","color":"ピーチ","date_of_join":"2016/08/13","date_of_graduation":"","blog":""}
,
{"name":"秋山眞緒","kana":"あきやま まお","nick_name":"まおぴん","age":"18","birth_day":"2002/07/29","birth_place":"大阪府","group_name":"つばきファクトリー","color":"ライトレッド","date_of_join":"2016/08/13","date_of_graduation":"","blog":""}
,
{"name":"小片リサ","kana":"おがた りさ","nick_name":"りさまる。","age":"22","birth_day":"1998/11/05","birth_place":"東京都","group_name":"つばきファクトリー","color":"ライトオレンジ","date_of_join":"2015/04/29","date_of_graduation":"2020/12/28","blog":""}
,
{"name":"山木梨沙","kana":"やまき りさ","nick_name":"りさちゃん","age":"23","birth_day":"1997/10/14","birth_place":"東京都","group_name":"カントリー・ガールズ","color":"ライム","date_of_join":"2014/11/05","date_of_graduation":"2019/12/26","blog":""}
,
{"name":"森戸知沙希","kana":"もりと ちさき","nick_name":"ちぃちゃん","age":"21","birth_day":"2000/02/19","birth_place":"栃木県","group_name":"カントリー・ガールズ","color":"オレンジ","date_of_join":"2014/11/05","date_of_graduation":"","blog":""}
,
{"name":"小関舞","kana":"おぜき まい","nick_name":"おぜこ","age":"19","birth_day":"2002/02/10","birth_place":"東京都","group_name":"カントリー・ガールズ","color":"ミディアムブルー","date_of_join":"2014/11/05","date_of_graduation":"2019/12/26","blog":""}
,
{"name":"船木結","kana":"ふなき むすぶ","nick_name":"ふなっき","age":"18","birth_day":"2002/05/10","birth_place":"大阪府","group_name":"カントリー・ガールズ","color":"イエロー","date_of_join":"2015/11/05","date_of_graduation":"2020/12/09","blog":""}
,
{"name":"島村嬉唄","kana":"しまむら うた","nick_name":"うたちゃん","age":"20","birth_day":"2000/06/24","birth_place":"神奈川県","group_name":"カントリー・ガールズ","color":"デイジーイエロー","date_of_join":"2014/11/05","date_of_graduation":"2015/06/12","blog":""}
,
{"name":"稲場愛香","kana":"いなば まなか","nick_name":"まなかん","age":"23","birth_day":"1997/12/27","birth_place":"北海道","group_name":"カントリー・ガールズ","color":"イタリアンレッド","date_of_join":"2014/11/05","date_of_graduation":"2016/08/04","blog":""}
,
{"name":"嗣永桃子","kana":"つぐなが ももこ","nick_name":"ももち先輩","age":"29","birth_day":"1992/03/06","birth_place":"千葉県","group_name":"カントリー・ガールズ","color":"ピンク","date_of_join":"2014/11/05","date_of_graduation":"2017/06/30","blog":""}
,
{"name":"梁川奈々美","kana":"やながわ ななみ","nick_name":"やなみん","age":"19","birth_day":"2002/01/06","birth_place":"神奈川県","group_name":"カントリー・ガールズ","color":"パープル","date_of_join":"2015/11/05","date_of_graduation":"2019/03/11","blog":""}
,
{"name":"一岡伶奈","kana":"いちおか れいな","nick_name":"いっちゃん","age":"22","birth_day":"1999/02/25","birth_place":"東京都","group_name":"BEYOOOOONDS","color":"ライトブルー","date_of_join":"2017/05/05","date_of_graduation":"","blog":""}
,
{"name":"島倉りか","kana":"しまくら りか","nick_name":"りか様","age":"20","birth_day":"2000/08/20","birth_place":"東京都","group_name":"BEYOOOOONDS","color":"ラベンダー","date_of_join":"2018/06/09","date_of_graduation":"","blog":""}
,
{"name":"西田汐里","kana":"にしだ しおり","nick_name":"しおりん","age":"17","birth_day":"2003/06/07","birth_place":"京都府","group_name":"BEYOOOOONDS","color":"ホットピンク","date_of_join":"2018/06/09","date_of_graduation":"","blog":""}
,
{"name":"江口紗耶","kana":"えぐち さや","nick_name":"さやりん","age":"17","birth_day":"2003/08/01","birth_place":"兵庫県","group_name":"BEYOOOOONDS","color":"デイジー","date_of_join":"2018/06/09","date_of_graduation":"","blog":""}
,
{"name":"高瀬くるみ","kana":"たかせ くるみ","nick_name":"くるみん","age":"21","birth_day":"1999/03/16","birth_place":"栃木県","group_name":"BEYOOOOONDS","color":"ミントグリーン","date_of_join":"2017/05/05","date_of_graduation":"","blog":""}
,
{"name":"前田こころ","kana":"まえだ こころ","nick_name":"まえここ","age":"18","birth_day":"2002/06/23","birth_place":"埼玉県","group_name":"BEYOOOOONDS","color":"シーブルー","date_of_join":"2018/06/09","date_of_graduation":"","blog":""}
,
{"name":"山﨑夢羽","kana":"やまざき ゆはね","nick_name":"ゆは","age":"18","birth_day":"2002/11/05","birth_place":"愛知県","group_name":"BEYOOOOONDS","color":"イタリアンレッド","date_of_join":"2018/06/09","date_of_graduation":"","blog":""}
,
{"name":"岡村美波","kana":"おかむら みなみ","nick_name":"みいみ","age":"16","birth_day":"2004/10/20","birth_place":"大阪府","group_name":"BEYOOOOONDS","color":"ピンク","date_of_join":"2018/06/09","date_of_graduation":"","blog":""}
,
{"name":"清野桃々姫","kana":"きよの ももひめ","nick_name":"ももひめ","age":"16","birth_day":"2004/12/22","birth_place":"東京都","group_name":"BEYOOOOONDS","color":"オレンジ","date_of_join":"2017/05/05","date_of_graduation":"","blog":""}
,
{"name":"平井美葉","kana":"ひらい みよ","nick_name":"みよちゃん","age":"21","birth_day":"1999/12/11","birth_place":"東京都","group_name":"BEYOOOOONDS","color":"パープル","date_of_join":"2018/12/03","date_of_graduation":"","blog":""}
,
{"name":"小林萌花","kana":"こばやし ほのか","nick_name":"ほのぴ","age":"20","birth_day":"2000/08/16","birth_place":"東京都","group_name":"BEYOOOOONDS","color":"グリーン","date_of_join":"2018/12/03","date_of_graduation":"","blog":""}
,
{"name":"里吉うたの","kana":"さとよし うたの","nick_name":"うーたん","age":"20","birth_day":"2000/09/22","birth_place":"東京都","group_name":"BEYOOOOONDS","color":"ミディアムブルー","date_of_join":"2018/12/03","date_of_graduation":"","blog":""}

]

// 内部の処理を同期的に実行する
db.serialize(() => {
    db.run(`DROP TABLE members`);
    db.run(`CREATE TABLE members (${table})`);

    // const sth = db.prepare("INSERT INTO members (name, kana, nick_name, age, birth_day, birth_place, group_name, color, date_of_join, date_of_graduation, blog) VALUES (?,?,?,?,?,?,?,?,?,?.?)");
    for (let xs of data) {
        const column = Object.keys(xs).join(',');
        const values = Object.values(xs).map((value) => {
            return `"${value}"`
        }).join(',');
        db.run(`INSERT INTO members (${column}) VALUES (${values})`,(err) => {
            console.log(err)
        });
    }
    db.close();
});