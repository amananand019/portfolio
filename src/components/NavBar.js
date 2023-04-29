import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "experience",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  const mobileNavItems = [...navItems, { id: 6, link: "resume" }];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Aman</h1>
      </div>

      <ul className="hidden md:flex">
        {navItems.map(({ id, link }) => (
          <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-gray-300 duration-200">
            {link}
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer mr-3 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {mobileNavItems.map(({ id, link }) => (
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
