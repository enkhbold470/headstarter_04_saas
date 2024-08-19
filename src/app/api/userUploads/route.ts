// /src/app/api/articles/route.ts

import { apiPost } from "../database";
import { apiGet } from "../database";
import { NextRequest, NextResponse } from "next/server";
// migrate();
// POST request handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, caption, imageUrl, photoUrl } = body;

    const query = `
      INSERT INTO userUploads(userId, caption, imageUrl, photoUrl )
      VALUES(?, ?, ?, ?)
    `;
    const values = [userId, caption, imageUrl, photoUrl];

    await apiPost(query, values);
    return NextResponse.json(
      { message: "Successfully created article" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// GET request handler
export async function GET(req: NextRequest) {
  try {
    const query = `
      SELECT * from userUploads
    `;

    const articles = await apiGet(query);
    return NextResponse.json(articles, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
