import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import NavAction from "./NavAction";
import Humber from "./Humber";

function NavBar() {
  return (
    <div className="w-full shadow-md">
      <div className="container m-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <div>
            <Link href={"/"} className=" ml-4 text-2xl text-blue-800">
              {process.env.BRAND || 'IK'}
            </Link>
          </div>
          <div className="flex h-16">
            <NavLink label="Home" value="/home" />
            <NavLink label="Notes" value="/notes" />
          </div>
          <div>
            {/* Actions */}

            <NavAction />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
