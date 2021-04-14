// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const sqlite3 = require("sqlite3");
const dbName = "helloProject";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // connect database
  const db = new sqlite3.Database(dbName);
  const keyword = req.query.q;
  res.setHeader("Access-Control-Allow-Origin", "*");
  // %でどこが一致するかを指定できる
  db.all(
    `SELECT * FROM members WHERE kana LIKE "%${keyword}%"`,
    (err: any, rows: any) => {
      res.json(rows);
    }
  );
  db.close();
};
