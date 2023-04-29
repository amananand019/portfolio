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
        <p className="md:text-xl mt-10 md:mt-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis
          iste inventore ullam! Dignissimos distinctio molestias aliquid
          blanditiis? Maiores iure tempore, ipsam quod praesentium, optio minus
          porro cum, sequi nobis amet! Quidem, nostrum. Odit rem beatae maxime
          ab vitae voluptatem quam facere. Eligendi vel labore inventore,
          ducimus omnis magnam incidunt.
        </p>
        <br />
        <p className="md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          dolores consequatur delectus ipsa itaque consectetur, dolor ratione.
          Dolores vitae asperiores eveniet tempora, error fugit perferendis
          eaque at magni accusantium molestias ducimus porro expedita officiis,
          assumenda, deleniti dolorem minima quod fugiat consectetur.
          Necessitatibus eveniet ut vel non facilis et cumque quod!
        </p>
      </div>
    </div>
  );
};
