"use client";

import React from "react";
import BreadCrumb from "../components/ui/BreadCrumb";
import Card from "../components/ui/Card";
import Icons from "../components/ui/Icons";
import Panel from "../components/ui/Panel";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import data from "./../payment-settlements/data.json";
import { parseISO, format } from "date-fns";

function Page() {
  const cards = [
    {
      label: "Invoice",
      count: "13,212",
      stats: "-12%",
      icon: "bills",
      theme: "bg-primary-800",
    },
    {
      label: "Amount",
      count: "$10,112",
      stats: "+3%",
      icon: "price",
      theme: "bg-orange-400",
    },
    {
      label: "Approve",
      count: "222",
      stats: "+6%",
      icon: "check",
      theme: "bg-green-400",
    },
    {
      label: "Reject",
      count: "12",
      stats: "-1%",
      icon: "x-mark",
      theme: "bg-red-400",
    },
  ];

  const { records } = data;

  // Prepare data for each chart
  const totalInvoiceAmountByBuyer = records.reduce((acc: any, record) => {
    acc[record.Buyer] = (acc[record.Buyer] || 0) + parseFloat(record.Amount);
    return acc;
  }, {});

  const paymentStatusDistribution = records.reduce((acc: any, record) => {
    acc[record.Status] = (acc[record.Status] || 0) + 1;
    return acc;
  }, {});

  const invoiceAmountTrend = records
    .map((record) => ({
      x: new Date(record["Invoice Date"]).getTime(),
      y: parseFloat(record.Amount),
    }))
    .sort((a, b) => a.x - b.x);

  const scatterInvoiceVsDiscount = records.map((record) => ({
    x: parseFloat(record["Discount Amount"]),
    y: parseFloat(record.Amount),
  }));

  // Chart Configurations
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

  const paymentStatusChartOptions = {
    chart: { type: "pie" },
    title: { text: "" },
    series: [
      {
        name: "Status",
        colorByPoint: true,
        data: Object.keys(paymentStatusDistribution).map((key) => ({
          name: key,
          y: paymentStatusDistribution[key],
        })),
      },
    ],
    credits: {
      enabled: false,
    },
  };

  const invoiceTrendChartOptions = {
    chart: { type: "line" },
    title: { text: "" },
    xAxis: { type: "datetime" },
    yAxis: { title: { text: "Amount (USD)" } },
    series: [
      {
        name: "Invoice Amount",
        data: invoiceAmountTrend,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  const scatterChartOptions = {
    chart: { type: "scatter" },
    title: { text: "" },
    xAxis: { title: { text: "Discount Amount (USD)" } },
    yAxis: { title: { text: "Invoice Amount (USD)" } },
    series: [
      {
        name: "Invoices",
        data: scatterInvoiceVsDiscount,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  // Extract Data for Chart
  const categories = records.map((record) => record["Invoice Number"]); // Use Invoice Numbers as categories
  const discountAmounts = records.map((record) =>
    parseFloat(record["Discount Amount"])
  );
  const invoiceAmounts = records.map((record) => parseFloat(record.Amount));

  // Bar Chart Configuration
  const barChartOptions = {
    chart: { type: "bar" },
    title: { text: "Discount Amount vs. Invoice Amount" },
    xAxis: {
      categories,
      title: { text: "Invoice Number" },
    },
    yAxis: {
      min: 0,
      title: { text: "Amount (USD)" },
    },
    series: [
      {
        name: "Discount Amount",
        data: discountAmounts,
        color: "#FF4081", // Custom color for Discount Amount
      },
      {
        name: "Invoice Amount",
        data: invoiceAmounts,
        color: "#536DFE", // Custom color for Invoice Amount
      },
    ],
    tooltip: {
      pointFormat: "{series.name}: <b>${point.y}</b>",
    },
    legend: {
      reversed: false,
    },
  };

  const spline = {
    chart: {
      type: "spline",
    },
    title: {
      text: "",
    },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        // don't display the year
        month: "%b",
        year: "%b",
      },
      title: {
        text: "Date",
      },
    },
    yAxis: {
      title: {
        text: "Dynamic Discounting",
      },
      min: 0,
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br>",
      pointFormat: "{point.x:%e. %b}: {point.y:.2f} m",
    },

    plotOptions: {
      series: {
        marker: {
          symbol: "circle",
          fillColor: "#FFFFFF",
          enabled: true,
          radius: 2.5,
          lineWidth: 1,
          lineColor: null,
        },
      },
    },

    colors: ["#6CF", "#39F", "#06C", "#036", "#000"],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
      {
        name: "Invoive Amount",
        data: [
          ["1970-11-05", 0],
          ["1970-11-12", 0.1],
          ["1970-11-21", 0.15],
          ["1970-11-22", 0.19],
          ["1970-11-27", 0.17],
          ["1970-11-30", 0.27],
          ["1970-12-02", 0.25],
          ["1970-12-04", 0.27],
          ["1970-12-05", 0.26],
          ["1970-12-06", 0.25],
          ["1970-12-07", 0.26],
          ["1970-12-08", 0.26],
          ["1970-12-09", 0.25],
          ["1970-12-10", 0.25],
          ["1970-12-11", 0.25],
          ["1970-12-12", 0.26],
          ["1970-12-22", 0.22],
          ["1970-12-23", 0.22],
          ["1970-12-24", 0.22],
          ["1970-12-25", 0.24],
          ["1970-12-26", 0.24],
          ["1970-12-27", 0.24],
          ["1970-12-28", 0.24],
          ["1970-12-29", 0.24],
          ["1970-12-30", 0.22],
          ["1970-12-31", 0.18],
          ["1971-01-01", 0.17],
          ["1971-01-02", 0.23],
          ["1971-01-09", 0.5],
          ["1971-01-10", 0.5],
          ["1971-01-11", 0.53],
          ["1971-01-12", 0.48],
          ["1971-01-13", 0.4],
          ["1971-01-17", 0.36],
          ["1971-01-22", 0.69],
          ["1971-01-23", 0.62],
          ["1971-01-29", 0.72],
          ["1971-02-02", 0.95],
          ["1971-02-10", 1.73],
          ["1971-02-15", 1.76],
          ["1971-02-26", 2.18],
          ["1971-03-02", 2.22],
          ["1971-03-06", 2.13],
          ["1971-03-08", 2.11],
          ["1971-03-09", 2.12],
          ["1971-03-10", 2.11],
          ["1971-03-11", 2.09],
          ["1971-03-12", 2.08],
          ["1971-03-13", 2.08],
          ["1971-03-14", 2.07],
          ["1971-03-15", 2.08],
          ["1971-03-17", 2.12],
          ["1971-03-18", 2.19],
          ["1971-03-21", 2.11],
          ["1971-03-24", 2.1],
          ["1971-03-27", 1.89],
          ["1971-03-30", 1.92],
          ["1971-04-03", 1.9],
          ["1971-04-06", 1.95],
          ["1971-04-09", 1.94],
          ["1971-04-12", 2],
          ["1971-04-15", 1.9],
          ["1971-04-18", 1.84],
          ["1971-04-21", 1.75],
          ["1971-04-24", 1.69],
          ["1971-04-27", 1.64],
          ["1971-04-30", 1.64],
          ["1971-05-03", 1.58],
          ["1971-05-06", 1.52],
          ["1971-05-09", 1.43],
          ["1971-05-12", 1.42],
          ["1971-05-15", 1.37],
          ["1971-05-18", 1.26],
          ["1971-05-21", 1.11],
          ["1971-05-24", 0.92],
          ["1971-05-27", 0.75],
          ["1971-05-30", 0.55],
          ["1971-06-03", 0.35],
          ["1971-06-06", 0.21],
          ["1971-06-09", 0],
        ],
      },
      {
        name: "Dynamic Discounting",
        data: [
          ["1970-11-03", 0],
          ["1970-11-09", 0],
          ["1970-11-12", 0.03],
          ["1970-11-15", 0],
          ["1970-11-24", 0],
          ["1970-11-27", 0.06],
          ["1970-11-30", 0.05],
          ["1970-12-03", 0.05],
          ["1970-12-06", 0.07],
          ["1970-12-09", 0.09],
          ["1970-12-15", 0.09],
          ["1970-12-18", 0.13],
          ["1970-12-21", 0.17],
          ["1970-12-24", 0.32],
          ["1970-12-27", 0.62],
          ["1971-01-03", 0.6],
          ["1971-01-09", 0.63],
          ["1971-01-12", 0.74],
          ["1971-01-15", 0.8],
          ["1971-01-18", 0.97],
          ["1971-01-21", 0.87],
          ["1971-01-24", 0.98],
          ["1971-01-27", 0.87],
          ["1971-01-30", 0.98],
          ["1971-02-03", 1.09],
          ["1971-02-06", 1.24],
          ["1971-02-09", 1.26],
          ["1971-02-12", 1.21],
          ["1971-02-15", 1.12],
          ["1971-02-18", 1.35],
          ["1971-02-21", 1.65],
          ["1971-02-24", 1.64],
          ["1971-02-27", 1.58],
          ["1971-03-03", 1.55],
          ["1971-03-06", 1.62],
          ["1971-03-09", 1.55],
          ["1971-03-12", 1.69],
          ["1971-03-15", 1.7],
          ["1971-03-18", 1.95],
          ["1971-03-21", 1.91],
          ["1971-03-27", 2.08],
          ["1971-03-30", 2.17],
          ["1971-04-03", 2.09],
          ["1971-04-12", 2.04],
          ["1971-04-15", 1.91],
          ["1971-04-18", 1.93],
          ["1971-04-21", 1.79],
          ["1971-04-24", 1.72],
          ["1971-04-27", 1.79],
          ["1971-05-03", 1.74],
          ["1971-05-06", 1.66],
          ["1971-05-09", 1.56],
          ["1971-05-12", 1.37],
          ["1971-05-15", 1.2],
          ["1971-05-18", 1.18],
          ["1971-05-21", 0.93],
          ["1971-05-24", 0.77],
          ["1971-05-27", 0.63],
          ["1971-05-30", 0.47],
          ["1971-06-03", 0.22],
          ["1971-06-06", 0.0],
        ],
      },
    ],
  };

  // Step 1: Aggregate discounts by month
  const discountByMonth = records.reduce((acc: any, record) => {
    const month = format(parseISO(record["Invoice Date"]), "yyyy-MM");
    acc[month] = (acc[month] || 0) + parseFloat(record["Discount Amount"]);
    return acc;
  }, {});

  // Step 2: Prepare Highcharts data
  const seriesData = Object.entries(discountByMonth).map(
    ([month, discount]) => ({
      name: month,
      y: discount,
    })
  );

  // Highcharts Options
  const chartOptions = {
    chart: { type: "pie" },
    title: { text: "" },
    tooltip: {
      pointFormat:
        "<b>{point.name}</b>: ${point.y:.2f} ({point.percentage:.1f}%)",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: ${point.y:.2f}",
        },
      },
    },
    series: [
      {
        name: "Discount",
        colorByPoint: true,
        data: [
          {
            name: "Jan 2024",
            y: 3814.250000000001,
          },
          {
            name: "Feb 2024",
            y: 2314.250000000001,
          },
          {
            name: "Mar 2024",
            y: 2324.250000000001,
          },
          {
            name: "Apr 2024",
            y: 2324.250000000001,
          },
          {
            name: "May 2024",
            y: 2324.250000000001,
          },
          {
            name: "Jun 2024",
            y: 231.250000000001,
          },
          {
            name: "Jul 2024",
            y: 2224.250000000001,
          },
          {
            name: "Aug 2024",
            y: 224.250000000001,
          },
          {
            name: "Sept 2024",
            y: 232.250000000001,
          },
          {
            name: "Oct 2024",
            y: 542.250000000001,
          },
          {
            name: "Nov 2024",
            y: 1212.250000000001,
          },
          {
            name: "Dec 2024",
            y: 224.250000000001,
          },
        ],
      },
    ],
  };

  console.log(seriesData);
  return (
    <>
      <BreadCrumb page={"Analytics"} />

      <div className="px-4">
        <div className="flex gap-4 items-center justify-center">
          {cards.map((c) => (
            <div className="lg:w-[24%]" key={c.label}>
              <Card
                title={c.label}
                count={c.count}
                stats={c.stats}
                theme={c.theme}
              >
                <Icons type={c.icon} />
              </Card>
            </div>
          ))}
        </div>

        <div className="flex py-4 gap-4">
          <div className="flex-auto">
            <Panel
              title="Total Invoice Amount by Buyer"
              onViewMore={() => console.log()}
              h={"h-[100%]"}
            >
              <HighchartsReact
                highcharts={Highcharts}
                options={totalInvoiceChartOptions}
              />
            </Panel>
          </div>
          <div className="w-[30%]">
            <Panel
              title="Payment Status Distribution"
              onViewMore={() => console.log()}
              h={"h-[100%]"}
            >
              <HighchartsReact
                highcharts={Highcharts}
                options={paymentStatusChartOptions}
              />
            </Panel>
          </div>
        </div>

        <div className="flex py-4 gap-4">
          <div className="flex-auto">
            <Panel
              title="Invoice Amount vs Discounting Over Time"
              onViewMore={() => console.log()}
              h={"h-[100%]"}
            >
              <HighchartsReact highcharts={Highcharts} options={spline} />
            </Panel>
          </div>
          <div className="w-[30%]">
            <Panel
              title="Discount Earnings Distribution"
              onViewMore={() => console.log()}
              h={"h-[100%]"}
            >
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
