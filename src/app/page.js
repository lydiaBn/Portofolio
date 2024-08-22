"use client";
import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import BlushBloom0 from "/public/Projects_Images/BlushBloom/0.png";
import BlushBloom1 from "/public/Projects_Images/BlushBloom/00.png";
import BlushBloom2 from "/public/Projects_Images/BlushBloom/01.png";
import BlushBloom3 from "/public/Projects_Images/BlushBloom/02.png";
import BlushBloom4 from "/public/Projects_Images/BlushBloom/03.png";
import BlushBloom5 from "/public/Projects_Images/BlushBloom/05.png";
import BlushBloom6 from "/public/Projects_Images/BlushBloom/06.png";
import BlushBloom8 from "/public/Projects_Images/BlushBloom/08.png";
import BlushBloom9 from "/public/Projects_Images/BlushBloom/09.png";
import BlushBloom10 from "/public/Projects_Images/BlushBloom/10.png";
import BlushBloom11 from "/public/Projects_Images/BlushBloom/11.png";
import BlushBloom12 from "/public/Projects_Images/BlushBloom/12.png";
import BlushBloom13 from "/public/Projects_Images/BlushBloom/13.png";
import BlushBloom14 from "/public/Projects_Images/BlushBloom/14.png";
import BlushBloom15 from "/public/Projects_Images/BlushBloom/15.png";
import BlushBloom16 from "/public/Projects_Images/BlushBloom/16.png";
import BlushBloom17 from "/public/Projects_Images/BlushBloom/17.png";
import BlushBloom18 from "/public/Projects_Images/BlushBloom/18.png";
import BlushBloom19 from "/public/Projects_Images/BlushBloom/19.png";
import BlushBloom20 from "/public/Projects_Images/BlushBloom/20.png";
import BlushBloom21 from "/public/Projects_Images/BlushBloom/21.png";
import FinanceManagement1 from "/public/Projects_Images/FinanceManagement/00.png";
import FinanceManagement2 from "/public/Projects_Images/FinanceManagement/01.png";
import FinanceManagement3 from "/public/Projects_Images/FinanceManagement/02.png";
import BookStore0 from "/public/Projects_Images/BookStore/00.png";
import BookStore1 from "/public/Projects_Images/BookStore/01.png";
import BookStore2 from "/public/Projects_Images/BookStore/02.png";
import BookStore3 from "/public/Projects_Images/BookStore/03.png";
import BookStore4 from "/public/Projects_Images/BookStore/04.png";
import BookStore5 from "/public/Projects_Images/BookStore/05.png";
import RecipeWebsite1 from "/public/Projects_Images/RecipeWebsite/00.png";
import RecipeWebsite2 from "/public/Projects_Images/RecipeWebsite/01.png";

