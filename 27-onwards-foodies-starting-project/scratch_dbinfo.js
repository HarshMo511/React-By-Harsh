const sql = require("better-sqlite3");
const db = sql("meals.db");
const info = db.prepare("PRAGMA table_info(meals)").all();
console.log(JSON.stringify(info, null, 2));
