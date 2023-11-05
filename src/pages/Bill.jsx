import BillTable from "../components/BillTable";
import PageTitle from "../components/PageTitle";

const Bill = () => {
  return (
    <section>
      <PageTitle title="Upcoming Bills" />
      <div className="grid grid-cols-1">
        <BillTable />
      </div>
    </section>
  );
};

export default Bill;
