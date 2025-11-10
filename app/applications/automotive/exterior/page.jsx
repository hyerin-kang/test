"use client";
import { axiosInstance } from "@/lib/axiosInstance";
import useSWR from "swr";
import { SubMainBg } from "../../../../components/SubMainBg/page";
import { useContext, useState } from "react";
import { MenuContext } from "../../../../context/MenuContext";
import Image from "next/image";
import { TextReveal } from "../../../../components/TextReveal/page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
// 또는
// import { useSWR } from "swr";

const fetcher = (url) => axiosInstance.get(url).then((res) => res);

export default function page() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [index, setIndex] = useState(1);
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
      {exteriorList?.map((item) => {
        return (
          <TextReveal key={item.key} className="border-t border-t-green-400">
            <p className="content-title">{item.title}</p>
            <p>{item.desc}</p>
            <Swiper
              ref={swiperRef}
              onSwiper={(swiper) => setSwiperRef(swiper)}
              onSlideChange={(swiper) => {
                setSwiperRef(swiper);
                setIndex(swiper?.activeIndex + 1);
              }}
              modules={[Pagination, Navigation]}
            >
              {item.child?.map((product) => {
                return (
                  <SwiperSlide>
                    <Link key={product.key} href={product.path}>
                      {product.title}

                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={320}
                          height={0}
                          //   className="w-full h-full object-contain"
                        />
                      ) : null}
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </TextReveal>
        );
      })}
    </div>
  );
}
