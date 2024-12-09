import React from "react";
import Icons from "./Icons";
import Link from "next/link";

function BreadCrumb({ page }: { page: string }) {
  return (
    <ol className="flex items-center whitespace-nowrap p-4">
      <li className="inline-flex items-center">
        <Link
          className="flex items-center text-sm text-gray-500 hover:text-primary-600 focus:outline-none focus:text-blue-600"
          href={"/"}
        >
          Dashboard
        </Link>
        <Icons type="arrow-right" />
      </li>
      <li
        className="inline-flex items-center text-sm font-semibold text-gray-800 truncate"
        aria-current="page"
      >
        {page}
      </li>
    </ol>
  );
}

export default BreadCrumb;
