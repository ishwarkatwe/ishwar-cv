import React, { ReactNode } from "react";
import Button from "./Button";

function Panel({
  title,
  h,
  onViewMore,
  children,
}: {
  title: string;
  h: string;
  onViewMore: Function;
  children: ReactNode;
}) {
  return (
    <div className="flex-auto border border-gray-300 rounded-lg">
      <div className="px-3 py-2 font-semibold text-gray-800 flex items-center justify-between border-b">
        <div>{title}</div>
        <Button onClick={() => onViewMore()}>View</Button>
      </div>
      <div className={`px-3 py-2 text-gray-600 overflow-auto ${h}`}>
        {children}
      </div>
    </div>
  );
}

export default Panel;
