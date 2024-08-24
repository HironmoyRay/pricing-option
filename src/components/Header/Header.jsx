import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className="relative md:flex md:w-full md:justify-center bg-rose-700 text-white h-12">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className=" md:hidden p-4 text-2xl"
      >
        {open ? <RiMenu2Fill /> : <IoMdClose />}
      </div>
      <ul className="hidden md:block md:flex-1 ">
        <li className="px-6 py-1 md:my-2 rounded-xl">
          <a
            className="hover:border-white hover:border-2 rounded px-2 py-1 duration-100 font-bold text-nowrap"
            href="#"
          >
            Comp Name
          </a>
        </li>
      </ul>

      <ul
        className={`flex  flex-col md:flex-row md:items-center md:justify-center px-4 mx-4 rounded-xl md:rounded-none md:mx-0 text-center bg-rose-700 text-white absolute md:static duration-1000 ${
          open ? "top-16" : "-top-44"
        }`}
      >
        <li className="hover:border-b-white hover:border-b-2 mx-2 px-6 py-1 font-semibold md:my-2 rounded-xl duration-100">
          <a href="#">Home</a>
        </li>
        <li className="hover:border-b-white hover:border-b-2 mx-2 px-6 py-1 font-semibold md:my-2 rounded-xl duration-100">
          <a href="#user">Users</a>
        </li>
        <li className="hover:border-b-white hover:border-b-2 mx-2 px-6 py-1 font-semibold md:my-2 rounded-xl duration-100">
          <a href="#contact">Contact</a>
        </li>
        <li className="hover:border-b-white hover:border-b-2 mx-2 px-6 py-1 font-semibold md:my-2 rounded-xl duration-100">
          <a href="#about">About</a>
        </li>
        <li className="hover:border-b-white md:hidden hover:border-b-2 mx-2 px-6 py-1 my-1 font-semibold md:my-2 rounded-xl duration-100">
          <a href="#profile">Profile</a>
        </li>
      </ul>

      <ul className="hidden md:block md:flex-1 text-end">
        <li className=" px-6 py-1 md:my-2 rounded-xl">
          <a
            className="hover:border-white hover:border-2 rounded px-2 py-1 duration-100"
            href="#profile"
          >
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
