"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/Auora";

export default function Home() {
  return (
    <main className="bg-black-100">
      <AuroraBackground>
        <Hero />
      </AuroraBackground>
      <div className="mx:10 xl:mx-50 lg:mx-40 md:mx-20 sm:mx-10">
        <Grid />
      </div>
    </main>
  );
}
