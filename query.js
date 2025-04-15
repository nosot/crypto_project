// query.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./app/db/database.sqlite');

db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) throw err;
    console.log("Users:", rows);
});

db.close();
