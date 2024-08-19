"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconUser, IconUpload, IconCrown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
export default function FloatingNavbar() {
  const navItems = [
    {
      name: "Upload",
      link: "/upload",
      icon: <IconUpload className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div>
      <FloatingNav navItems={navItems} className="" />
    </div>
  );
}
