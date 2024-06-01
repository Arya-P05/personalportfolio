import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import IconButton from "./ui/IconButton";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AtSign, Copy, CalendarDays } from "lucide-react";

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
      <div className="absolute left-0 bottom-0 m-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <AtSign />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Sync w/ me</DialogTitle>
              <DialogDescription>
                I'm always looking for new challenges to lend a helping hand
                with and meet new people.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
              <Button type="button" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </Button>
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
  );
};

export default Hero;
