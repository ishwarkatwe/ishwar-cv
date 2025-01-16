"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/app/(auth)/AuthContext";

const AsideMenu: React.FC = () => {
  const { menuToggle } = useAuth();
  return (
    <>
      {
        <aside
          className={` absolute md:relative overflow-hidden bg-gray-800 text-white flex flex-col ${
            menuToggle ? "w-64" : "w-0"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="p-4 text-2xl font-bold">Menu</div>
          <nav className="flex-1 w-64">
            <ul className="space-y-2 p-4">
              <li>
                <Link href="/">
                  <div className="block p-2 rounded hover:bg-gray-700">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <div className="block p-2 rounded hover:bg-gray-700">
                    Manage Categories
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <div className="block p-2 rounded hover:bg-gray-700">
                    Manage Products
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/settings">
                  <div className="block p-2 rounded hover:bg-gray-700">
                    Settings
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      }
    </>
  );
};

export default AsideMenu;
