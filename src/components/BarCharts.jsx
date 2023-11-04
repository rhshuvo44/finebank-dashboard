import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "./Card";
import { useEffect, useState } from "react";

const BarCharts = ({ data }) => {
  // State to store the width of the chart container
  // const [chartWidth, setChartWidth] = useState(window.innerWidth);

  // // Function to update the chart width
  // const updateChartWidth = () => {
  //   setChartWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   // Listen for window resize events and update chart width
  //   window.addEventListener("resize", updateChartWidth);
  //   return () => {
  //     // Remove the event listener when the component unmounts
  //     window.removeEventListener("resize", updateChartWidth);
  //   };
  // }, []);
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            width={170}
            wrapperStyle={{
              top: -40,
              right: 20,
              lineHeight: "40px",
            }}
          />
          <Bar dataKey="previous" fill="#9F9F9F" barSize={10} />
          <Bar dataKey="current" fill="#299D91" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default BarCharts;
