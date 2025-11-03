"use client";
import { createContext, useEffect, useState } from "react";
import { menu } from "./../api/menu";

export const MenuContext = createContext([]);

export const MenuProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(menu.data);
  }, []);
  return (
    <MenuContext.Provider value={{ menuData, setMenuData }}>
      {children}
    </MenuContext.Provider>
  );
};
