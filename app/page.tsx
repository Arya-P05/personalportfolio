"use client";

import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="logo-container">
        <Image
          src="/signature.png"
          alt="Logo"
          width={173.875}
          height={77.375}
          priority
        />
      </div>
      <h1>Arya Patel &</h1>
    </>
  );
}
