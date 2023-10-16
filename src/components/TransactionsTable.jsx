import { Link } from "react-router-dom";
import Card from "./Card";
import { FaGamepad } from "react-icons/fa";
const TransactionsTable = () => {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th className="font-bold capitalize text-black">Items</th>
              <th className="font-bold capitalize text-black">Shop name</th>
              <th className="font-bold capitalize text-black">Date</th>
              <th className="font-bold capitalize text-black">
                Payment Method
              </th>
              <th className="font-bold capitalize text-black">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <FaGamepad className="w-10 h-10" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">GTR 5</div>
                  </div>
                </div>
              </td>
              <td>Gadget & Gear</td>
              <td>17 May, 2023</td>
              <td>Credit</td>
              <td className="font-bold">$160.00</td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <FaGamepad className="w-10 h-10" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">GTR 5</div>
                  </div>
                </div>
              </td>
              <td>Gadget & Gear</td>
              <td>17 May, 2023</td>
              <td>Credit</td>
              <td className="font-bold">$160.00</td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <FaGamepad className="w-10 h-10" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">GTR 5</div>
                  </div>
                </div>
              </td>
              <td>Gadget & Gear</td>
              <td>17 May, 2023</td>
              <td>Credit</td>
              <td className="font-bold">$160.00</td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <FaGamepad className="w-10 h-10" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">GTR 5</div>
                  </div>
                </div>
              </td>
              <td>Gadget & Gear</td>
              <td>17 May, 2023</td>
              <td>Credit</td>
              <td className="font-bold">$160.00</td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <FaGamepad className="w-10 h-10" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">GTR 5</div>
                  </div>
                </div>
              </td>
              <td>Gadget & Gear</td>
              <td>17 May, 2023</td>
              <td>Credit</td>
              <td className="font-bold">$160.00</td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <FaGamepad className="w-10 h-10" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">GTR 5</div>
                  </div>
                </div>
              </td>
              <td>Gadget & Gear</td>
              <td>17 May, 2023</td>
              <td>Credit</td>
              <td className="font-bold">$160.00</td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <FaGamepad className="w-10 h-10" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">GTR 5</div>
                  </div>
                </div>
              </td>
              <td>Gadget & Gear</td>
              <td>17 May, 2023</td>
              <td>Credit</td>
              <td className="font-bold">$160.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mt-5">
        <Link to="" className="btn btn-primary capitalize px-10">
          Load more
        </Link>
      </div>
    </Card>
  );
};

export default TransactionsTable;
