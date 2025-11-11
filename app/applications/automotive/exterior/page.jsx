"use client";
import { axiosInstance } from "@/lib/axiosInstance";
import useSWR from "swr";
import { SubMainBg } from "../../../../components/SubMainBg/page";
import { useContext, useState } from "react";
import { MenuContext } from "../../../../context/MenuContext";
import Image from "next/image";
import { TextReveal } from "../../../../components/TextReveal/page";

import Link from "next/link";
import SlideComponent from "./components/SlideComponent";

const fetcher = (url) => axiosInstance.get(url).then((res) => res);

export default function page() {
  const { menuData } = useContext(MenuContext);
  const { data: exteriorList, error } = useSWR(
    "/application/automotive/exterior",
    fetcher
  );

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
      {exteriorList?.map((item) => {
        return (
          <TextReveal key={item.key} className="border-t border-t-green-400">
            <p className="content-title">{item.title}</p>
            <p>{item.desc}</p>

            <SlideComponent data={item?.child} keyName={item?.key} />
          </TextReveal>
        );
      })}
    </div>
  );
}
