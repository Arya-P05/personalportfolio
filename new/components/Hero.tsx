import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import SocialButton from "./ui/SocialButton";
import { FaLocationArrow } from "react-icons/fa";
import "./fade.css";
import { FaCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <div className="relative z-10 text-center max-w-[89vw] ms:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center my-20">
        <h2 className="fade-inn uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Hello,
        </h2>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="I'm Arya Patel"
        />

        <h2 className="fade-in uppercase tracking-widest text-xs text-center text-blue-100 max-w-200 mb-2 flex items-center justify-center">
          <div className="mr-2 mb-0.5">
            <FaCode />
          </div>
          Software Engineer @ MPAC
        </h2>
        <h2 className="fade-in uppercase tracking-widest text-xs text-center text-blue-100 max-w-200 mb-2 flex items-center justify-center">
          <div className="mr-2 mb-0.5">
            <FaGraduationCap />
          </div>
          Computer Science + Finance @ UWaterloo
        </h2>

        <a href="#about" className="fade-in">
          <MagicButton
            text="My Work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
