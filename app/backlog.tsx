"use client";

import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="logo">
        <Image
          src="/signature.svg"
          alt="Logo"
          width={173.875}
          height={77.375}
          priority
        />
      </div>
      <h1>My</h1>
      <h1>Contact</h1>
      <div className="inline-container">
        <h1 className="h1-font-1">Arya</h1>
        <h1 className="h1-font-2">Patel</h1>
      </div>

      <h3 className="text">
        this is a bit of text that im trying to see what it looks like
      </h3>
    </>
  );
}
