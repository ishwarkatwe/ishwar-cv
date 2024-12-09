"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HeatmapModule from "highcharts/modules/heatmap";

// Initialize the Heatmap module
if (typeof Highcharts === "object") {
  HeatmapModule(Highcharts);
}

interface HeatmapChartProps {
  data: number[][]; // Data for the heatmap
  xCategories: string[]; // Categories for the X-axis
  yCategories: string[]; // Categories for the Y-axis
}

const HeatmapChart: React.FC<HeatmapChartProps> = ({
  data,
  xCategories,
  yCategories,
}) => {
  const options: Highcharts.Options = {
    chart: {
      type: "heatmap",
      plotBorderWidth: 1,
    },
    title: {
      text: "Invoice Count Heatmap",
    },
    xAxis: {
      categories: xCategories,
      title: {
        text: "Due Dates",
      },
    },
    yAxis: {
      categories: yCategories,
      title: {
        text: "Weeks",
      },
    },
    colorAxis: {
      min: 0,
      minColor: "#FFFFFF",
      maxColor: "#FF5733",
    },
    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280,
    },
    series: [
      {
        name: "Invoice Count",
        borderWidth: 1,
        data: data, // [x, y, value]
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
        type: "heatmap",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HeatmapChart;
