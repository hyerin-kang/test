"use client";

import { axiosInstance } from "@/lib/axiosInstance";
import useSWR from "swr";
import Image from "next/image";
import { SubMainBg } from "../../../../components/SubMainBg/page";
import { useContext } from "react";
import { MenuContext } from "../../../../context/MenuContext";
import { TextReveal } from "../../../../components/TextReveal/page";
import SlideComponent from "./components/SlideComponent";
import "./exterior.scss";
import HeadlightPNG from "@/public/images/content/application/headlight.png";
import HeadlightMOPNG from "@/public/images/content/application/headlight_MO.png";
import ADBPNG from "@/public/images/content/application/ADB.png";
import ADBMOPNG from "@/public/images/content/application/ADB_MO.png";
import DRLPNG from "@/public/images/content/application/DRL.png";
import DRLMOPNG from "@/public/images/content/application/DRL_MO.png";
import TurnLightPNG from "@/public/images/content/application/turnLight.png";
import TurnLightMOPNG from "@/public/images/content/application/turnLight_MO.png";
import RearLightPNG from "@/public/images/content/application/rearLight.png";
import RearLightMOPNG from "@/public/images/content/application/rearLight_MO.png";
import GrillLightPNG from "@/public/images/content/application/grillLight.png";
import GrillLightMOPNG from "@/public/images/content/application/grillLight_MO.png";
import MirrorLampPNG from "@/public/images/content/application/mirrorLamp.png";
import MirrorLampMOPNG from "@/public/images/content/application/mirrorLamp_MO.png";
import ProjectionPNG from "@/public/images/content/application/projection.png";
import ProjectionMOPNG from "@/public/images/content/application/projection_MO.png";

const fetcher = (url) => axiosInstance.get(url).then((res) => res);

const renderBG = (key) => {
  if (typeof window === "undefined") return BGDefaultPNG;
  switch (key) {
    // automotive/exterior
    case "ap020101":
      return window?.innerWidth > 700 ? HeadlightPNG : HeadlightMOPNG;
    case "ap020102":
      return window?.innerWidth > 700 ? ADBPNG : ADBMOPNG;
    case "ap020103":
      return window?.innerWidth > 700 ? DRLPNG : DRLMOPNG;
    case "ap020104":
      return window?.innerWidth > 700 ? TurnLightPNG : TurnLightMOPNG;
    case "ap020105":
      return window?.innerWidth > 700 ? RearLightPNG : RearLightMOPNG;
    case "ap020106":
      return window?.innerWidth > 700 ? MirrorLampPNG : MirrorLampMOPNG;
    case "ap020107":
      return window?.innerWidth > 700 ? GrillLightPNG : GrillLightMOPNG;
    case "ap020108":
      return window?.innerWidth > 700 ? ProjectionPNG : ProjectionMOPNG;

    default:
      return BGDefaultPNG;
  }
};

export default function page() {
  const { menuData } = useContext(MenuContext);
  const { data: exteriorList, error } = useSWR(
    "/application/automotive/exterior",
    fetcher
  );

  console.log(exteriorList, "exteriorList");

  return (
    <div className="pt-25">
      {/* <SubMainBg
        data={[
          { title: "Home", link: "/" },
          {
            title: menuData[0]?.value || "Application",
            link: menuData[0]?.url || "",
          },
          {
            title: menuData[0]?.depth?.[0]?.value || "Automotive",
            link: menuData[0]?.depth?.[0]?.url || "",
          },
        ]}
        title={["Exterior"]}
      /> */}
      {exteriorList?.map((item, idx) => {
        return (
          <TextReveal key={item.key}>
            <div className="exterior-list">
              <p className="left">
                {idx + 1 < 10 ? 0 : ""}
                {idx + 1}
              </p>

              <div className="right">
                <p className="content-title">{item.title}</p>
                <p>{item.desc}</p>

                <div>
                  <SlideComponent data={item?.child} keyName={item?.key} />
                  <Image src={renderBG(item?.key)} alt={item?.key} />
                </div>
              </div>
            </div>
          </TextReveal>
        );
      })}
    </div>
  );
}
