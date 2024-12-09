import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
  chart: {
    height: "40%",
  },
  credits: {
    enabled: false,
  },
};

function HeatMap() {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default HeatMap;
