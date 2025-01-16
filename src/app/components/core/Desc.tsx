import React from "react";

function Desc({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 my-2">{children}</p>;
}

export default Desc;
