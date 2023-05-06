import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    {
      id: 1,
      // link: "about",
      link: (
        <>
          <Link to="/">about</Link>
        </>
      ),
    },
    {
      id: 2,
      // link: "experience",
      link: (
        <>
          <Link to="/experience">experience</Link>
        </>
      ),
    },
    {
      id: 3,
      // link: "resume",
      link: (
        <>
          <a
            href="https://drive.google.com/file/d/1O1izojY3f9hV2jQLkfUZKaNVM_MbxsND/view?usp=share_link"
            target="_blank"
          >
            resume
          </a>
        </>
      ),
      // href: "https://drive.google.com/file/d/1O1izojY3f9hV2jQLkfUZKaNVM_MbxsND/view?usp=share_link",
    },
    {
      id: 4,
      // link: "contact",
      link: (
        <>
          <Link to="/contact">contact</Link>
        </>
      ),
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Aman</h1>
      </div>

      <ul className="hidden md:flex">
        {navItems.map(({ id, link, href }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-gray-300 duration-200"
          >
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
          {navItems.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
