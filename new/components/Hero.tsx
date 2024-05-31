import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MacbookScroll } from "./ui/MacbookScroll";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import "./fade.css";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="relative z-10 text-center max-w-[89vw] ms:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center my-20">
        <h2 className="fade-inn uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Hello,
        </h2>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="I'm Arya Patel"
        />
        <h2 className="fade-in uppercase tracking-widest text-xs text-center text-blue-100 max-w-200 mb-2">
          Software Engineer @ MPAC
        </h2>
        <h2 className="fade-in uppercase tracking-widest text-xs text-center text-blue-100 max-w-200">
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
