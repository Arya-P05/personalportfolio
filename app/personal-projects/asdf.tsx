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
import { DATA } from "@/data/resume";
import Contact from "@/components/Contact";

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
      <Contact />
    </AuroraBackground>
  );
};

export default Work;
