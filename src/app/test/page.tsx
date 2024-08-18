"use client";
import { useState, useEffect } from "react";
import { getCuratedPhotos, fetchPhotos } from "@/lib/pexels";
import pexelsJson from "@/data/photos.json";

export default function Test() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function loadPhotos() {
      const fetchedPhotos = await fetchPhotos("god");
      setPhotos(fetchedPhotos);
    }
    loadPhotos();
  }, []);
  return (
    <div>
      {photos.map((photo: any, index: number) => (
        <img key={photo.id} src={photo.src.original} alt={photo.alt} />
      ))}
    </div>
  );
}
