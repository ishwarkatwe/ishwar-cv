import React from "react";
import Icons from "./Icons";

function ActionCard(props: any) {
  const { title, desc, date, invoiceId, price, status } = props.data;
  return (
    <div
      className={`flex justify-between border-l-2 px-2 py-1 my-2 hover:bg-slate-50 hover:shadow-lg rounded border`}
    >
      <div className="flex flex-col">
        <div className="text-sm mb-1 text-gray-800">{title}</div>
        <div className="flex gap-1">
          <button
            className="bg-green-400 p-1 text-white rounded-full font-bold"
            onClick={() => console.log("asas")}
          >
            <Icons type="check" size={5}></Icons>
          </button>
          <button
            className="bg-red-400 p-1 text-white rounded-full font-bold"
            onClick={() => console.log("asas")}
          >
            <Icons type="x-mark" size={5}></Icons>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end">
        <div className="text-sm text-gray-500">{date}</div>
        <div className="text-sm text-primary-800">{invoiceId}</div>
        <div className="text-sm">{price}</div>
      </div>
    </div>
  );
}

export default ActionCard;
