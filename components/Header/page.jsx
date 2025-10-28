import Image from "next/image";
import "./header.scss";
import HeaderLogo from "@/public/images/common/header-logo.svg";
import { menu } from "./menu.js";

const Header = () => {
  console.log(menu);
  return (
    <div className="header">
      <div className="left">
        <a href="#">
          <Image src={HeaderLogo} alt="header-logo" />
        </a>
        <ul>
          {menu.data.map((navItem, index) => {
            return (
              <li key={index}>
                <span>{navItem.value}</span>
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
