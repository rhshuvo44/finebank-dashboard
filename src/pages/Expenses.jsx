import BarCharts from "../components/BarCharts";
import PageTitle from "../components/PageTitle";
import { expensesData } from "../services";

const Expenses = () => {
  return (
    <section>
      <PageTitle title="Expenses Comparison" />
      <BarCharts data={expensesData} />
    </section>
  );
};

export default Expenses;
