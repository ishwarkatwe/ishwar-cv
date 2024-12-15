"use client";

import BreadCrumb from "@/app/components/ui/BreadCrumb";
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import DataGrid, {
  COLUMN_TYPE,
  ICOLUMN,
} from "@/app/components/DataGrid/DataGrid";
import { useSearchParams } from "next/navigation";
import { useData, useFilterDateRange } from "@/app/notification/useDataLog";
import moment from "moment";

function page() {
  const today = moment().format("YYYY-MM-DD");
  const startDayOfMonth = moment().startOf("month").format("YYYY-MM-DD");
  const searchParams = useSearchParams();
  const [dataset, setDataset] = useState([]);
  const [fromDate, setFromDate] = useState(
    searchParams.get("from") || startDayOfMonth
  );
  const [toDate, setToDate] = useState(searchParams.get("to") || today);
  const [show, setShow] = useState(false);
  const chart = searchParams.get("chart");

  useEffect(() => {
    return setShow(chart === "false" ? false : true);
  }, [chart, dataset]);

  useEffect(() => {
    useData().then(({ records }) => {
      if (fromDate && toDate) {
        const data = useFilterDateRange(records, "Due Date", fromDate, toDate);
        setDataset(data);
      }
    });
  }, [fromDate, toDate]);

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

  // Prepare data for each chart
  const totalInvoiceAmountByBuyer =
    dataset &&
    dataset.reduce((acc: any, record: any) => {
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
            className="bg-gray-50 border border-gray-300 text-gray-700 py-1 px-3 rounded"
            defaultValue={fromDate || ""}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <span>To : </span>{" "}
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-700 py-1 px-3 rounded "
            defaultValue={toDate || ""}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </nav>
      {show && (
        <div className="px-4 pt-1 flex flex-col items-center">
          <HighchartsReact
            containerProps={{ style: { width: "100%" } }}
            highcharts={Highcharts}
            options={totalInvoiceChartOptions}
          />
        </div>
      )}
      {/* {JSON.stringify(dataset)} */}
      <DataGrid checkbox={false} data={dataset} columns={columns} />
    </>
  );
}

export default page;
