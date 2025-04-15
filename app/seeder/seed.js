// seed.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./app/db/database.sqlite');

// Wrap in transaction
db.serialize(() => {
    // Drop tables if needed
    db.run(`DROP TABLE IF EXISTS users`);
    db.run(`DROP TABLE IF EXISTS tokens`);

    // Create tables
    db.run(`
        CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
        )
    `);

    db.run(`
        CREATE TABLE tokens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        symbol TEXT NOT NULL,
        decimals INTEGER,
        contract_address TEXT
        )
    `);

    // Insert seed data
    const insertUser = db.prepare("INSERT INTO users (username, email) VALUES (?, ?)");
    insertUser.run("alice", "alice@example.com");
    insertUser.run("bob", "bob@example.com");
    insertUser.finalize();

    const insertToken = db.prepare("INSERT INTO tokens (name, symbol, decimals, contract_address) VALUES (?, ?, ?, ?)");
    insertToken.run("USD Tether", "USDT", 6, "0xdac17f958d2ee523a2206206994597c13d831ec7");
    insertToken.run("Ethereum", "ETH", 18, null);
    insertToken.finalize();

    console.log("✅ Seed complete!");
    });

db.close();
