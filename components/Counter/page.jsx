"use client";
import { useEffect, useRef, useState } from "react";

const Counter = ({ start = 0, end, duration = 2000, className }) => {
  const [value, setValue] = useState(start); //표시중 숫자
  const ref = useRef(null); //dom요소 참조
  const [isVisible, setIsVisible] = useState(false); // 화면에 보이는지

  //1.화면에 보이냐?
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  //2.화면에 보일때 애니메이션
  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(start + (end - start) * progress);
      setValue(currentValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    setValue(start);
    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <div ref={ref}>{value.toLocaleString()} +</div>;
};

export default Counter;
