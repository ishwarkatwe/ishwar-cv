"use client";

import React from "react";
import * as DATA from "./data.json";
import DataGrid, {
  COLUMN_TYPE,
  ICOLUMN,
} from "../components/DataGrid/DataGrid";
import BreadCrumb from "../components/ui/BreadCrumb";

 const columns: ICOLUMN[] = [
  { label: "Buyer", key: "Buyer" },
  { label: "Seller", key: "Seller" },
  {
    label: "Invoice Number",
    key: "Invoice Number",
    type: COLUMN_TYPE.LINK,
  },
  { label: "Invoice Date", key: "Invoice Date", type: COLUMN_TYPE.DATE },
  { label: "CCY", key: "Ccy" },
  { label: "Amount", key: "Amount", type: COLUMN_TYPE.CURRENCY },
  { label: "Due Date", key: "Due Date", type: COLUMN_TYPE.DATE },
  { label: "Discount Status", key: "Discounting" },
  {
    label: "Payment Status",
    key: "Status",
    type: COLUMN_TYPE.BADGE,
    formatter: (row: any) => {
      return row["Status"] === "Paid" ? (
        <span className="bg-green-400 text-white px-2 py-1 rounded-md text-xs w-[80px] inline-block text-center">
          Paid
        </span>
      ) : row["Status"] === "Unpaid" ? (
        <span className="bg-orange-400 text-white px-2 py-1 rounded-md text-xs w-[80px] inline-block text-center">
          Un Paid
        </span>
      ) : (
        <span className="bg-blue-400 text-white px-2 py-1 rounded-md text-xs w-[80px] inline-block text-center">
          Pending
        </span>
      );
    },
  },
  { label: "Payment Date", key: "Payment Date", type: COLUMN_TYPE.DATE },
  { label: "Tenor", key: "Tenor" },
  {
    label: "Discount Amount",
    key: "Discount Amount",
    type: COLUMN_TYPE.CURRENCY,
  },
  {
    label: "Net Amount Paid",
    key: "Net Amount Paid",
    type: COLUMN_TYPE.CURRENCY,
  },
];

function Upload() {
  const data = DATA.records;

  return (
    <>
      <BreadCrumb page={"Payment & Settlements"} />
      <DataGrid checkbox={false} data={data} columns={columns} />
    </>
  );
}

export default Upload;
