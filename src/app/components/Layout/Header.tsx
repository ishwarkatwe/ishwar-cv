"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import DropDown, { IACTIONTYPE } from "../ui/DropDown";
import Icons from "../ui/Icons";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";
import User from "./User";

const Header = () => {
  const pathname = usePathname(); // Get the current pathname
  const isActive = (path: string) => pathname.startsWith(path);

  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            <Image src="/logo.png" height={50} width={200} alt="Logo" />
          </Link>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {[
            {
              label: "Dashboard",
              value: "dashboard",
            },
            {
              label: "Upload Payments",
              value: "upload",
            },
            {
              label: "Payment & Settlements",
              value: "payment-settlements",
            },
            {
              label: "Analytics",
              value: "analytics",
            },
            {
              label: "User Preference",
              value: "user-preference",
            },
          ].map((o, index) => (
            <Link
              key={index}
              href={o.value}
              className={`text-gray-600 hover:text-primary-600 border-b-primary-700 ${
                isActive("/" + o.value) ? "text-primary-600 text-bold" : ""
              }`}
            >
              {o.label}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:block justify-center items-center">
          <Button className="mx-2 relative">
            <Icons type="bell" />
            <span className="absolute top-0 right-0 p-1 bg-red-400 rounded-full w-[22px] h-[22px] flex items-center justify-center text-white">2</span>
          </Button>
          {(!isSignedIn && (
            <DropDown
              options={[
                {
                  label: "Profile",
                  value: "profile",
                  actionType: "link",
                },
                {
                  label: "Logout",
                  value: "logout",
                  actionType: "button",
                },
              ]}
              onSelect={(e: any) => console.log(e)}
            >
              <div className="flex justify-between items-center text-sm gap-2 text-gray-800">
                <Icons type="user"></Icons>
                <div className="text-sm">Pioneer Enterprises | <span className="font-bold mx-1">Buyer</span></div>
              </div>
            </DropDown>
          )) || <Button theme="primary">Login</Button>}

          {/* {!isSignedIn && (
            <button className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
              <SignInButton />
            </button>
          )} */}

          {isSignedIn && <User />}
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
