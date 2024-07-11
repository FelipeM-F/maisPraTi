import { useState } from "react";
import tabsContent from "/public/content/tabsContent.json";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div id="tabs">
      <menu>
        {tabsContent.map((tab, index) => (
          <button
            key={index}
            type="button"
            className={activeTab === index ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </menu>
      <div id="tab-content">
        <ul>
          {tabsContent[activeTab].content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tabs;
