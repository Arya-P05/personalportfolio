"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaGraduationCap, FaCode } from "react-icons/fa";
import "./fade.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AtSign, Mail, Instagram, Linkedin, Github } from "lucide-react";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import BlurFade from "@/components/blur-fade";
import BlurFadeText from "./blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

const Hero = () => {
  return (
    <main className="scroll-smooth">
      <div className="relative w-screen h-screen flex flex-col items-center justify-center">
        <div className="relative z-10 text-center max-w-[89vw] ms:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center my-20">
          <h2 className="fade-in uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello,
          </h2>
          <h1 className="fade-in text-center text-[40px] md:text-5xl lg:text-6xl my-4 mb-6 font-bold leading-snug tracking-wide">
            I'm Arya Patel
          </h1>
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
        <div className="fixed left-0 bottom-0 m-10 fade-in z-50">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <AtSign />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Lets Connect</DialogTitle>
                <DialogDescription>
                  I'm always looking for new challenges to lend a helping hand
                  with and meet new people. Reach out anytime!
                </DialogDescription>
              </DialogHeader>

              <div className="flex items-center space-x mb-2">
                <a
                  href="https://www.linkedin.com/in/arya-pa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type="button" size="sm" className="px-3">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <div className="flex">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a
                        href="https://www.linkedin.com/in/arya-pa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="link">arya-pa</Button>
                      </a>
                    </HoverCardTrigger>
                  </HoverCard>
                </div>
              </div>
              <div className="flex items-center space-x mb-2">
                <a
                  href="https://github.com/Arya-P05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type="button" size="sm" className="px-3">
                    <span className="sr-only">Github</span>
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <div className="flex gap-2">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a
                        href="https://github.com/Arya-P05"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="link">arya-p05</Button>
                      </a>
                    </HoverCardTrigger>
                  </HoverCard>
                </div>
              </div>
              <div className="flex items-center space-x mb-2">
                <a href="mailto:arya.patel2354@gmail.com">
                  <Button type="button" size="sm" className="px-3">
                    <span className="sr-only">Email</span>
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
                <div className="flex gap-2">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a href="mailto:arya.patel2354@gmail.com">
                        <Button variant="link">arya.patel2354@gmail.com</Button>
                      </a>
                    </HoverCardTrigger>
                  </HoverCard>
                </div>
              </div>
              <div className="flex items-center space-x mb-2">
                <a
                  href="https://www.instagram.com/arya.p05/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type="button" size="sm" className="px-3">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-4 w-4" />
                  </Button>
                </a>
                <div className="flex gap-2">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a
                        href="https://www.instagram.com/arya.p05/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="link">arya.p05</Button>
                      </a>
                    </HoverCardTrigger>
                  </HoverCard>
                </div>
              </div>

              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
};

export default Hero;
