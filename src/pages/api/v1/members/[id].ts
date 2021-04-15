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

const run = async (sql: string, db: any) => {
  return new Promise((resolve, reject) => {
    db.run(sql, (err: any) => {
      if (err) {
        return reject(err);
      } else {
        return resolve("success");
      }
    });
  });
};

const convertStr = (req: any, row: any) => {
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
  if ((req.method = "PUT")) {
    const db = new sqlite3.Database(dbName);
    const id = req.query.id;

    // 現在のユーザー情報
    db.get(
      `SELECT * FROM members WHERE id = ${id}`,
      async (err: any, row: any) => {
        if (!row) {
          return res
            .status(404)
            .send({ error: "指定されたメンバーが見つかれません。" });
        }
        res.json(row);
        const str = convertStr(req, row);
        let data: any[] | string = [];
        for (let i = 0; i < column.length; i++) {
          data = [...data, `${column[i]}=${str[i]}`];
        }
        data = data.join(",");
        try {
          await run(`UPDATE members SET ${data} WHERE id=${id}`, db);
          res.status(201).send({ message: "メンバー情報を更新しました。" });
        } catch (e) {
          res.status(500).send({ error: e });
        }
      }
    );
    db.close();
  } else if ((req.method = "DELETE")) {
    // connect database
    const db = new sqlite3.Database(dbName);
    const id = req.query.id;

    db.get(
      `SELECT * FROM members WHERE id = ${id}`,
      async (err: any, row: any) => {
        if (!row) {
          res.status(404).send({
            error: "指定されたユーザーが見つかれません。",
          });
        } else {
          try {
            await run(`DELETE FROM members WHERE id=${id}`, db);
            res.status(200).send({ message: "メンバーを削除しました" });
          } catch (e) {
            res.status(500).send({ error: e });
          }
        }
      }
    );
  }
};
