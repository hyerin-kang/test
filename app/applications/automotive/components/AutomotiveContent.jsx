import { useState } from "react";
import { NewsArea } from "./NewsArea";
import { TabArea } from "./TabArea";
import "./../automotive.scss";
import { IntroArea } from "./IntroArea";
import { RelatedNews } from "../../../../components/RelatedNews/page";

export const AutomotiveContent = () => {
  const dataPath = "/application/news/automotive";
  return (
    <div id="AutomotiveContent">
      <TabArea />
      <IntroArea />
      {/* <NewsArea /> */}

      <RelatedNews dataPath={dataPath} />
    </div>
  );
};
