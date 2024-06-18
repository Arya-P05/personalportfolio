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
import { Gallery } from "next-gallery";

const images = [
  { src: "/IMG_2603.JPG", aspect_ratio: 0.75 },
  { src: "/IMG_1669-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_2207.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_6277.jpg", aspect_ratio: 0.75 },
  { src: "/FullSizeRender-min.jpg", aspect_ratio: 0.75 },
  { src: "/20220327_111815-min.jpg", aspect_ratio: 1.53 },
  { src: "/o3xxI-yzwcqunhba5hzp2jyvro5xlj.jpg", aspect_ratio: 1.33 },
  { src: "/20220831_214453468_iOS-min.JPG", aspect_ratio: 0.75 },
  { src: "/20220701_211929-min.JPG", aspect_ratio: 0.65 },
  { src: "/eh-min.jpg", aspect_ratio: 0.66 },
  { src: "/IMG_9619.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_0749.jpg", aspect_ratio: 0.65 },
  { src: "/IMG_5886-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_6019-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_9282-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_5403-min.jpg", aspect_ratio: 0.75 },
  { src: "/C75BD1A1-3934-418E-82B2-C337F3E9C130-min.JPG", aspect_ratio: 0.65 },
  { src: "/IMG_8896.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_20210719_172747_688-min.JPG", aspect_ratio: 1.0 },
  { src: "/sunset.jpeg", aspect_ratio: 1.76 },
  { src: "/IMG_0426-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_7111 copy-min.JPG", aspect_ratio: 1.33 },
  { src: "/IMG_4206.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_0712.jpg", aspect_ratio: 0.75 },
  { src: "/Old Antique Effect ACR prt 2 copy 2.jpg", aspect_ratio: 1.33 },
  { src: "/20220901_234411744_iOS-min.JPG", aspect_ratio: 0.75 },
  { src: "/E6A87F75-FFA0-41E8-9E11-55D463E46453-min.jpg", aspect_ratio: 0.65 },
  { src: "/IMG_7038 copy.JPG", aspect_ratio: 1.33 },
  { src: "/IMG_7039 copy.JPG", aspect_ratio: 1.33 },
  { src: "/20220725_155905571_iOSS-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_9515-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_7053 copy.JPG", aspect_ratio: 1.33 },
  { src: "/20221223_191611155_iOS.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_8346-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_0081.JPG", aspect_ratio: 0.75 },
  { src: "/20220724_234412530_iOS_copy-min.jpg", aspect_ratio: 0.75 },
  { src: "/BEAUTY-2-min.jpg", aspect_ratio: 1.33 },
  { src: "/IMG_9517_copy.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_7075 copy.JPG", aspect_ratio: 1.33 },
  { src: "/IMG_5451-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_1623-min.JPG", aspect_ratio: 0.75 },
  { src: "/20220921_065148-min.JPG", aspect_ratio: 2.06 },
  { src: "/IMG_1787 copy.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_7100 copy.JPG", aspect_ratio: 1.33 },
  { src: "/IMG_0861.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_4544.jpg", aspect_ratio: 0.91 },
  { src: "/IMG_3997.jpg", aspect_ratio: 0.75 },
  { src: "/20220901_000209533_iOS-min.JPG", aspect_ratio: 1.33 },
  { src: "/51106447-2889-4C64-88EE-214E135D2122-min.JPG", aspect_ratio: 0.56 },
  { src: "/IMG_9260 copy.jpg", aspect_ratio: 0.59 },
  { src: "/IMG_4107-min.jpg", aspect_ratio: 0.75 },
  { src: "/insta nigthshit.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_4023.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_9664.jpg", aspect_ratio: 0.75 },
  { src: "/OFSAA_Ultimate_Medalists_DSC8489.jpg", aspect_ratio: 1.77 },
  { src: "/IMG_7134-min.JPG", aspect_ratio: 1.33 },
  { src: "/IMG_5880.JPG", aspect_ratio: 0.75 },
  { src: "/IMG_1883.jpg", aspect_ratio: 0.75 },
  {
    src: "/70580452223__3C4FCECF-0C34-4BA9-863B-172F83819BFA-min.jpg",
    aspect_ratio: 0.75,
  },
  { src: "/IMG_5942-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_7065 copy.JPG", aspect_ratio: 1.33 },
  { src: "/IMG_9496-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_9621-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_5452-min.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_0757 copy.jpeg", aspect_ratio: 0.75 },
  { src: "/IMG_5461 copy-min.JPG", aspect_ratio: 0.75 },
  { src: "/20220901_233243248_iOS-min.JPG", aspect_ratio: 0.75 },
  { src: "/GEqWu-zqm4pkdwajvahl6v2aqrlyev-min.jpg", aspect_ratio: 1.33 },
  { src: "/IMG_3473.JPG", aspect_ratio: 0.75 },
  { src: "/IMG_1781 copy.jpg", aspect_ratio: 0.75 },
  { src: "/IMG_9445-min.jpg", aspect_ratio: 1.75 },
  {
    src: "/71091878687__FC44E6C2-FDA6-4EF4-A81E-3F76DB81D74A-min.jpg",
    aspect_ratio: 0.75,
  },
];

const photography = () => {
  return (
    <main>
      <div className="rounded-images mx-auto my-auto py-20 px-32 flex flex-col gap-10">
        <Gallery
          widths={[1500, 2000, 2600]}
          ratios={[2.2, 4, 6, 8]}
          images={images}
          gap="6px"
        />
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
    </main>
  );
};

export default photography;
