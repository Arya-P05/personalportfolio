import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/Auora";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full flex justify-center items-center">
        <AuroraBackground>
          <Hero />
        </AuroraBackground>
      </div>
    </main>
  );
}
