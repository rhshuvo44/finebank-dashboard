import { useParams } from "react-router-dom";
import AccountDetailCard from "../components/AccountDetailCard";
import PageTitle from "../components/PageTitle";
// import { balancesCards } from "../services";

const AccountDetails = () => {
  const { id } = useParams();
  console.log(id);
  //   balancesCards
  return (
    <section>
      <PageTitle title="Account Details" />
      <AccountDetailCard />
    </section>
  );
};

export default AccountDetails;
