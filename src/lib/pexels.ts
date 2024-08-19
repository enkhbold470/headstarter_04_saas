"use server";
const API_KEY = process.env.PEXELS_API_KEY;

export const getCuratedPhotos = async (page: number) => {
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/curated?per_page=${page}`,
      {
        headers: {
          Authorization: API_KEY || "",
        },
      }
    );
    const responseJson = await res.json();
    return responseJson.photos;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return { photos: [] }; // Return an empty array of photos on error
  }
};
export const fetchPhotos = async (query: string, page: number) => {
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${query}?per_page=${page}`,
      {
        headers: {
          Authorization: API_KEY || "",
        },
      }
    );

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
