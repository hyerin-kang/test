"use client";
import Image from "next/image";
import "./header.scss";
import HeaderLogo from "@/public/images/common/header-logo.svg";
import { menu } from "./menu.js";
import { useState } from "react";
import GnbMenu from "./GnbMenu/page";

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="header">
      <div className="left">
        <a href="/">
          <Image src={HeaderLogo} alt="header-logo" width={140} height={40} />
        </a>
        <ul className="nav">
          {menu.data.map((item, index) => {
            return (
              <li
                key={index}
                className="nav-item"
                onMouseOver={() => {
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
              >
                {/* 적용분야, 기술, 제품 ... */}
                <span>{item.value}</span>
                {hoveredIndex === index && (
                  <div className="gnb-menu">
                    <GnbMenu
                      gnbMenuName={item.value}
                      gnbMenuData={item.depth}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Header;
