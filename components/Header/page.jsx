"use client";
import Image from "next/image";
import "./header.scss";
import { useContext, useEffect, useState } from "react";
import GnbMenu from "./GnbMenu/page";
import Link from "next/link";
import IcoSearchWh from "@/public/images/icon/ico-search-white.svg";
import IcoSearchBlack from "@/public/images/icon/ico-search-black.svg";
import IcoCloseBk from "@/public/images/icon/ico-close-bk.svg";
import { motion, AnimatePresence } from "framer-motion";
import { searchArea } from "@/lib/framerMotion";
import { useRouter } from "next/navigation";
import { MenuContext } from "@/context/MenuContext";

const Header = () => {
  const { menuData } = useContext(MenuContext); // 메뉴데이터 api 가져오기
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  //헤더 스크롤 이벤트
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // 스크롤 방향 감지
      setIsScrollDown(currentY > lastScrollY);

      // 스크롤 여부 감지
      setIsScrolled(currentY > 100);

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const headerClass = `
    header 
    ${hoveredIndex !== null ? "open" : ""} 
    ${isSearchOpen ? "open-search" : ""} 
    ${isScrollDown ? "scroll-down" : "scroll-up"}
    ${lastScrollY == 0 ? "scroll-0" : ""}
  `;

  const handleSearchPage = () => {
    if (searchInput.trim() === "") return;
    router.push(`/search?query=${encodeURIComponent(searchInput)}`);
    setIsSearchOpen(false);
  };

  return (
    <div suppressHydrationWarning className={`header ${headerClass}`}>
      <div className="header-inner">
        <div className="left">
          <a href="/" className="logo"></a>
          <ul className="nav">
            {menuData.map((item, index) => {
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
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Image
                  src={
                    isSearchOpen
                      ? IcoCloseBk // 검색창 열려 있으면 닫기 버튼
                      : lastScrollY === 0
                      ? IcoSearchWh // 맨 위에 있을 땐 흰색 검색 아이콘
                      : IcoSearchBlack // 스크롤 했을 땐 검정색 검색 아이콘
                  }
                  alt="ico-search-btn"
                />
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
                        value={searchInput}
                        placeholder="검색어를 입력하세요"
                        onChange={(e) => setSearchInput(e.target.value)}
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
