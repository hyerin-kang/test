"use client";
import { useContext } from "react";
import { SubMainBg } from "../../../components/SubMainBg/page";
import { MenuContext } from "./../../../context/MenuContext";
import { applicationData } from "./../../../components/Application/data";
import { AutomotiveContent } from "./components/AutomotiveContent";
// import AutomotiveVideo from "@/public/video/application/Automotive-video.mp4";
import "./automotive.scss";

export default function page() {
  const { menuData } = useContext(MenuContext);

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
      <AutomotiveContent />
    </div>
  );
}
