// /src/app/api/database.ts

import path from "path";
import sqlite3 from "sqlite3";
const dbPath = path.join(process.cwd(), "profile.db");

console.log(dbPath);

export const db = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the profile database.");
  }
);

// /src/app/api/database.ts
// making api calls to the database

export const apiGet = async (query: string) => {
  return await new Promise((resolve, reject) => {
    db.all(query, (err: Error, row: any) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(row);
    });
  });
};

export const apiPost = async (query: string, values: string[]) => {
  return await new Promise((resolve, reject) => {
    db.run(query, values, function (err: any) {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(null);
    });
  });
};
