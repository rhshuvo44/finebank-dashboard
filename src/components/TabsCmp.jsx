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
        <TransactionsTable />
      </TabPanel>
      <TabPanel>
        <TransactionsTable />
      </TabPanel>
      <TabPanel>
        <TransactionsTable />
      </TabPanel>
    </Tabs>
  );
};

export default TabsCmp;
