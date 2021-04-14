// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const sqlite3 = require("sqlite3");
const dbName = "helloProject";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // connect database
  const db = new sqlite3.Database(dbName);
  const color = req.query.color;
  const group = req.query.group;

  res.setHeader("Access-Control-Allow-Origin", "*");
  // %でどこが一致するかを指定できる
  db.all(
    `SELECT * FROM members WHERE color LIKE "%${color}%" AND group_name LIKE "%${group}%"`,
    (err: any, rows: any) => {
      res.json(rows);
    }
  );
  db.close();
};
