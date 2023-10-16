import Card from "./Card";

const TransactionsHistory = () => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Date</th>
              <th>status</th>
              <th>Transaction Type</th>
              <th>Receipt</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>17 Apr, 2023</th>
              <td>Complete</td>
              <td>Credit</td>
              <td>8C52d5DKDJ5</td>
              <td>$160.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TransactionsHistory;
