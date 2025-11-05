import { useState } from "react";
import { NewsArea } from "./NewsArea";
import { TabArea } from "./TabArea";
import "./../automotive.scss";
import { IntroArea } from "./IntroArea";

export const AutomotiveContent = () => {
  return (
    <div id="AutomotiveContent">
      <TabArea />
      <IntroArea />
      <NewsArea />
    </div>
  );
};