import lydiaAvatar from "/public/lydiaAvatar.png";
import Contact from "./contact";
import ProjectCarousel from "./ProjectCarousel";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      images: [
        BlushBloom0,
        BlushBloom1,
        BlushBloom2,
        BlushBloom3,
        BlushBloom21,
        BlushBloom4,
        BlushBloom5,
        BlushBloom6,
        BlushBloom8,
        BlushBloom9,
        BlushBloom10,
        BlushBloom11,
        BlushBloom12,
        BlushBloom13,
        BlushBloom14,
        BlushBloom15,
        BlushBloom16,
        BlushBloom17,
        BlushBloom18,
        BlushBloom19,
        BlushBloom20,
      ],
      title: "Beauty Ecommerce Website",
      description: "A full-featured e-commerce website for a beauty store.",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/lydiaBn/BlushBloom",
      //demoLink: "https://bookstore-demo.com",
    },
    {
      images: [
        BookStore0,
        BookStore1,
        BookStore2,
        BookStore3,
        BookStore4,
        BookStore5,
      ],
      title: "Bookstore",
      description: "Bookstore website with a collection of books Read.",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/lydiaBn/Mern-Bookstore-app",
      //  demoLink: "https://image-generator-demo.com",
    },

    {
      images: [RecipeWebsite1, RecipeWebsite2],
      title: "Recipe Website",
      description: "A website for finding and sharing recipes.",
      stack: ["React"],
      githubLink: "https://github.com/lydiaBn/Recipe-website-React",
      demoLink: "https://recipe-website-react-delta.vercel.app/",
    },
    {
      images: [FinanceManagement1, FinanceManagement2, FinanceManagement3],
      title: "Finance Management",
      description: "A web app for managing personal finances.",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/lydiaBn/PersonnelFinanceManagement",
      //  demoLink: "https://finance-management-demo.com",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Lydia Benzemrane&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Lydia Benzemrane, a Master's student in Intelligent Computer Systems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-6 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl">{} </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-yellow-500"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-gray-800"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-2">
            <h2 className="text-5xl py-5 text-teal-600 dark:text-teal-400 md:text-7xl">
              Lydia Benzemrane
            </h2>
            <h3 className="text-3xl py-2 text-gray-800 dark:text-gray-200 md:text-4xl">
              Full Stack Developer and UI/UX Designer
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-2xl">
              Hi there! I&apos;m Lydia, a passionate Master&apos;s student in AI
              and Data Science with a love for software engineering and UI/UX
              design. I enjoy crafting intuitive and engaging digital
              experiences and am fluent in English, French, and Arabic.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/lydia-benzemrane-594183219/">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt- md:h-96 md:w-96">
              <Image
                src={lydiaAvatar}
                layout="fill"
                objectFit="cover"
                alt="Lydia Benzemrane Avatar"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-4xl py-2 text-teal-600 dark:text-teal-400">
              Skills
            </h3>
            <p className="text-lg py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
              I specialize in full-stack web development using the MERN stack
              (MongoDB, Express.js, React, Node.js) to build robust and scalable
              applications. My expertise extends to Next.js, enabling
              server-side rendering and static site generation for optimized
              performance. In addition, I have a strong foundation in AI,
              focusing on developing and deploying machine learning models,
              particularly in deep learning, to solve complex problems.
            </p>
            <p className="text-lg py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
              Technologies: MongoDB, Express.js, React, Node.js, Next.js,
              Python, Deep Learning, Machine Learning, Data Science
            </p>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-4xl py-2 text-teal-600 dark:text-teal-400">
              Education
            </h3>
            <p className="text-lg py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
              Master&apos;s in Intelligent Computer Systems (2023 - present),
              Houari Boumediene University of Science and Technology
            </p>
            <p className="text-lg py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
              Bachelor&apos;s Degree in Computer Systems and Software
              Engineering (2020 - 2023), Houari Boumediene University of Science
              and Technology
            </p>
          </div>
        </section>
        <section className="py-10">
          <div className="text-center">
            <h3 className="text-4xl py-2 text-teal-600 dark:text-teal-400">
              Portfolio
            </h3>
            <p className="text-lg py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
              Here are some of the projects I&apos;ve worked on.
            </p>
          </div>
          <div className="flex flex-col gap-20 py-10 lg:flex-row lg:flex-wrap lg:justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="lg:flex lg:items-center lg:w-full lg:justify-between"
              >
                <div className="lg:w-1/2 lg:pr-10">
                  <ProjectCarousel images={project.images} />
                </div>
                <div className="lg:w-1/2 lg:pl-10">
                  <h4 className="text-2xl text-teal-600 dark:text-teal-400">
                    {project.title}
                  </h4>
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    {project.description}
                  </p>
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    Stack: {project.stack.join(", ")}
                  </p>
                  <div className="flex mt-2">
                    <a
                      href={project.githubLink}
                      className="text-teal-600 dark:text-teal-400 underline mr-4"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demoLink}
                      className="text-teal-600 dark:text-teal-400 underline"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10">
          <div className="text-center">
            <h3 className="text-4xl py-2 text-teal-600 dark:text-teal-400">
              Contact
            </h3>
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
