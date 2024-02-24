"use client";

import { GoTriangleDown } from "react-icons/go";
import { RiArticleLine } from "react-icons/ri";
import { FaGlobeAmericas } from "react-icons/fa";
import InputSearch from "./InputSearch";
import List from "./List";

const Navbar = () => {
  return (
    <div className="navbar bg-white fixed flex flex-col md:flex-row md:gap-7 gap-3 z-10 md:px-10 px-5 py-3 text-black shadow-md border">
      <div className="flex-1 w-full flex gap-2 justify-between">
        <div className="md:flex-1 flex-none">
          <a href="/" className="text-xl font-bold">
            Artikel EengSF
          </a>
        </div>
        <InputSearch />
      </div>
      <div className="flex gap-7 md:text-base text-xs">
        <div className="dropdown dropdown-end relative">
          <div tabIndex={1} className="flex items-center cursor-pointer">
            <RiArticleLine size={20} className="me-1" />
            <h1>Category</h1>
            <GoTriangleDown size={20} />
          </div>
          <List value="category" />
        </div>
        <div className="dropdown dropdown-end relative">
          <div tabIndex={1} className="flex items-center cursor-pointer">
            <FaGlobeAmericas size={20} className="me-1" />
            <h1>Country</h1>
            <GoTriangleDown size={20} />
          </div>
          <List value="country" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
