"use server";
const API_KEY = process.env.PEXELS_API_KEY;

export const getCuratedPhotos = async () => {
  const res = await fetch(`https://api.pexels.com/v1/curated?per_page=10`, {
    headers: {
      Authorization: API_KEY || "",
    },
  });
  const responseJson = await res.json();
  return responseJson.photos;
};
export const fetchPhotos = async (query: string) => {
  try {
    const res = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: API_KEY || "",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data.photos;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return { photos: [] }; // Return an empty array of photos on error
  }
};
