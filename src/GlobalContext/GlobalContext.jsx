import React, { createContext, useEffect, useRef, useState } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const lastScrollY = useRef(0);

  const navAppearance = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY.current) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
   
    lastScrollY.current = currentScroll;
  };
  useEffect(() => {
    window.addEventListener("scroll", navAppearance);
    return () => window.removeEventListener("scroll", navAppearance);
  }, []);

  const contextData = { isOpen, lastScrollY, setIsOpen, showMenu, setShowMenu };

  return (
    <GlobalContext.Provider value={contextData}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
