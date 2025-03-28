import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState,useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef(null);

  const menuItems = ["Home", "About me", "Skills", "My work", "Contact me"];

   const openMenu = () => {
     if (sideMenuRef.current) {
       sideMenuRef.current.style.transform = "translateX(-16rem)";
     }
   };

   const closeMenu = () => {
     if (sideMenuRef.current) {
       sideMenuRef.current.style.transform = "translateX(16rem)"; // 0 rem also works but using 16 makes the animation faster since it will travel double the distance
     }
   }; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    handleScroll(); // Initial check in case page refreshes mid-scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={cn(
          "fixed z-50 flex w-full items-center justify-between px-5 py-4 lg:px-8 xl:px-[8%]",
          isScrolled &&
            "dark:bg-darkTheme bg-white/50 shadow-sm backdrop-blur-lg dark:shadow-[#fff]/20",
        )}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="mr-14 w-28 cursor-pointer"
          />
        </a>

        <ul
          className={cn(
            "hidden items-center gap-6 rounded-full px-12 py-3 md:flex lg:gap-8",
            {
              "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent":
                !isScrolled,
            },
          )}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="font-ovo"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="rounded-full bg-gray-200 p-2 transition-all duration-300 hover:scale-110 hover:rotate-12 dark:bg-gray-700"
            onClick={() => {
              setIsDarkMode((prev) => !prev);
            }}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contactme"
            className="ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 lg:flex dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

          {/* Mobile menu button */}
          <button className="block md:hidden" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="dark:bg-darkHover fixed top-0 -right-64 bottom-0 z-50 flex h-screen w-64 flex-col gap-4 bg-rose-50 px-10 py-20 transition duration-500 md:hidden dark:text-white"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="font-ovo"
                onClick={closeMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
