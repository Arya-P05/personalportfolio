"use client";
import React from "react";
import "./fade.css";
import { AuroraBackground } from "@/components/ui/Auora";
import Contact from "@/components/Contact";

const Work = () => {
  return (
    <AuroraBackground className="fade-in">
      <div className="flex min-h-screen items-center justify-center">
        <p className="z-50">
          ...still working on this page lol, but you can still check out my
          projects on{" "}
          <a
            href="https://github.com/Arya-P05"
            className="text-purple italic"
            target="_blank"
            rel="noopener noreferrer"
          >
            my github
          </a>
        </p>
      </div>
      <Contact />
    </AuroraBackground>
  );
};

export default Work;
