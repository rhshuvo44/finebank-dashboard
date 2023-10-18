import { BsArrowUp, BsHouse } from "react-icons/bs";

const ExpensesBreakdownSingle = () => {
  return (
    <div className="shadow-lg">
      <div className="bg-[#E8E8E8] flex justify-between items-center gap-4 p-4 ">
        <div className="flex justify-between items-center gap-4">
          <BsHouse className="bg-[#D1D1D1] w-10 h-10 p-2 rounded text-lg" />
          <div>
            <h3 className="font-bold text-sm text-secondary">Housing</h3>
            <p className="font-bold text-black">$250.00</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="flex items-center gap-2 font-bold text-sm text-neutral">
            15% <BsArrowUp className="text-error" />{" "}
          </p>
          <p className="text-sm text-secondary">Compare to last month</p>
        </div>
      </div>
      <div className=" flex flex-col justify-between  gap-4 p-4 ">
        <div className="border-b flex justify-between items-center gap-4 p-4">
          <h3 className="text-secondary font-bold">House Rent</h3>
          <div className="flex flex-col items-end gap-2">
            <p className="text-secondary font-bold">$230.00</p>
            <p className="text-neutral">17 May 2023</p>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-4 p-4">
          <h3 className="text-secondary font-bold">Parking</h3>
          <div className="flex flex-col items-end gap-2">
            <p className="text-secondary font-bold">$2 0.00</p>
            <p className="text-neutral">17 May 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesBreakdownSingle;
