"use client";
import Image from "next/image";
import "./header.scss";
import { menu } from "./menu.js";
import { useState } from "react";
import GnbMenu from "./GnbMenu/page";
import Link from "next/link";
import IcoSearchWh from "@/public/images/icon/ico-search-white.svg";
import IcoSearchBlack from "@/public/images/icon/ico-search-black.svg";
import IcoCloseBk from "@/public/images/icon/ico-close-bk.svg";
import { motion, AnimatePresence } from "framer-motion";
import { searchArea } from "@/lib/framerMotion";

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const headerClass = `
    header 
    ${hoveredIndex !== null ? "open" : ""} 
    ${isSearchOpen ? "open-search" : ""}
  `;

  const handleSearchPage = () => {
    router.push("/search");
  };

  return (
    <div className={`header ${headerClass}`}>
      <div className="header-inner">
        <div className="left">
          <a href="/" className="logo"></a>
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
        <div className="right">
          <ul>
            <li>
              <Link href="/">
                <span>ESG</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>Contact us</span>
              </Link>
            </li>
            <li className="changeLan">언어변경</li>
            <li className="search-btn">
              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                }}
              >
                {isSearchOpen ? (
                  <Image src={IcoCloseBk} alt="ico-close-btn" />
                ) : (
                  <Image src={IcoSearchWh} alt="ico-search-btn" />
                )}
              </button>
              {/* 검색버튼 클릭시 */}

              <AnimatePresence mode="wait">
                {isSearchOpen && (
                  <motion.div
                    className="search-area"
                    variants={searchArea}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <div className="input-box">
                      <input
                        id="searchInput"
                        name="searchInput"
                        type="text"
                        placeholder="검색어를 입력하세요"
                      />
                      <button onClick={handleSearchPage}>
                        <Image src={IcoSearchBlack} alt="ico-search-btn" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
