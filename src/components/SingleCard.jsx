import { Link } from "react-router-dom";
import Card from "./Card";
import { AiOutlineRight } from "react-icons/ai";
const SingleCard = ({ cardInfo }) => {
  const { id, accountType, accountName, accountNumber, amount } = cardInfo;
  return (
    <Card>
      <div className="flex justify-between ">
        <p className="text-secondary">{accountType}</p>
        <p className="text-right text-secondary">{accountName}</p>
      </div>
      <h2 className="card-title text-black">{accountNumber}</h2>
      <p className="text-secondary">Account Number</p>
      <h2 className="card-title text-black">$ {amount}</h2>
      <p className="text-secondary">Total amount</p>
      <div className="card-actions justify-between items-center">
        <button className="text-primary">Remove</button>
        <Link
          to={`/balance/balance-detail/${id}`}
          className="btn btn-primary capitalize"
        >
          Details <AiOutlineRight />
        </Link>
      </div>
    </Card>
  );
};

export default SingleCard;
