"use client";

import BreadCrumb from "@/app/components/ui/BreadCrumb";
import React from "react";
import data from "./../../payment-settlements/data.json";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { columns } from "@/app/payment-settlements/page";
import DataGrid from "@/app/components/DataGrid/DataGrid";

function page() {
  const { records } = data;

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
