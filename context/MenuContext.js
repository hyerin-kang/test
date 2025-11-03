"use client";
import { createContext, useEffect, useState } from "react";
import { menu as menuData } from "../api/menu";

export const MenuContext = createContext([]);

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(menuData.data);
  }, []);

  return (
    <MenuContext.Provider value={{ menuData: menu }}>
      {children}
    </MenuContext.Provider>
  );
};
