import { Link } from "react-router-dom";
import Card from "./Card";
import { AiOutlineRight } from "react-icons/ai";
const SingleCard = () => {
  return (
    <Card>
      <div className="flex justify-between ">
        <p className="text-secondary">Investment</p>
        <p className="text-right text-secondary">AB Bank Ltd</p>
      </div>
      <h2 className="card-title text-black">3388 4556 8860 8***</h2>
      <p className="text-secondary">Account Number</p>
      <h2 className="card-title text-black">$ 25000</h2>
      <p className="text-secondary">Total amount</p>
      <div className="card-actions justify-between items-center">
        <button className="text-primary">Remove</button>
        <Link to={`/`} className="btn btn-primary capitalize">
          Details <AiOutlineRight />
        </Link>
      </div>
    </Card>
  );
};

export default SingleCard;
