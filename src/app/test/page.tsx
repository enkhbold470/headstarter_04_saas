"use client";
import { useState, useEffect } from "react";
import { fetchPhotos } from "@/lib/pexels";

const query = `${process.env.NEXT_PUBLIC_QUERY}`;
export default function Test() {
  console.log(query);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function loadPhotos() {
      const fetchedPhotos = await fetchPhotos(query);
      setPhotos(fetchedPhotos);
    }
    loadPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo: any, index: number) => (
        <img key={photo.index} src={photo.src.original} alt={photo.alt} />
      ))}
    </div>
  );
}
