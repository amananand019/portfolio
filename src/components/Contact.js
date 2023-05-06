import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { HiOutlineMail, HiAcademicCap } from "react-icons/hi";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

export const Contact = () => {
  const techs = [
    {
      id: 1,
      src: <HiOutlineMail size={50} className="h-10 sm:h-14 mx-auto " />,
      title: "Gmail",
      style: "shadow-red-700",
      href: "mailto:aman019anand@gmail.com",
    },
    {
      id: 2,
      src: <FaLinkedin size={50} className="h-10 sm:h-14 mx-auto " />,
      title: "Linkedin",
      style: "shadow-blue-500",
      href: "https://www.linkedin.com/in/aman019anand/",
    },
    {
      id: 3,
      src: <FaGithub size={50} className="h-10 sm:h-14 mx-auto " />,
      title: "Github",
      style: "shadow-purple-500",
      href: "https://github.com/amananand019",
    },
    {
      id: 4,
      src: <SiLeetcode size={50} className="h-10 sm:h-14 mx-auto " />,
      title: "Leetcode",
      style: "shadow-yellow-500",
      href: "https://leetcode.com/aman019anand/",
    },
    {
      id: 5,
      src: <BiCodeAlt size={50} className="h-10 sm:h-14 mx-auto " />,
      title: "InterviewBit",
      style: "shadow-cyan-600",
      href: "https://www.interviewbit.com/profile/aman019anand",
    },
    {
      id: 6,
      src: <FaHackerrank size={50} className="h-10 sm:h-14 mx-auto " />,
      title: "Hackerrank",
      style: "shadow-green-500",
      href: "https://www.hackerrank.com/aman019anand",
    },
    {
      id: 7,
      src: <SiCodechef size={50} className="h-10 sm:h-14 mx-auto " />,
      title: "CodeChef",
      style: "shadow-orange-500",
      href: "https://www.codechef.com/users/aman019anand",
    },
    {
      id: 7,
      src: <HiAcademicCap size={50} className="h-10 sm:h-14 mx-auto " />,
      title: "Pepcoding",
      style: "shadow-red-500",
      href: "https://nados.io/profile/cd204262-3ae1-46c5-a14b-ac3d3a09302e",
    },
  ];
  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-gray-200 md:ml-[20%] md:mr-[10%]">
        <div className="ml-4 sm:ml-0">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline text-gray-100">
            Profiles
          </p>
          <p className="py-6">
            Here are all my profiles on different platforms.
          </p>
        </div>

        <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 text-center px-4 sm:px-2 md:px-0">
          {techs.map(({ id, src, href, title, style }) => (
            <a
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {src}
              <p className="mt-4 text-sm sm:text-base">{title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
