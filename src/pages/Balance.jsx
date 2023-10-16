import PageTitle from "../components/PageTitle";
import SingleCard from "../components/SingleCard";
import { balancesCards } from "../services";

const Balance = () => {
  return (
    <section>
      <PageTitle title="Balance" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {balancesCards?.map((cardInfo) => (
          <SingleCard key={cardInfo.id} cardInfo={cardInfo} />
        ))}
      </div>
    </section>
  );
};

export default Balance;
