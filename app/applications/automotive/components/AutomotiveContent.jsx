import { useState } from "react";
// import { ApplicatedProduct } from "./components/ApplicatedProduct";
import { NewsArea } from "./NewsArea";
import { TabArea } from "./TabArea";
import CarPNG from "@/public/images/content/automotiveCarBg.png";
import InteriorBGPNG from "@/public/images/content/interiorBG.png";
import Image from "next/image";
import { AUTOMOTIVE_PINS } from "../data/automotivePins";

const TABS = [
  { label: "Exterior", key: "exterior", image: CarPNG },
  {
    label: "Interior",
    key: "interior",
    image: InteriorBGPNG,
  },
];
export const AutomotiveContent = () => {
  const [tab, setTab] = useState("exterior");
  return (
    <div id="AutomotiveContent">
      <TabArea tab={tab} setTab={setTab} tabs={TABS} />
      <div className="tab-bg-img">
        <Image
          src={tab === "exterior" ? TABS[0].image : TABS[1].image}
          alt="Automotive background img"
        />
      </div>
      {AUTOMOTIVE_PINS.map((pin) => {
        return <div key={pin.id}>{pin.title}</div>;
      })}
      <NewsArea />
    </div>
  );
};
