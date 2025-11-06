import useSWR from "swr";
import { axiosInstance } from "../../../../lib/axiosInstance";
import Link from "next/link";

const fetcher = (url) => axiosInstance.get(url);
export const NewsArea = () => {
  const {
    isLoading,
    data: newsData,
    error,
  } = useSWR(`/kr/application/news/automotive`, fetcher);
  console.log(newsData, "newsData");
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
      {newsData.data?.map((item) => (
        <Link
          href={`/kr/media/newsroom/${item.mediaCenterMasterId}`}
          key={item.mediaCenterMasterId}
          className="border p-4 block"
        >
          <p>{item.category}</p>
          <p>{item.title}</p>
          <p>{item.createDateTime}</p>
        </Link>
      ))}
    </div>
  );
};
