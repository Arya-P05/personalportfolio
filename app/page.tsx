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
      <h1>Arya Patel</h1>
      <h2>test</h2>
    </>
  );
}
