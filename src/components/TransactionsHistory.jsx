import { Link } from "react-router-dom";
import Card from "./Card";

const TransactionsHistory = () => {
  return (
    <Card>
      <div style={{ width: "90%" }}>
        <div className="overflow-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="font-bold capitalize text-black">Date</th>
                <th className="font-bold capitalize text-black">status</th>
                <th className="font-bold capitalize text-black">
                  Transaction Type
                </th>
                <th className="font-bold capitalize text-black">Receipt</th>
                <th className="font-bold capitalize text-black">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
              <tr>
                <th>17 Apr, 2023</th>
                <td>Complete</td>
                <td>Credit</td>
                <td>8C52d5DKDJ5</td>
                <td className="font-bold">$160.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link to="" className="btn btn-primary capitalize px-10">
          Load more
        </Link>
      </div>
    </Card>
  );
};

export default TransactionsHistory;
