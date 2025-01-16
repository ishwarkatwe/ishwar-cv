"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ value, label }: { value: string; label: string }) {
  const pathname = usePathname(); // Get the current pathname
  const isActive = (path: string) => pathname.startsWith(path);
  return (
    <Link
      href={value}
      className={`hover:bg-gray-50 border-b-2  hover:border-b-blue-800 hover:text-blue-800 flex justify-center px-4 cursor-pointer items-center transition-all ${
        isActive(value)
          ? "bg-gray-50 text-blue-800 border-b-blue-800"
          : "border-b-transparent"
      }`}
    >
      {label}
    </Link>
  );
}

export default NavLink;
