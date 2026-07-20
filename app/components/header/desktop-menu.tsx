import { BoxSearch } from "iconsax-reactjs";
import React from "react";

const DesktopMenu = () => {
  return (
    <menu className="hidden tab:block">
      <nav>
        <ul className="flex justify-between  w-full items-center px-8 py-4 ">
          <div className="flex  justify-center items-center ">
            <li className="mx-4 border border-amber-600  flex justify-center items-center rounded-full w-13 h-12.25">
              logo
            </li>
            <li>ورد / ثبت نام</li>
          </div>

          <li>تماس با ما</li>
          <li>درباره ما</li>
          <li>صفحه اصلی</li>
          <li>محصولات</li>
          <div>
            <li>
              <BoxSearch size="32" color="#FF8A65" />
            </li>
          </div>
        </ul>
      </nav>
    </menu>
  );
};

export default DesktopMenu;
