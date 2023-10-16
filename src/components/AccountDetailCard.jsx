import { Link } from "react-router-dom";
import Card from "./Card";

const AccountDetailCard = () => {
  return (
    <Card>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex flex-col gap-10">
          <div>
            <p>Bank Name</p>
            <h4>AB Bank Ltd</h4>
          </div>
          <div>
            <p>Branch Name</p>
            <h4>park Street Branch</h4>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <p>Account type</p>
            <h4>Checking</h4>
          </div>
          <div>
            <p>Account Number</p>
            <h4>3388 4556 8860 8***</h4>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <p>Balance</p>
            <h4>$25,056.00</h4>
          </div>
        </div>
      </div>
      <div className="card-actions justify-start mt-8 items-center">
        <Link to="" className="btn btn-primary capitalize">
          Edit Details
        </Link>
        <button className="text-primary ml-20">Remove</button>
      </div>
    </Card>
  );
};

export default AccountDetailCard;
