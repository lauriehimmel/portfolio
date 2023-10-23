import React, { useState } from "react";
import "./Project-tabs.css";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Wink from "../../assets/Wink-Screenshot.jpg";
import Kindr from "../../assets/Kindr-Screenshot.jpg"


// https://blog.logrocket.com/how-to-build-tab-component-react/#creating-tab-component

const ProjectTabs = () => {
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
          <SecondTab />
          <img className="project-img" src={Kindr}/>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <ThirdTab />
          <img className="project-img" src={Kindr}/>
        </TabContent>
      </div>
    </div>
  );
};
export default ProjectTabs;