import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Account from "./Account";
import Security from "./Security";

const SettingTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Account</Tab>
        <Tab>Security</Tab>
      </TabList>
      <TabPanel>
        <Account />
      </TabPanel>
      <TabPanel>
        <Security />
      </TabPanel>
    </Tabs>
  );
};

export default SettingTabs;
