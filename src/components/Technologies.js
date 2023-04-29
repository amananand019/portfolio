import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import springboot from "../assets/springboot.png";
import mysql from "../assets/mysql.png";
import aws from "../assets/aws.png";

export const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React.js",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-red-600",
    },
    {
      id: 7,
      src: springboot,
      title: "SpringBoot",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: aws,
      title: "AWS",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: mysql,
      title: "MySQL",
      style: "shadow-cyan-600",
    },
  ];
  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-gray-200 md:ml-[20%] md:mr-[10%]">
        <div className="ml-4 sm:ml-0">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline text-gray-100">
            Technologies
          </p>
          <p className="py-6">These are technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-3 gap-4 sm:gap-8 text-center px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="h-16 sm:h-20 mx-auto " />
              <p className="mt-4 text-sm sm:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
