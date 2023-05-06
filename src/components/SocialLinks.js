import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:aman019anand@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aman019anand/",
    },
    {
      id: 3,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/amananand019",
    },
    {
      id: 4,
      child: (
        <>
          {" "}
          Leetcode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/aman019anand/",
    },
    {
      id: 5,
      child: (
        <>
          {" "}
          InterviewBt <BiCodeAlt size={30} />
        </>
      ),
      href: "https://www.interviewbit.com/profile/aman019anand",
      style: "rounded-br-md",
    },

    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <HiOutlineNewspaper size={30} />
    //     </>
    //   ),
    //   href: "https://drive.google.com/file/d/1O1izojY3f9hV2jQLkfUZKaNVM_MbxsND/view?usp=share_link",
    // },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
