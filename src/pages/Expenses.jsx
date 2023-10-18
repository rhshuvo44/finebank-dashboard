import BarCharts from "../components/BarCharts";
import ExpensesBreakdown from "../components/ExpensesBreakdown";
import PageTitle from "../components/PageTitle";
import { expensesData } from "../services";

const Expenses = () => {
  return (
    <section>
      <PageTitle title="Expenses Comparison" />
      <BarCharts data={expensesData} />
      <PageTitle title="Expenses Breakdown" />
      <ExpensesBreakdown />
    </section>
  );
};

export default Expenses;
