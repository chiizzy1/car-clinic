"use client";

import { useState } from "react";
import Image from "next/image";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <div className="text-dimPurple font-semibold text-2xl">Car Clinic</div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[16px] text-sm ${
              active === nav.title ? "text-purple-800" : "text-purple-400"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        {/* <div className="avatar">
          <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              src="https://images.pexels.com/photos/10135534/pexels-photo-10135534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="profile"
              width={50}
              height={50}
            />
          </div>
        </div> */}
        
      </ul>

        {/* Navbar for mobile devices */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-purple-800" : "text-purple-400"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            {/* <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src="https://images.pexels.com/photos/10135534/pexels-photo-10135534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="profile"
                  width={50}
                  height={50}
                />
              </div>
            </div> */}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
