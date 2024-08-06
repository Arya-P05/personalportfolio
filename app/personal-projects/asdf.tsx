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
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { DATA } from "@/data/resume";

const Work = () => {
  const cards = DATA.data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <AuroraBackground className="fade-in">
      <div className="flex items-center justify-center w-full min-h-screen overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full">
          <Carousel items={cards} />
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
