import "./../automotive.scss";
import { AUTOMOTIVE_TABS, AUTOMOTIVE_PINS } from "../data/automotiveData";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "../../../../components/TextReveal/page";

export const TabArea = () => {
  const [tab, setTab] = useState("exterior");
  const [popup, setPopup] = useState("");
  return (
    <>
      <div className={`top-box ${tab == "interior" ? "isWhite" : ""}`}>
        <TextReveal>
          <div className="title-area">
            <p className="content-title">Applicated Product</p>
            <p className="sub-title">
              자동차 내부의 디스플레이 시스템에서 중요한 역할을 하며, 우수한
              성능과 신뢰성을 제공하여 운전자들에게 탁월한 시각적 경험을
              제공합니다.
            </p>
          </div>
        </TextReveal>
        <TextReveal>
          <div className={`tab-area `}>
            {AUTOMOTIVE_TABS.map((item) => {
              const isActive = tab === item.key;
              return (
                <div
                  className={`tab ${isActive ? "active" : ""} `}
                  key={item.key}
                  onClick={() => {
                    setTab(item.key);
                  }}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        </TextReveal>
      </div>
      <TextReveal>
        <div className="tab-bg-img">
          <div className="pins-area">
            {AUTOMOTIVE_PINS[tab]?.map((pin) => (
              <div
                className={`pin-point ${pin.positionClass}`}
                key={pin.id}
                onMouseEnter={() => {
                  setPopup(pin.id);
                }}
                onMouseLeave={() => {
                  setPopup("");
                }}
              >
                <div className="circle"></div>
                {popup === pin.id && (
                  <Link href={pin.href} className="pin">
                    <p className="title">{pin.title}</p>
                    <ul className="pin-list">
                      {pin.list.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <Image
            src={
              tab === "exterior"
                ? AUTOMOTIVE_TABS[0].image
                : AUTOMOTIVE_TABS[1].image
            }
            alt={`${tab}-image`}
          />
        </div>
      </TextReveal>
    </>
  );
};
