import React from "react";

function Button(
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    any
) {
  const type =
    props?.theme === "primary"
      ? "bg-primary-800 hover:bg-primary-900 text-white focus:ring-primary-600"
      : "bg-gray-50 hover:bg-gray-200 text-gray-700 border focus:ring-gray-300";
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg shadow items-center font-normal text-sm focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed ${props.className} ${type}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
