import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 via-black to-black text-gray-200"
    >
      <div className="max-w-screen-lg p-6 mx-auto md:ml-[20%] md:mr-[10%] flex flex-col justify-center h-full">
        <div className="mt-20 md:mt-0 md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-gray-100">
            About
          </p>
        </div>
        <p className="text-sm md:text-xl mt-10 md:mt-14 text-justify">
          Hi, I am Aman, an Engineer by qualification and Software Developer by
          profession.
        </p>
        <br />
        <p className="text-sm md:text-xl text-justify">
          I bring a year of expertise in developing and delivering top-quality
          software products to meet the needs of clients and end-users. I have a
          solid foundation in Java and JavaScript, and I am skilled in
          designing, coding, testing, and maintaining software applications. My
          ability to work effectively in a team environment, as well as my
          strong analytical and problem-solving skills, allows me to tackle
          complex technical challenges and find creative solutions. I am
          constantly seeking to expand my knowledge and stay current with the
          latest advancements in technology. My ultimate goal is to create
          innovative software products that meet the needs of clients and users,
          and provide an exceptional experience.
        </p>
        <br />
        <p className="md:text-xl text-justify italic">
          You can see the technologies that I am familiar with in the below
          section.
        </p>
      </div>
    </div>
  );
};
