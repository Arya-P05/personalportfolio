"use client";
import React from "react";
import "./fade.css";
import { AuroraBackground } from "@/components/ui/Auora";
import BlurFade from "@/components/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import Contact from "@/components/Contact";

const BLUR_FADE_DELAY = 0.04;

const Work = () => {
  return (
    <AuroraBackground className="fade-in">
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col gap-y-7 mx-auto xl:w-1/2 lg:w-2/3 md:w-3/4 sm:w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </a>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
          <div className="my-2"></div>{" "}
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <h2 className="text-3xl font-bold">Education</h2>
            </a>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </div>
      <Contact />
    </AuroraBackground>
  );
};

export default Work;
