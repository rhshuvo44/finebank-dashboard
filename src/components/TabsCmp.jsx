import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TransactionsTable from "./TransactionsTable";

const TabsCmp = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>All</Tab>
        <Tab>Revenue</Tab>
        <Tab>Expenses</Tab>
      </TabList>
      <TabPanel>
        <div className="grid grid-cols-1">
          <TransactionsTable />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1">
          <TransactionsTable />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1">
          <TransactionsTable />
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabsCmp;
