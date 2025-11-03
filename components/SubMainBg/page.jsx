import "./subMainBg.scss";

export const SubMainBg = ({ data, video }) => {
  return (
    <div className="subPage-main">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "auto" }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="z-0 w-full h-full absolute top-0 lg:pt-[88px] pt-[56px]">
        <div className="max-w-screen-3xl w-full h-full mx-auto">
          <div className="flex h-full flex-col justify-between lg:p-[40px] p-[20px] border-b-[1px] border-[#30AE56] border-opacity-[0.2]">
            {/* 페이지 경로 */}
            {/* <Breadcrumb data={data} lang={lang} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
