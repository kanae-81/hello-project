const express = require('express');
const app = express();
const sqlite3 = require("sqlite3");
const path  = require('path');
const bodyParser = require('body-parser');

const dbName = 'helloProject';
const column = ['name', 'kana', 'nick_name', 'age', 'birth_day', 'birth_place', 'group_name', 'color', 'date_of_join', 'date_of_guraduation', 'blog'];
const columnStr = column.join(',');

// リクエストのbodyをパースする設定
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// publicディレクトリを静的ファイル群のルートディレクトリとして設定
app.use(express.static(path.join(__dirname,'public')));

// Get all members
app.get("/api/v1/members", (req, res) => {
      // connect database
    const db = new sqlite3.Database(dbName);
    db.all("SELECT * FROM members", (err, rows) => {
        res.json(rows);
    });
    db.close();
});

// Search members matching keyword
app.get("/api/v1/search", (req, res) => {
    // connect database
    const db = new sqlite3.Database(dbName);
    const keyword = req.query.q;

    // %でどこが一致するかを指定できる
    db.all(`SELECT * FROM members WHERE kana LIKE "%${keyword}%"`, (err, rows) => {
        res.json(rows);
    });
    db.close();
});

const run = async (sql,db) => {
    return new Promise((resolve, reject) => {
        db.run(sql, (err) => {
        if (err) {
            return reject(err);
        } else {
            return resolve();
        }
        });
    });
};

const convertStr = (req) => {
    let values = [];
    const body = req.body;
    column.forEach((elm) => {
        const value = body[elm] ? body[elm] : '';
        return values = [...values, value];
    })
    return Object.values(values).map((value) => {
        return `"${value}"`
    }).join(',');
}

// Create a new user
app.post('/api/v1/members', async (req,res)=> {
  if(!req.body) {
    res.status(400).send({error: 'ユーザー名が指定されていません'})
  }else {
    // connect database
    const db = new sqlite3.Database(dbName);
    const str = convertStr(req);

    try {
      await run(
        `INSERT INTO members (${columnStr}) VALUES (${str})`,
        db
      );
      res.status(201).send({message: '新規ユーザーを作成しました。'})
    }catch(e) {
      res.status(500).send({error: e})
    }

    db.close();
  }
})

// Update user date
app.put('/api/v1/members/:id', async (req,res)=> {
    if (!req.body.name || req.body.name === "") {
        res.status(400).send({ error: "名前が指定されていません" });
    } else {
        // connect database
        const db = new sqlite3.Database(dbName);
        const id = req.params.id;

        // 現在のユーザー情報
        db.get(`SELECT * FROM members WHERE id = ${id}`, async(err, row) => {
        if(!row) {
            res.status(404).send({error: '指定されたメンバーが見つかれません。'})
        }else {
            res.json(row);
            const name = req.body.name ? req.body.name : row.name;
            const profile = req.body.profile ? req.body.profile : row.profile;
            const dateOfBirth = req.body.date_of_birth ? req.body.date_of_birth : row.date_of_birth;

            try {
            await run(
                `UPDATE members SET name="${name}",profile="${profile}",date_of_birth="${dateOfBirth}" WHERE id=${id}`,
                db,
            )
            res.status(201).send({ message: "メンバー情報を更新しました。" });
            } catch(e) {
            res.status(500).send({error: e})
            }
        }
        });

        db.close();
    }
})

// Delete user date
app.delete('/api/v1/members/:id', async (req,res)=> {
    // connect database
    const db = new sqlite3.Database(dbName);
    const id = req.params.id;

        db.get(`SELECT * FROM members WHERE id = ${id}`, async(err, row) => {
        if(!row) {
            res.status(404).send({
            error: '指定されたユーザーが見つかれません。',
            })
        }else {
            try {
            await run(`DELETE FROM members WHERE id=${id}`, db)
            res.status(200).send({message: 'メンバーを削除しました'})
            }catch(e) {
            res.status(500).send({error: e})
            }
        }
        })
    db.close();
})


const port = process.env.PORT ||  3001;
app.get('/', function(req, res){
    res.send('This is Anfield.');
});
app.listen(port);
console.log("Listen on port:" + port);