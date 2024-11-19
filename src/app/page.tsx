"use client";

import React from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import LogoCarousel from "./components/LogoCarousel";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

const HomePage = () => {
  const email = "juangabrielcarodiaz16@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
  };

  const technologies = [
    "/kubernetes.svg",
    "/docker.svg",
    "/grafana.svg",
    "/prometheus.svg",
    "python.svg",
    "JavaScript-logo.png",
    "google-cloud.svg",
    "azure.png",
    "/amazon-aws.svg",
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-gray-800">
      <Navbar />
      {/* Primera Sección Visual */}
      <section className="relative w-full flex flex-col items-center justify-center py-12 px-4 text-gray-800 md:pb-48">
        {/* Círculo 1 */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-50 rounded-full mix-blend-multiply blur-xl transform -translate-y-1/2 animate-move-slower md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Círculo 2 */}
        <div className="absolute top-1/2 left-2/3 w-32 h-32 bg-lime-50 rounded-full mix-blend-multiply blur-2xl transform -translate-y-1/2 animate-move md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Contenido */}
        <img
          src="/perfil-jgcd.png"
          alt="Avatar"
          className="relative z-10 w-24 h-24 rounded-full mb-4 md:w-32 md:h-32"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 relative z-10">
          Juan Gabriel
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-2xl relative z-10">
          Fullstack Development and Microcomputer technician.
        </p>
        {/* Sección de Contacto */}
        <div className="flex items-center space-x-4 mt-12 relative z-10 bg-gray-200/40 p-2 rounded-lg">
          <p className="text-lg md:text-xl text-gray-700">{email}</p>
          <a
            href={`mailto:${email}`}
            className="text-slate-400 hover:text-slate-500"
          >
            <FaEnvelope size={24} />
          </a>
          <button
            onClick={handleCopyEmail}
            className="text-slate-400 hover:text-slate-500"
          >
            {copied ? <FaCheck size={24} /> : <FaCopy size={24} />}
          </button>
        </div>
        <div className="flex space-x-8 mt-8 relative z-10">
          <a
            href="https://github.com/juangabrieeel"
            className="text-slate-900 hover:text-blue-500"
          >
            <FaGithub size={52} />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-gabriel-caro-diaz/"
            className="text-slate-800 hover:text-blue-500"
          >
            <FaLinkedin size={52} />
          </a>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id="tools">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            My Daily Tools
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
            Here are the technologies I work with every day to create efficient
            and scalable solutions.
          </p>
        </div>
        <LogoCarousel />
      </section>

      {/* Sección de Proyectos Principales*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Main Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Michigames */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img
                src="/michigames.jpg"
                alt="Michigames Image"
                className="w-full h-48 md:h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">
                Michigames
              </h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                Browser gaming portal where the player can compete in their
                favorite games. Developed in JavaScript Frameworks and MySQL DB
              </p>
              <div className="flex items-center mb-4">
                <Image
                  width={10}
                  height={10}
                  src="/logos/nodejs.svg"
                  alt="Nodejs Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/vuejs.svg"
                  alt="Vuejs Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/mysql.svg"
                  alt="MySQL Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/github.svg"
                  alt="MySQL Image"
                  className="w-10 h-10 mr-2"
                />
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://wippass.com"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* ERP */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img
                src="/erp.jpg"
                alt="ERP Image"
                className="w-full h-48 md:h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">
                ERP
              </h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                I developed an ERP in EVO SYN together with a team of developers
                to facilitate work management. NoSQL database and JavaScript
                frameworks
              </p>
              <div className="flex items-center mb-4">
                <Image
                  width={10}
                  height={10}
                  src="/logos/nodejs.svg"
                  alt="NODE Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/vuejs.svg"
                  alt="Vuejs Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/mongodb.svg"
                  alt="Mongo Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/github.svg"
                  alt="Github Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/docker.svg"
                  alt="Docker Image"
                  className="w-10 h-10 mr-2"
                />
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/evolution-synergetique?originalSubdomain=es"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  View EVO SYN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Otros Proyectos*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Other Projects...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Portfolio */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img
                src="/portfolio.png"
                alt="Portfolio Image"
                className="w-full h-48 md:h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">
                Portfolio
              </h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                My personal portfolio, built with Next.js and Tailwind CSS,
                showcases my projects, skills, and experience. It is deployed
                with Vercel and GitHub.
              </p>
              <div className="flex items-center mb-4">
                <Image
                  width={10}
                  height={10}
                  src="/logos/nextjs.svg"
                  alt="Next.js Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/typescript.svg"
                  alt="TypeScript Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/tailwind.svg"
                  alt="Tailwind Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/vercel.svg"
                  alt="Vercel Image"
                  className="w-10 h-10 mr-2"
                />
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Riemann-def/portfolio"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* Proyecto consumo de API*/}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img
                src="/rickymorty.gif"
                alt="Project 2 Image"
                className="w-full h-48 md:h-64 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">
                Angular (With API)
              </h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                Web application that uses an external API to obtain the
                characters of an animated series. Using Angular and CSS.
              </p>
              <div className="flex items-center mb-4">
                <Image
                  width={10}
                  height={10}
                  src="/logos/angular.svg"
                  alt="Angular Image"
                  className="w-10 h-10 mr-2"
                />
                <Image
                  width={10}
                  height={10}
                  src="/logos/api.svg"
                  alt="API Image"
                  className="w-10 h-10 mr-2"
                />
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/juangabrieeel/Rick_and_Morty"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Experiencia */}
      <section
        className="w-full py-24 px-4 md:px-8 bg-slate-50"
        id="experience"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Experience</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
            Here are some of the milestones I have achieved in my career.
          </p>
          <Experience />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
