import { BoxSearch, HamburgerMenu } from "iconsax-reactjs";
import React from "react";

const MobileMenu = () => {
  return (
    <menu className="md:hidden">
      <nav>
        <ul className="flex justify-between items-center py-4  px-8  ">
          <div className="flex  justify-center items-center ">
            <li className="mx-4 border-amber-600 border flex justify-center items-center rounded-full w-[52px] h-[49px]">
              logo
            </li>
            <li>ورد / ثبت نام</li>
          </div>
          <li>
            <HamburgerMenu size="40" color="#FF8A65" />
          </li>
          <li>
            <BoxSearch size="32" color="#FF8A65" />
          </li>
        </ul>
      </nav>
    </menu>
  );
};

export default MobileMenu;
