import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const SlideComponent = ({ data = [], keyName }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [index, setIndex] = useState(1);

  //3의 배수로 배열 재정렬
  const renderData = (data) => {
    let arr = data;
    if (data?.length % 3) {
      arr = arr.concat(Array.from(Array(3 - (data?.length % 3)).keys()));
    }
    return arr;
  };

  return (
    <Swiper
      ref={swiperRef}
      onSwiper={(swiper) => {
        setSwiperRef(swiper);
      }}
      spaceBetween={0}
      onSlideChange={(swiper) => {
        setSwiperRef(swiper);
        setIndex(swiper?.activeIndex + 1);
      }}
      className="mySwiper"
      breakpoints={{
        0: {
          spaceBetween: 8,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 12,
          slidesPerGroup: 3,
        },
      }}
      modules={[Pagination, Navigation]}
    >
      {data.length > 3 && (
        <div className="lg:flex hidden items-center gap-[12px]">
          <div className="text-subtext">
            <span>
              {Math.ceil(index / 3) < 10 ? 0 : ""}
              {Math.ceil((index + 1) / 3)}
            </span>
            <span className="opacity-40">
              /
              {renderData(data)?.length > 27
                ? Math.ceil(renderData(data)?.length / 3)
                : "0" + Math.ceil(renderData(data)?.length / 3)}
            </span>
          </div>
          <div onClick={() => swiperRef.slideTo(swiperRef?.activeIndex - 3)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              className="cursor-pointer"
            >
              <path
                d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                fill="white"
              />
              <path
                d="M24 17.9999L22.9998 17L18 21.9984L22.9998 27L24 26.0001L19.9993 21.9984L24 17.9999Z"
                fill="#111111"
              />
            </svg>
          </div>

          <div onClick={() => swiperRef.slideTo(swiperRef?.activeIndex + 3)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              className="cursor-pointer"
            >
              <path
                d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                fill="white"
              />
              <path
                d="M20 26.0001L21.0002 27L26 22.0016L21.0002 17L20 17.9999L24.0007 22.0016L20 26.0001Z"
                fill="#111111"
              />
            </svg>
          </div>
        </div>
      )}
      {renderData(data)?.map((product, i) => {
        return (
          <SwiperSlide key={product?.key || `empty-${i}`}>
            {product.path ? (
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
            ) : (
              <div className="">empty</div> //빈칸
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideComponent;
