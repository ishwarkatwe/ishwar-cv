"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/(auth)/AuthContext";
import Humber from "./Humber";
import DropDown from "../core/DropDown";

const HeaderNavbar: React.FC = () => {
  const { user } = useAuth();
  const userOptions = [
    { title: "Profile", link: "/profile" },
    { title: "Settings", link: "/settings" },
    { title: "Notifications", link: "/notifications" },
    { title: "Logout", link: "/logout" },
  ];

  return (
    <header className=" fixed w-full z-10 bg-white shadow-lg h-16 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Humber />
        <Link href="/" className="ml-4 text-2xl">
          <h1> IK</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4 px-2 gap-4">
          <li>
            <Link href="/about">
              <div className="hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className="relative">
            <DropDown
              icon="user"
              title={user?.username || "User"}
              options={userOptions}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
