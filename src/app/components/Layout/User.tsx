import {
  SignInButton,
  SignUpButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function User() {
  //   const info = useUser();
  const { isSignedIn, signOut } = useAuth();
  const { user } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden md:flex space-x-4 items-center">
      {!isSignedIn ? (
        <>
          {/* Sign-In Button */}
          <SignInButton>
            <button className="px-4 py-2 text-white bg-green-500 rounded-lg shadow hover:bg-green-600">
              Sign In
            </button>
          </SignInButton>

          {/* Sign-Up Button */}
          <SignUpButton>
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600">
              Sign Up
            </button>
          </SignUpButton>
        </>
      ) : (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg shadow"
          >
            <img
              src={user?.imageUrl || "/default-avatar.png"}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-700 capitalize">
              {user?.fullName || "User"}
            </span>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default User;
