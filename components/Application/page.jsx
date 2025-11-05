"use client";
import Image from "next/image";
import Link from "next/link";
import icoLink from "@/public/images/icon/ico-link-arrow.svg";
import "./application.scss";
import { applicationData } from "./data.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Application() {
  return (
    <div>
      <div
        style={{
          background: "black",
          padding: "100px",
          height: "500px",
          color: "red",
        }}
      >
        {/* <div style={{ width: 300, height: 300 }}>
          <DotLottieReact
            src="/lottie/SquareBox.lottie"
            // animationData={lottieJson}
            loop
            autoplay
          />
        </div> */}
        MainBanner
      </div>
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
