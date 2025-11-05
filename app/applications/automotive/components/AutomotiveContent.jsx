import { useState } from "react";
// import { ApplicatedProduct } from "./components/ApplicatedProduct";
import { NewsArea } from "./NewsArea";
import { TabArea } from "./TabArea";
import CarPNG from "@/public/images/content/automotiveCarBg.png";
import InteriorBGPNG from "@/public/images/content/interiorBG.png";
import Image from "next/image";
import { AUTOMOTIVE_PINS } from "../data/automotivePins";
import Link from "next/link";

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
  const [popup, setPopup] = useState();
  return (
    <div id="AutomotiveContent">
      <TabArea tab={tab} setTab={setTab} tabs={TABS} />
      <div className="tab-bg-img">
        <div className="pins-area">
          {AUTOMOTIVE_PINS[tab]?.map((pin) => (
            <div className="pin-group" key={pin.id}>
              <div
                className="ani-circle"
                onClick={() => setPopup(pin.id)}
                onMouseup={() => setPopup(pin.id)}
                onMouseLeave={() => setPopup("")}
              >
                <div className="circle"></div>
              </div>
            </div>
            // <Link href={pin.href} key={pin.id} className="pin">
            //   <p className="title">{pin.title}</p>
            //   <ul className="pin-list">
            //     {pin.list.map((list, index) => (
            //       <li key={index}>{list}</li>
            //     ))}
            //   </ul>
            // </Link>
          ))}
        </div>
        <Image
          src={tab === "exterior" ? TABS[0].image : TABS[1].image}
          alt={`${
            tab === "exterior"
              ? TABS[0].label + "-image"
              : TABS[1].label + "-image"
          }`}
        />
      </div>

      <NewsArea />
    </div>
  );
};
