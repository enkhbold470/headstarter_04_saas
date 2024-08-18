"use client";
import React, { useRef, useEffect, useState } from "react";
import useScrollSnap from "react-use-scroll-snap";
import { PostBoxSkeleton } from "./postSkeleton";
import { Suspense } from "react";
import { fetchPhotos, getCuratedPhotos } from "@/lib/pexels";

import pexelsJson from "@/data/photos.json";

export default function PostBox() {
  const [photos, setPhotos] = useState([]);
  const scrollRef = useRef(null);
  // console.log(fetchPhotos("god"));
  const data = Array(pexelsJson.photos.length)
    .fill(1)
    .map((i, e) => e + 1);
  useScrollSnap({ ref: scrollRef, duration: 200 });

  return (
    <div className="flex justify-center w-screen">
      <section
        className="flex flex-col justify-center items-center"
        ref={scrollRef}
      >
        {data.map((content) => (
          <div key={content}>
            {/* <PostBoxSkeleton
              image={fetchPhotos(query, 10).src.large2x}
              avatar="https://avatars.githubusercontent.com/u/100000000?v=4"
              name={fetchPhotos(query, 10).photographer}
              location=" "
              likes={1}
              comments={1}
              shares={1}
              time="1"
              caption="1"
              isLiked={true}
            /> */}
          </div>
        ))}
      </section>
    </div>
  );
}
