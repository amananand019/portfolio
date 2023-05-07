import React from "react";

export const Experience = () => {
  const companies = [
    {
      id: 1,
      company: "Hashedin by Deloitte",
      designation: "SDE Intern",
      period: "Mar 2022 - Sept 2022",
      desc: [
        "Worked on frontend & backend APIs for building web applications. Additionally, performed unit testing and developed a CI/CD integrated project.",
        "Technologies used - HTML, CSS, React.JS, Tailwind CSS, Java, SpringBoot, etc.",
      ],
      style: "shadow-green-500",
      href: "https://hashedin.com/about-us/",
    },
    {
      id: 2,
      company: "Amazon",
      designation: "SDE 1",
      period: "Sept 2022 - Mar 2023",
      desc: [
        "Worked on feature requests and deployed them till production with proper unit testing and code reviews , without any production issues under Product Safety And Compliance org. (Trade Compliance Team ).",
        "Resolved high-sev tickets and software risks before service level agreement as an On-Call for the Team.",
        "Technologies used - ReactJS, Java, SpringBoot, AWS, etc.",
      ],
      style: "shadow-orange-500",
      href: "https://www.aboutamazon.com/",
    },
  ];
  return (
    <div name="technologies" className="bg-black w-full h-fit md:min-h-screen">
      <div className="max-w-screen-lg mx-auto py-20 flex flex-col justify-center md:min-h-screen text-gray-200 md:ml-[20%] md:mr-[10%]">
        <div className="ml-4 sm:ml-0">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="pt-6">Here are all my employment history.</p>
        </div>

        <div className="w-full flex flex-col-reverse px-6 md:px-0 text-gray-100">
          {companies.map(
            ({ id, company, designation, period, desc, href, style }) => (
              <a
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-3 my-4 rounded-lg ${style}`}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="px-4 pt-2 flex items-end">
                  <h1 className="text-2xl font-bold h-full">{company}</h1>
                  <h1 className="mx-2">{designation}</h1>
                </div>
                <div className="px-4 italic text-cyan-500">
                  <h2>{period}</h2>
                </div>
                <div className="pl-10 pr-5 py-2">
                  <ul className="list-disc text-gray-300">
                    {desc.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* <p className="mt-4 text-sm sm:text-base">{title}</p> */}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};
