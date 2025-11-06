"use client"; // import React, { useContext } from "react";
import { useContext } from "react";
import { SubMainBg } from "../../../components/SubMainBg/page";
import { MenuContext } from "@/context/MenuContext";
import { applicationData } from "../../../components/Application/data";
import { RelatedNews } from "../../../components/RelatedNews/page";
// import { MenuContext } from "../../../context/MenuContext";

export default function page() {
  const { menuData } = useContext(MenuContext);
  const dataPath = "/kr/application/news/lcd";
  return (
    <div>
      <SubMainBg
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
        video="/video/application/Automotive-video.mp4"
        title={["Automotive"]}
        subText={applicationData?.[1]?.subTitle}
      />
      <RelatedNews dataPath={dataPath} />
    </div>
  );
}
