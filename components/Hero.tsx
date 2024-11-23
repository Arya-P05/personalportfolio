"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaGraduationCap, FaCode } from "react-icons/fa";
import "./fade.css";
import Contact from "./Contact";

const Hero = () => {
  return (
    <main className="scroll-smooth">
      <div className="relative w-screen h-screen flex flex-col items-center justify-center">
        <div className="relative z-10 text-center max-w-[89vw] ms:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center my-20">
          <h2 className="fade-in uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello,
          </h2>
          <h1 className="fade-in text-center text-[40px] md:text-5xl lg:text-6xl my-4 mb-6 leading-snug tracking-wide">
            I'm <b>Arya Patel</b>
          </h1>
          <h2 className="fade-in uppercase tracking-widest text-xs text-center text-blue-100 max-w-200 mb-2 flex items-center justify-center">
            <div className="mr-2 mb-0.5">
              <FaCode />
            </div>
            ML + Backend @ MPAC
          </h2>
          <h2 className="fade-in uppercase tracking-widest text-xs text-center text-blue-100 max-w-200 mb-2 flex items-center justify-center">
            <div className="mr-2 mb-0.5">
              <FaGraduationCap />
            </div>
            Computer Science & Finance @ UWaterloo
          </h2>
          <a href="#work-section" className="fade-in">
            <MagicButton
              text="My Work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="mt-8"
            />
          </a>
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default Hero;
