import ExpensesBreakdownSingle from "./ExpensesBreakdownSingle";

const ExpensesBreakdown = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ExpensesBreakdownSingle />
      <ExpensesBreakdownSingle />
      <ExpensesBreakdownSingle />
      <ExpensesBreakdownSingle />
      <ExpensesBreakdownSingle />
      <ExpensesBreakdownSingle />
    </div>
  );
};

export default ExpensesBreakdown;
