"use client";

import BreadCrumb from "@/app/components/ui/BreadCrumb";
import React from "react";
import data from "./../../payment-settlements/data.json";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import DataGrid, {
  COLUMN_TYPE,
  ICOLUMN,
} from "@/app/components/DataGrid/DataGrid";

function page() {
  const { records } = data;
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
          <span className="bg-green-700 text-white px-2 py-1 rounded-md text-xs">
            Paid
          </span>
        ) : row["Status"] === "Unpaid" ? (
          <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs">
            Un Paid
          </span>
        ) : (
          <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">
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

  // Prepare data for each chart
  const totalInvoiceAmountByBuyer = records.reduce((acc: any, record) => {
    acc[record.Buyer] = (acc[record.Buyer] || 0) + parseFloat(record.Amount);
    return acc;
  }, {});

  const totalInvoiceChartOptions = {
    chart: { type: "column" },
    title: { text: "" },
    xAxis: { categories: Object.keys(totalInvoiceAmountByBuyer) },
    yAxis: { title: { text: "Amount (USD)" } },
    series: [
      {
        name: "Buyers",
        data: Object.values(totalInvoiceAmountByBuyer),
      },
    ],
    credits: {
      enabled: false,
    },
  };
  return (
    <>
      <nav className="flex items-center justify-between">
        <BreadCrumb page={"Details"} />
        <div className="px-4 flex gap-1 items-center mx-1">
          <span>From : </span>{" "}
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-700 py-1 px-3 rounded "
          />
          <span>To : </span>{" "}
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-700 py-1 px-3 rounded "
          />
        </div>
      </nav>

      <div className="px-4 pt-1 flex flex-col items-center">
        <HighchartsReact
          containerProps={{ style: { width: "100%" } }}
          highcharts={Highcharts}
          options={totalInvoiceChartOptions}
        />
      </div>
      <DataGrid checkbox={false} data={data.records} columns={columns} />
    </>
  );
}

export default page;
