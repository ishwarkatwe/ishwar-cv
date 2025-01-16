import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto border-t-2 border-t-gray-50 h-16 flex items-center px-4 text-sm text-gray-600">
      {process.env.BRAND} &copy; 2024, All rights reserved.
    </footer>
  );
}

export default Footer;
