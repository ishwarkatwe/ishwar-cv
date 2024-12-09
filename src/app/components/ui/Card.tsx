import Link from "next/link";
import React from "react";

function Card(props: any) {
  let type = "";
  if (props?.theme) {
    type = props.theme;
  } else {
    type = "bg-blue-500";
  }
  return (
    <Link href={"/details"}>
      <div className="flex-1 border border-gray-300 rounded-lg p-4 hover:bg-slate-50">
        <div className="flex items-center">
          <div className="flex flex-col flex-1">
            <h3 className="text-sm font-normal">{props.title}</h3>
            <label className="text-2xl my-2 font-medium">{props.count}</label>
            <p>
              <span
                className={`p-2 mr-2 rounded-md text-xs ${
                  props.stats.indexOf("-") == -1
                    ? "bg-green-100"
                    : "bg-red-100 "
                }`}
              >
                {props.stats}
              </span>
              <small className="text-xs">Since last months</small>
            </p>
          </div>
          <div>
            <div
              className={
                "h-[50px] w-[50px] flex items-center justify-center rounded-full " +
                  type || ""
              }
            >
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
