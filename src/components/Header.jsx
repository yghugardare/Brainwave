import { navigation } from "../constants/index";
import { brainwave } from "../assets/index";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  function toggleNavigation() {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }
  function handleClick() {
    if (!openNavigation) {
      return;
    }
    enablePageScroll();
    setOpenNavigation(false);
  }
  return (
    <div
      className={`fixed top-0 w-full left-0 z-50 border-b border-n-6  lg:bg-n-8/90 lg:backdrop-blur-sm
    ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}
    `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10">
        <a className="block w-[12rem] xl:mr-8 max-lg:py-4">
          <img src={brainwave} alt="Brainwave" height={40} width={190} />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          }  lg:static fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                className={`block relative text-2xl font-code uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold
                ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                }
                lg:leading-5 lg:hover:text-n-1 lg:px-12
                `}
                key={item.id}
                href={item.url}
                onClick={handleClick}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 lg:block text-n-1/50 transition-colors hover:text-n-1"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>
        <Button
          className={`ml-auto lg:hidden`}
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;