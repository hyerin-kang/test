import React from "react";
import "./../automotive.scss";

export const TabArea = ({ tab, setTab, tabs }) => {
  return (
    <div className="top-box">
      <div className="title-area"></div>
      <div className="tab-area">
        {tabs.map((item) => {
          const isActive = tab === item.key;
          return (
            <div
              className={`tab ${isActive ? "active" : ""} `}
              key={item.key}
              onClick={() => {
                setTab(item.key);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
