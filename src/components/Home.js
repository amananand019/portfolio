import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.jpeg";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto md:ml-[20%] md:mr-[10%] flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full px-2 md:p-0">
            <h2 className="text-4xl mt-10 md:mt-0 md:text-6xl font-bold text-white">
              I'm a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              I have 1 years of experience building and designing software.
              Currently, I love to work on web application using tech like
              React, Tailwind, SpringBoot, DynamoDB, etc.
            </p>

            <div>
              <Link
                to="about"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                About me
                <span className="group-hover:rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 duration-200">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={HeroImage}
              alt="Pic of Aman"
              className="rounded-2xl mx-auto w-3/4 md:w-2/3 max-w-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};
