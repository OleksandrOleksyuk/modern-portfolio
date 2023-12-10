import React, { useState } from "react";
import logoWhite from "../../assets/oleksandr-logo-white.png";
import { navEl } from "../../constants";
import { Button } from "..";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isOpenMenu, setisOpenMenu] = useState<boolean>(false);
  const toggleIsOpenMenu = () => setisOpenMenu((isOpen) => !isOpen);
  return (
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logoWhite} width={150} alt="Flowbite Logo" />
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Button type="button" color="primary">
          Contattami
        </Button>
        <div className="md:hidden flex justify-center items-center">
          {isOpenMenu ? (
            <XMarkIcon
              className="w-6 cursor-pointer"
              onClick={() => toggleIsOpenMenu()}
            />
          ) : (
            <Bars3BottomRightIcon
              className="w-6 cursor-pointer"
              onClick={() => toggleIsOpenMenu()}
            />
          )}
        </div>
      </div>
      <div
        className={`${
          isOpenMenu ? "" : "hidden"
        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          {navEl.map((element) => (
            <li key={element}>
              <a href="#" aria-current="page" className="p-2 block">
                {element}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
