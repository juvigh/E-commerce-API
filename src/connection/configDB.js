import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function openDb() {
  return open({
    filename: "./src/connection/database.db",
    driver: sqlite3.Database,
  });
}

export default openDb()
