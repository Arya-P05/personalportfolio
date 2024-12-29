"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "./styles.css";

export default function Contact() {
  const contactData = [
    {
      label: "GitHub",
      value: "arya-p05",
      href: "https://github.com/Arya-P05",
    },
    {
      label: "Email",
      value: "a83patel [at] uwaterloo [dot] ca",
      href: "mailto:a83patel@uwaterloo.ca",
    },
    {
      label: "Instagram",
      value: "arya [dot] p05",
      href: "https://www.instagram.com/arya.p05/",
    },
    {
      label: "LinkedIn",
      value: "arya-pa",
      href: "https://www.linkedin.com/in/arya-patel/",
    },
  ];

  return (
    <main
      style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.1,
        }}
        style={{
          textAlign: "center",
          margin: "0 auto",
          padding: "2rem",
          maxWidth: "600px",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          style={{
            fontSize: "1.2rem",
            margin: "1rem 0 2rem",
          }}
        >
          I'm always open to an interesting conversation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {contactData.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <div className="contact-row-content">
                <span className="contact-label">{item.label}:</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
