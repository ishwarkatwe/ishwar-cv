import Link from "next/link";
import React from "react";

function NotificationCard(props: any) {
  const { title, desc, date, invoiceId, price, status } = props.data;
  return (
    <>
      <Link
        href={"invoice/" + invoiceId}
        className={`flex justify-between border-l-2 px-2 py-1 my-2 hover:bg-slate-50 hover:shadow-lg ${
          status === "approve" ? "border-l-green-600" : "border-l-red-600"
        }`}
      >
        <div className="flex flex-col justify-between py-2">
          <div className="text-sm text-gray-800">{title}</div>
          <div className="text-xs">{desc}</div>
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="text-sm text-gray-500">{date}</div>
          <div className="text-sm text-primary-800">#{invoiceId}</div>
          <div className="text-sm">{price}</div>
        </div>
      </Link>
      <hr />
    </>
  );
}

export default NotificationCard;
