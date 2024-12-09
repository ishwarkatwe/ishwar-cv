// components/Chart.tsx
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

type ChartProps = {
  options: Highcharts.Options;
};

const Chart: React.FC<ChartProps> = ({ options }) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
