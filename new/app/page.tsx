import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full flex justify-center items-center">
        <Hero />
      </div>
    </main>
  );
}