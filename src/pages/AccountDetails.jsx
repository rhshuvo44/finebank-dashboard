import { useParams } from "react-router-dom";
import AccountDetailCard from "../components/AccountDetailCard";
// import { balancesCards } from "../services";

const AccountDetails = () => {
  const { id } = useParams();
  console.log(id);
  //   balancesCards
  return (
    <section>
      <AccountDetailCard />
    </section>
  );
};

export default AccountDetails;
