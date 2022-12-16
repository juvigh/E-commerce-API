import sqlite3 from "sqlite3"
const db = new sqlite3.Database("./src/connection/database.db")
process.on("SIGINT", () => {
  db.close(() => {
    process.exit(0)
  })});
export default db
