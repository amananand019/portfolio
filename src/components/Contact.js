import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 p4 text-gray-200"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto md:ml-[20%] md:mr-[10%] h-full">
        <div className="mt-20 md:mt-15">
          <div className="md:ml-[20%]">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-gray-100">
              Contact
            </p>
            <p className="pt-8 pb-4">
              Submit the form below to get in touch with me
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-3/5">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message here"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none "
            ></textarea>

            <button className="bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md text-lg px-10 py-3 my-8 mx-auto hover:scale-110 duration-200">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
