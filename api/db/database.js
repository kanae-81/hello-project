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
    date_of_guraduation TEXT,
    blog TEXT
`
const data = [{
    name: '譜久村聖',
    kana: 'フクムラ ミズキ',
    nick_name: 'ふくちゃん',
    age: 24,
    birth_day:'1996/10/30',
    birth_place:'東京都',
    group_name:'モーニング娘。',
    color:'ホットピンク',
    date_of_join: '2011/01/02',
    date_of_guraduation: '',
    blog: 'https://ameblo.jp/morningmusume-9ki',
}]


// SQL 文を逐次処理する
db.serialize();
db.run(`DROP TABLE members`);
db.run(`CREATE TABLE members (${table})`);

// const sth = db.prepare("INSERT INTO members (name, kana, nick_name, age, birth_day, birth_place, group_name, color, date_of_join, date_of_guraduation, blog) VALUES (?,?,?,?,?,?,?,?,?,?.?)");
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