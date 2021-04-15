// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const sqlite3 = require("sqlite3");
const dbName = "helloProject";
const column = [
  "name",
  "kana",
  "nick_name",
  "age",
  "birth_day",
  "birth_place",
  "group_name",
  "color",
  "date_of_join",
  "date_of_graduation",
  "blog",
];
const columnStr = column.join(",");

const run = async (sql: string, db: any) => {
  return new Promise((resolve, reject) => {
    db.run(sql, (err: any) => {
      if (err) {
        return reject(err);
      }
      return resolve("success");
    });
  });
};

const convertStr = (req: any, row?: any) => {
  let values: any[] = [];
  const body = req.body;
  column.forEach((elm) => {
    const rowData = row ? row[elm] : "";
    const value = body[elm] ? body[elm] : rowData;
    return (values = [...values, value]);
  });
  return Object.values(values).map((value) => {
    return `"${value}"`;
  });
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    // connect database
    const db = new sqlite3.Database(dbName);
    res.setHeader("Access-Control-Allow-Origin", "*");
    db.all("SELECT * FROM members", async (err: any, rows: any) => {
      res.json(rows);
    });
    db.close();
  } else if ((req.method = "POST")) {
    if (!req.body.name) {
      res.status(400).send({ error: "名前が指定されていません" });
    } else {
      // connect database
      const db = new sqlite3.Database(dbName);
      const str = convertStr(req).join(",");

      db.all(
        `SELECT * FROM members WHERE name LIKE "%${req.body.name}%"`,
        async (err: any, rows: any) => {
          if (rows.length) {
            return res
              .status(400)
              .send({ error: "すでに追加されているメンバーです" });
          }
          try {
            await run(`INSERT INTO members (${columnStr}) VALUES (${str})`, db);
            res.status(201).send({ message: "新規メンバーを作成しました。" });
          } catch (e) {
            res.status(500).send({ error: e });
          }
        }
      );
      db.close();
    }
  }
};
