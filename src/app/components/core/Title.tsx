import React from "react";

function Title({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <h1 className={`text-2xl text-gray-800 ${className}`}>{children}</h1>;
}

export default Title;
