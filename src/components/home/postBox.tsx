"use client";
import React, { useRef, useEffect, useState } from "react";
import useScrollSnap from "react-use-scroll-snap";
import { PostBoxSkeleton } from "./postSkeleton";
import { Suspense } from "react";
import { fetchPhotos, getCuratedPhotos } from "@/lib/pexels";
const perPage = 15;
const query = `${process.env.NEXT_PUBLIC_QUERY}`;
export default function PostBox() {
  const [photos, setPhotos] = useState([]);
  const scrollRef = useRef(null);
  const data = Array(perPage)
    .fill(1)
    .map((i, e) => e + 1);
  useScrollSnap({ ref: scrollRef, duration: 200 });
  useEffect(() => {
    async function loadPhotos() {
      const fetchedPhotos = await getCuratedPhotos(perPage);
      setPhotos(fetchedPhotos);
    }
    loadPhotos();
  }, []);
  // console.log(photos);
  if (!photos) {
    return <h1>Server is loading...</h1>;
  }

  return (
    <div className="flex justify-center w-screen">
      <section
        className="flex flex-col justify-center items-center"
        ref={scrollRef}
      >
        {photos.map((photoArray: any, index: number) => {
          return (
            <div key={index}>
              <PostBoxSkeleton
                key={index}
                image={photoArray.src.large2x}
                avatar={photoArray.src.tiny}
                name={photoArray.photographer}
                time="an hour ago"
                caption={photoArray.alt}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
