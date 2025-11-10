"use client";
import { useEffect, useState } from "react";
import "./popup.scss";
import IcoClose from "@/public/images/icon/ico-close.svg";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function PopUp() {
  const [show, setShow] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  //날짜 로컬스토리지 저장
  const closeToday = () => {
    const today = new Date();
    const todayStr = today.toDateString();
    localStorage.setItem("popupClosedToday", todayStr);
  };

  //렌더시 팝업 체크
  useEffect(() => {
    const closedToday = localStorage.getItem("popupClosedToday");
    const todayStr = new Date().toDateString();
    if (closedToday === todayStr) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  return (
    <div>
      {show && (
        <div className="popup">
          <div className="inner">
            PopUP 띄우기
            <div className="bottom-area">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    // onClick={closeToday}
                  />
                }
                label="오늘하루 보지않기"
              />
              <button
                className="close-btn"
                onClick={() => {
                  if (checked) closeToday(); // 체크되어 있으면 로컬스토리지 기록
                  setShow(false); // 팝업 닫기
                }}
              >
                <Image src={IcoClose} alt="ico-close" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
