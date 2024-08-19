// /src/app/api/migrations.ts
"use strict";
import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS userUploads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId TEXT NOT NULL,
        caption TEXT NOT NULL,
        imageUrl TEXT NOT NULL,
        photoUrl TEXT NOT NULL
      );
    `,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("userUploads table created successfully.");
      }
    );
  });
};
