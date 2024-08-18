"use server";

export async function uploadPhoto(photo: File) {
  const buffer = Buffer.from(await photo.arrayBuffer());
  const base64 = buffer.toString("base64");
  const photoData = await fetch(
    `https://api.pexels.com/v1/photos/${photo.name}`,
    {
      method: "POST",
      body: JSON.stringify({ photo: base64 }),
    }
  );
}
