import Link from "next/link";
import { env } from "process";
import React from "react";

function footer() {
  return (
    <footer
      className="mx-auto mt-4 px-4 container border-t"
      aria-labelledby="footer-heading"
    >
      <div className="flex items-centers justify-between border-t border-gray-100 py-6 flex-col md:flex-row gap-4 md:gap-0">
        <p className="text-xs text-gray-600">
          FiniLynx © 2024, All rights reserved.
        </p>
        <div className="text-xs text-gray-600 flex justify-end gap-3 flex-col md:flex-row">
          <Link href={""}>Privacy Policy</Link>
          <div className="h-4 w-px bg-gray-200 hidden md:inline-flex"></div>
          <Link href={""}>Terms & Conditions</Link>
          <div className="h-4 w-px bg-gray-200 hidden md:inline-flex"></div>
          <Link href={""}>Security Tips</Link>
          <div className="h-4 w-px bg-gray-200 hidden md:inline-flex"></div>
          <Link href={""}>Client Charter</Link>
          <div className="h-4 w-px bg-gray-200 hidden md:inline-flex"></div>
          <Link href={""}>FAQ</Link>
        </div>
      </div>
    </footer>
  );
}

export default footer;
