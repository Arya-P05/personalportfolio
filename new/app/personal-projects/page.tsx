"use client";
import React from "react";
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
import { AuroraBackground } from "@/components/ui/Auora";
import BlurFade from "@/components/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

const Work = () => {
  return (
    <AuroraBackground className="fade-in">
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col gap-y-7 mx-auto xl:w-1/2 lg:w-2/3 md:w-3/4 sm:w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest projects
                </h2>
                <p className="text-muted-foreground text-sm md:text-base lg:text-sm xl:text-base mx-4 md:mx-8 lg:mx-12 xl:mx-16">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. <br></br> Here are a few
                  of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 m-10 fade-in">
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
    </AuroraBackground>
  );
};

export default Work;
