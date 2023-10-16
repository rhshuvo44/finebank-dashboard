import { useParams } from "react-router-dom";
// import { balancesCards } from "../services";

const AccountDetails = () => {
  const { id } = useParams();
  console.log(id);
  //   balancesCards
  return <div></div>;
};

export default AccountDetails;
