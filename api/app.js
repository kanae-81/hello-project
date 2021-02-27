const express = require('express');
const app = express();
const sqlite3 = require("sqlite3");

const dbName = 'helloProject';

// Get all users
app.get("/api/v1/members", (req, res) => {
      // connect database
    const db = new sqlite3.Database(dbName);
    db.all("SELECT * FROM members", (err, rows) => {
        res.json(rows);
    });
    db.close();
});

const port = process.env.PORT ||  3001;
app.get('/', function(req, res){
    res.send('This is Anfield.');
});
app.listen(port);
console.log("Listen on port:" + port);