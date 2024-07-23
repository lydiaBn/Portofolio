"use client";
import Head from "next/head";
import { AiFillLinkedin } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import code from "/public/code.png";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import Bookstore from "/public/Bookstore.png";
import FinanceManagement from "/public/FinanceManagement.png";
import ImageGen from "/public/ImageGen.png";
import lydiaAvatar from "/public/lydiaAvatar.png";
import RecipeWebsite from "/public/RecipeWebsite.png";
import Contact from "./contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Lydia Benzemrane's Portfolio</title>
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
                    className="cursor-pointer text-2xl text-yellow-500" // Light mode icon color
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-gray-800" // Dark mode icon color
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
            <h2 className="text-5xl py-5 text-teal-600 dark:text-teal-400 md:text-6xl">
              Lydia Benzemrane
            </h2>
            <h3 className="text-2xl py-2 text-gray-800 dark:text-gray-200 md:text-3xl">
              Full Stack Developer and UI/UX Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Hi there! I’m Lydia, a passionate Master's student in AI and Data
              Science with a love for software engineering and UI/UX design. I
              enjoy crafting intuitive and engaging digital experiences and am
              fluent in English, French, and Arabic.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/lydia-benzemrane-594183219/">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt- md:h-96 md:w-96">
              <Image src={lydiaAvatar} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400">
              Skills
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Proficiency in AI algorithms and models development, machine
              learning model development, data cleaning and preprocessing,
              learning ability, teamwork, agile methodologies, and more.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Technologies: Deep learning, Python, Java, SQL, JavaScript
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400">
              Education
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Master's in Intelligent Computer Systems (2023 - present), Houari
              Boumediene University of Science and Technology
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Bachelor's Degree in Computer Systems and Software Engineering
              (2020 - 2023), Houari Boumediene University of Science and
              Technology
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400">
              Certifications
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Nvidia Fundamentals of Deep Learning, DeepLearning.ai Deep
              Learning Specialization, Machine Learning Specialization, Google's
              Agile Project Management, Google UX Design Specialization, Google
              Fundamentals of Digital Marketing
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400">
              Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Internship at the Port of Algiers: Design and Production of a
              Mobile and Web application for container management (May - June
              2023)
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Academic Projects: Tweet Classifier in the Context of Sentiment
              Analysis, Deep Neural Network for Image Classification, Solving
              the Travelling Salesman Problem Using Heuristics and
              Metaheuristics, Solving the Multiple Knapsack Problem Using
              Heuristics and Metaheuristics, Management system for a dairy
              production and sales company, Multi-agents auction system
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-teal-600 dark:text-teal-400">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of the projects I've worked on.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={Bookstore}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={FinanceManagement}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={ImageGen}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={RecipeWebsite}
              />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-gray-800 dark:text-gray-200 flex justify-center">
              Contact
            </h3>
            <div className="flex justify-center">
              <Contact />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
