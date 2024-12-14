"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropDown from "../ui/DropDown";
import Icons from "../ui/Icons";
import Button from "../ui/Button";
import { redirect, usePathname } from "next/navigation";
import User from "./User";

const Header = () => {
  const pathname = usePathname(); // Get the current pathname
  const isActive = (path: string) => pathname.startsWith(path);

  const [isOpen, setIsOpen] = useState(false);
  const isSignedIn = false;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/dashboard">
            <Image src="/logo.png" height={50} width={200} alt="Logo" />
          </Link>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {[
            {
              label: "Dashboard",
              value: "/dashboard",
            },
            {
              label: "Upload Payments",
              value: "/upload",
            },
            {
              label: "Payment & Settlements",
              value: "/payment-settlements",
            },
            {
              label: "Analytics",
              value: "/analytics",
            },
          ].map((o, index) => (
            <Link
              key={index}
              href={o.value}
              className={`text-gray-600 hover:text-primary-600 border-b-primary-700 ${
                isActive(o.value) ? "text-primary-600 text-bold" : ""
              }`}
            >
              {o.label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:block justify-center items-center">
          <Button
            className="mx-2 relative"
            onClick={() => redirect("notification")}
          >
            <Icons type="bell" size={5} />
            <span className="absolute top-0 right-0 p-1 bg-red-400 rounded-full w-[22px] h-[22px] flex items-center justify-center text-white">
              2
            </span>
          </Button>
          {(!isSignedIn && (
            <DropDown
              options={[
                {
                  label: "John Stev ( Buyer )",
                  value: "/profile",
                  icon: "user",
                  actionType: "link",
                },
                {
                  label: "User Preference",
                  value: "/user-preference",
                  icon: "settings",
                  actionType: "link",
                },
                {
                  label: "Logout",
                  value: "logout",
                  icon: "logout",
                  actionType: "button",
                },
              ]}
              onSelect={(e: any) => console.log(e)}
            >
              <div className="flex justify-between items-center text-sm gap-2 text-gray-800">
                <Icons type="building" size={5}></Icons>
                <div className="text-sm">Pioneer Enterprises</div>
              </div>
            </DropDown>
          )) || <Button theme="primary">Login</Button>}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
