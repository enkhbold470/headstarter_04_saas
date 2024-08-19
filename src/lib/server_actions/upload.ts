"use server";
// import { currentUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
// upload photo to sqlite profile.db file in root directory
export async function uploadPhoto(photo: File, photoName: string) {
  const fs = require("fs").promises;
  const sqlite3 = require("sqlite3").verbose();
  const { open } = require("sqlite");

  // Get user information from Clerk
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  // Convert the File object to a Buffer
  const buffer = await photo.arrayBuffer();
  const photoBuffer = Buffer.from(buffer);

  // Open the SQLite database
  const db = await open({
    filename: "./profile.db",
    driver: sqlite3.Database,
  });

  try {
    // Create the photos table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS photos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId TEXT,
        username TEXT,
        photoName TEXT,
        data BLOB
      )
    `);

    // Insert the photo into the database
    const stmt = await db.prepare(
      "INSERT INTO photos (userId, username, photoName, data) VALUES (?, ?, ?, ?)"
    );
    await stmt.run(userId, photoName, photoBuffer);
    await stmt.finalize();

    console.log("Photo uploaded successfully");
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw error;
  } finally {
    await db.close();
  }
}
