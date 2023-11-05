import figma from "../assets/figma_logo.svg";
import adobe from "../assets/adobe-logo.svg";
import Card from "./Card";

const BillTable = () => {
  return (
    <Card>
      <div className="overflow-auto">
        <table className="table ">
          <thead>
            <tr>
              <th className="font-bold capitalize text-black">Deu Date</th>
              <th className="font-bold capitalize text-black">Logo</th>
              <th className="font-bold capitalize text-black">
                Item Description
              </th>
              <th className="font-bold capitalize text-black">Last Charge</th>
              <th className="font-bold capitalize text-black">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="bg-[#d2d2d240] p-2 rounded flex flex-col w-16 justify-center items-center">
                  <span className="text-[##878787]">May</span>{" "}
                  <span className="text-secondary font-bold">17</span>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={figma} alt="figma" className="w-10 h-10" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Figma</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-2 w-64">
                  <h3 className="font-bold text-lg capitalize">
                    figma - Yearly plan
                  </h3>
                  <p className="text-neutral">
                    For advanced security and more flexible controls, the
                    Professional plan helps you scale design processes
                    company-wide.
                  </p>
                </div>
              </td>

              <td className="text-[#9F9F9F]">17 May, 2023</td>
              <td className="font-bold">
                <span className="border border-gray-300 p-2">$160.00</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="bg-[#d2d2d240] p-2 rounded flex flex-col w-16 justify-center items-center">
                  <span className="text-[##878787]">Jun</span>
                  <span className="text-secondary font-bold">17</span>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={adobe} alt="adobe" className="w-10 h-10" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-red-600">Adobe</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-2 w-64">
                  <h3 className="font-bold text-lg capitalize">
                    Adobe Inc - Yearly plan
                  </h3>
                  <p className="text-neutral">
                    For advanced security and more flexible controls, the
                    Professional plan helps you scale design processes
                    company-wide.
                  </p>
                </div>
              </td>

              <td className="text-[#9F9F9F]">17 Jun, 2023</td>
              <td className="font-bold">
                <span className="border border-gray-300 p-2">$160.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default BillTable;
