"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export default function HeroScrollDemo() {
  return (
    <div className="justify-center items-center ">
      <div className="flex flex-col overflow-hidden ">
        <ContainerScroll
          titleComponent={
            <>
              <div className="flex flex-col items-center justify-end gap-4">
                <h1 className="text-4xl font-semibold  ">
                  Unleash the power of <br />
                  <span className="flex items-center justify-center text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    <Image
                      src={"/black_circle.svg"}
                      alt="hero"
                      height={100}
                      width={100}
                      className="rounded-2xl object-cover h-full object-left-top"
                      draggable={false}
                    />
                    urag
                  </span>
                </h1>
              </div>
            </>
          }
        >
          <Image
            src={`https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}
