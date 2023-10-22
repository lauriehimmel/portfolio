import React, { useState } from "react";
import "./test-tabs.css";
import FirstTab from "./Tabs/FirstTab";
import SecondTab from "./Tabs/SecondTab";
import ThirdTab from "./Tabs/ThirdTab";
import TabNavItem from "./Tabs/TabNavItem";
import TabContent from "./Tabs/TabContent";
import Wink from "../../assets/Wink-Screenshot.jpg";


// https://blog.logrocket.com/how-to-build-tab-component-react/#creating-tab-component

const TestTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Wink" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Kindr" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Mastermind" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <FirstTab />
          <img className="project-img" src={Wink}/>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <p>Tab 2 works!</p>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>Tab 3 works!</p>
        </TabContent>
      </div>
    </div>
  );
};
export default TestTabs;
