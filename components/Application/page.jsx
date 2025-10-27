"use client";
import Image from "next/image";
import Link from "next/link";
import icoLink from "@/public/images/icon/ico-link-arrow.svg";
import "./application.scss";

export default function Application() {
  const applicationData = [
    {
      mainApplicationsId: 15,
      file1: {
        fileId: 1188,
        originalName: "video_LCDBacklighting.mp4",
        name: "174151b4-ccb3-49c6-bbb7-b43e115894c7",
        size: 44214906,
        extension: ".mp4",
        mime: "video/mp4",
        classification: "main",
        path: "/assets/main/20240603/174151b4-ccb3-49c6-bbb7-b43e115894c7",
        originalPath:
          "/assets/main/20240603/174151b4-ccb3-49c6-bbb7-b43e115894c7",
      },
      file2: {
        fileId: 1189,
        originalName: "app_h_1.png",
        name: "0486197d-9543-4c66-a4b1-d9b8b25d60b2",
        size: 40447,
        extension: ".png",
        mime: "image/png",
        classification: "main",
        path: "/assets/main/20240528/0486197d-9543-4c66-a4b1-d9b8b25d60b2",
        originalPath:
          "/assets/main/20240528/0486197d-9543-4c66-a4b1-d9b8b25d60b2",
      },
      code: "ap01",
      codeValue: {
        value: "Display",
        depth: ["TV", "MNT", "Automotive", "NPC/TPC", "Mobile"],
      },
      subTitle:
        "Performance & Technical Leadership\nwith Powerful IP power\n123456789",
      linkUrl: "https://www.naver.com/",
    },
    {
      mainApplicationsId: 22,
      file1: {
        fileId: 1011,
        originalName: "video_automotive.mp4",
        name: "de3a7065-c690-464f-8fef-6cd90c06e4aa",
        size: 28395964,
        extension: ".mp4",
        mime: "video/mp4",
        classification: "main",
        path: "/assets/main/20240603/de3a7065-c690-464f-8fef-6cd90c06e4aa",
        originalPath:
          "/assets/main/20240603/de3a7065-c690-464f-8fef-6cd90c06e4aa",
      },
      file2: null,
      code: "ap02",
      codeValue: {
        value: "Automotive",
        depth: ["Exterior", "Interior"],
      },
      subTitle:
        "Total Solution Provider of automotive application through strong IP Power",
      linkUrl: "www.naver.com",
    },
    {
      mainApplicationsId: 36,
      file1: {
        fileId: 1253,
        originalName: "Lighting.mp4",
        name: "12ca8af5-3866-43e1-8998-9c0600451162",
        size: 16659805,
        extension: ".mp4",
        mime: "video/mp4",
        classification: "main",
        path: "/assets/main/20241029/12ca8af5-3866-43e1-8998-9c0600451162",
        originalPath:
          "/assets/main/20241029/12ca8af5-3866-43e1-8998-9c0600451162",
      },
      file2: {
        fileId: 1254,
        originalName: "app_h_2.png",
        name: "3e2e15fe-d238-4761-ad1e-cdc6ce58ec59",
        size: 58649,
        extension: ".png",
        mime: "image/png",
        classification: "main",
        path: "/assets/main/20241029/3e2e15fe-d238-4761-ad1e-cdc6ce58ec59",
        originalPath:
          "/assets/main/20241029/3e2e15fe-d238-4761-ad1e-cdc6ce58ec59",
      },
      code: "ap03",
      codeValue: {
        value: "Lighting",
        depth: ["Indoor", "Outdoor", "Horticulture", "Others"],
      },
      subTitle:
        "Total Solution Provider of automotive application through strong IP Power",
      linkUrl: "https://www.seoulsemicon.com/kr/applications/lighting",
    },
  ];

  console.log(applicationData, "applicationData");
  return (
    <div>
      <div style={{ position: "sticky" }}>
        {applicationData.map((item, index) => {
          return (
            <div
              key={index}
              className={`parallax ${index === 0 ? "first-parallax" : ""}`}
            >
              {index === 0 && <h1 className="section-title">Applications</h1>}
              <div
                className="parallax-item"
                style={{ top: `${index === 0 ? "0px" : "60px"}` }}
              >
                <div className="item-title">{item.codeValue.value}</div>
                <div className="item-wrap">
                  <div className="title-hover-area">
                    <h4 className="title">
                      <Link href={item.linkUrl} className="block">
                        <span
                          dangerouslySetInnerHTML={{
                            // dangerouslySetInnerHTML : 리액트가 __html 안에 있는 문자열을 실제 html태그로 변환해 렌더링 해준다
                            __html: item?.subTitle.replace(/\n/g, "<br />"),
                          }}
                        />
                      </Link>
                    </h4>
                  </div>
                  <div className="depth-area">
                    {item.codeValue.depth.map((codeItem, index) => {
                      return (
                        <div key={index}>
                          <p>{codeItem}</p>
                        </div>
                      );
                    })}
                  </div>
                  <Link href={item.linkUrl} className="ico-link-area">
                    <Image
                      src={icoLink}
                      width={46}
                      height={46}
                      alt="ico-link"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
