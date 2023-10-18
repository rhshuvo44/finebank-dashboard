import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "./Card";

const BarCharts = ({ data }) => {
  return (
    <Card>
      <div className="pt-5 w-full">
        <BarChart width={1000} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            width={170}
            wrapperStyle={{
              top: -50,
              right: 20,

              lineHeight: "40px",
            }}
          />
          <Bar dataKey="previous" fill="#9F9F9F" barSize={10} />
          <Bar dataKey="current" fill="#299D91" barSize={10} />
        </BarChart>
      </div>
    </Card>
  );
};

export default BarCharts;
