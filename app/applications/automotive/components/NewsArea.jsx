import useSWR from "swr";
import { axiosInstance } from "../../../../lib/axiosInstance";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const fetcher = (url) => axiosInstance.get(url);

export const NewsArea = () => {
  //슬라이드 관련
  const [relatedNews, setRelatedNews] = useState([]); // 뉴스 리스트
  const [currentPage, setCurrentPage] = useState(1); //초기세팅 1 (1/2 표시)
  const [swiperRef, setSwiperRef] = useState(null); //클릭시 슬라이드 이동

  //데이터 가져오기
  const {
    isLoading,
    data: newsData,
    error,
  } = useSWR(`/kr/application/news/automotive`, fetcher);

  //가져온 데이터 슬라이드 2개씩 보여주기 (짝수로 설정)
  useEffect(() => {
    const arr = newsData?.data;
    if (newsData?.data?.length % 2 && window?.innerWidth > 700) {
      arr.push({}); //리스트가 홀수이면 ? 빈객체 넣기 (왜냐하면 두개씩 보여야하니까)
    }
    setRelatedNews(arr);
  }, [newsData]);

  //페이지 번호 노출
  const handleSlideChange = (swiper) => {
    setCurrentPage(Math.floor(swiper.activeIndex / 2) + 1); // 2개씩이니까 / 2
  };
  if (isLoading) {
    return (
      <div>
        <p>로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p style={{ color: "red" }}>에러: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <p className="content-title">Related News</p>
      {/* 슬라이드 목록이 2개 이상이면 화살표, 인덱스 노출하기 */}
      {relatedNews?.length > 2 && (
        <>
          <span className="text-lg font-medium">
            {currentPage} / {Math.ceil(relatedNews.length / 2)}
          </span>
          <div onClick={() => swiperRef.slideTo(swiperRef.activeIndex - 2)}>
            ←
          </div>
          <div onClick={() => swiperRef.slideTo(swiperRef.activeIndex + 2)}>
            →
          </div>
        </>
      )}
      <Swiper
        ref={swiperRef}
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) =>
          setCurrentPage(Math.floor(swiper.activeIndex / 2) + 1)
        }
        spaceBetween={0}
        breakpoints={{
          375: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
        }}
        modules={[Navigation, Pagination]}
      >
        {relatedNews?.map((item) => (
          <SwiperSlide key={item.mediaCenterMasterId}>
            {item.title ? (
              <Link
                href={`/kr/media/newsroom/${item.mediaCenterMasterId}`}
                className="border p-4 block"
              >
                <p>{item.category}</p>
                <p>{item.title}</p>
                <p>{item.createDateTime}</p>
              </Link>
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
