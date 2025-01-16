import Link from "next/link";
import React, { useState } from "react";

interface DropDownProps {
  icon?: string;
  title: string;
  options: { title: string; link: string }[];
}

function DropDown({ icon, title, options }: DropDownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none gap-2"
      >
        {icon && icon === "user" && (
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
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        )}
        <span className="capitalize">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 transition-transform duration-300 ease-in-out ${
          dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onMouseLeave={closeDropdown}
      >
        {options?.length &&
          options.map((option, index) => (
            <Link href={option.link} key={index}>
              <div className="block px-4 py-2 hover:bg-gray-200">
                {option.title}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default DropDown;
