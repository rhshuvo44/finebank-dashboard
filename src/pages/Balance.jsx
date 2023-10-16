import PageTitle from "../components/PageTitle";
import SingleCard from "../components/SingleCard";

const Balance = () => {
  return (
    <section>
      <PageTitle title="Balance" />
      <div className="grid grid-cols-3 gap-5">
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </section>
  );
};

export default Balance;
