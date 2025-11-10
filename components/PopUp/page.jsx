"use client";
import { useEffect, useState } from "react";
import IcoClose from "@/public/images/icon/ico-close.svg";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import useSWR from "swr";
import { axiosInstance } from "./../../lib/axiosInstance";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./popup.scss";

import DefaultThumb from "@/public/images/content/defult_thumb.svg";

const fetcher = (url) => axiosInstance.get(url).then((res) => res);

export default function PopUp() {
  const [show, setShow] = useState(null);
  const [checked, setChecked] = useState(false);

  //슬라이드
  const [swiperRef, setSwiperRef] = useState(null);
  const [index, setIndex] = useState(1);

  //뉴스 데이터
  const { data: recentNewsData, error } = useSWR(
    `/mediaCenter/newsroom?recordCountPerPage=3`,
    fetcher
  );

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  //날짜 로컬스토리지 저장
  const closeToday = () => {
    const today = new Date();
    const todayStr = today.toDateString();
    localStorage.setItem("popupClosedToday", todayStr);
  };

  //렌더시 팝업 체크
  useEffect(() => {
    const closedToday = localStorage.getItem("popupClosedToday");
    const todayStr = new Date().toDateString();
    if (closedToday === todayStr) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  return (
    <div>
      {show && (
        <div className="popup">
          <div className="inner">
            <Swiper
              ref={swiperRef}
              onSwiper={(swiper) => setSwiperRef(swiper)}
              loop={true}
              pagination={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              onSlideChange={(swiper) => {
                setSwiperRef(swiper);
                setIndex(swiper?.activeIndex + 1);
              }}
              className="mySwiper"
              modules={[Autoplay, Pagination, Navigation]}
            >
              {recentNewsData?.data?.map((popup) => (
                <SwiperSlide key={popup.mediaCenterMasterId}>
                  <div className="img-area">
                    {popup.file !== null ? (
                      <Image
                        loader={() =>
                          `${process.env.NEXT_PUBLIC_URL}${popup?.file?.path}`
                        }
                        src={`${process.env.NEXT_PUBLIC_URL}${popup?.file?.path}`}
                        alt={popup?.file?.originalName}
                        width={814}
                        height={580}
                        className="max-w-full w-full md:object-contain object-contain xl:max-h-[580px] md:h-[344px] h-[210px]"
                      />
                    ) : (
                      <Image
                        src={DefaultThumb}
                        alt="defult_thumb"
                        className="max-w-full w-full md:object-contain object-contain xl:max-h-[580px] md:h-[344px] h-[210px]"
                      />
                    )}
                  </div>
                  <div className="text-area">
                    <p className="category">{popup.category}</p>
                    <p className="title">{popup.title}</p>
                    <p className="time">{popup.createDateTime}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="bottom-area">
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="오늘하루 보지않기"
              />
              <button
                className="close-btn"
                onClick={() => {
                  if (checked) closeToday(); // 체크되어 있으면 로컬스토리지 기록
                  setShow(false); // 팝업 닫기
                }}
              >
                <Image src={IcoClose} alt="ico-close" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
