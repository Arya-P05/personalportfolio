"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaRegEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6"; // Import icons
import "./globals.css";

export default function Home() {
  const [showIcons, setShowIcons] = useState(false);

  const icons = [
    {
      name: "Email",
      href: "mailto:arya.patel2354@gmail.com",
      icon: <FaRegEnvelope />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Arya-P05",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arya-pa/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/arya.p05/",
      icon: <FaInstagram />,
    },
  ];

  const handleGetInTouch = () => {
    setShowIcons((prev) => !prev);
  };

  return (
    <>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.1,
          }}
          style={{ width: "100%", textAlign: "center" }}
        >
          <div className="letter-container">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              Hi, I'm{" "}
              <a
                href="https://github.com/Arya-P05"
                target="_blank"
                rel="noopener noreferrer"
                className="ne-resize-link"
              >
                <span className="styled-text">Arya</span>
              </a>
              .
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              I enjoy building. <br></br> Sometimes, I{" "}
              <a
                href="https://github.com/Arya-P05"
                target="_blank"
                rel="noopener noreferrer"
                className="ne-resize-link"
              >
                <span className="styled-text">hack</span>
              </a>{" "}
              together things that work.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              By day, I work as an ML and Backend engineer at{" "}
              <span className="styled-text">MPAC</span> &<br />
              study CS + Finance at{" "}
              <a
                href="https://uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="ne-resize-link"
              >
                <span className="styled-text">UWaterloo</span>
              </a>
              .
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              By life, I{" "}
              <a
                href="https://aryap.me/memories"
                target="_blank"
                rel="noopener noreferrer"
                className="ne-resize-link"
              >
                <span className="styled-text">explore</span>
              </a>{" "}
              photography, the world, and capture fleeting moments on film.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="inline-container"
            >
              Feel free to{" "}
              <span
                className="ne-resize-link clickable-text"
                onClick={handleGetInTouch}
              >
                <span className="styled-text ">get in touch</span>.
              </span>
            </motion.p>
            <span className="inline-icons">
              <AnimatePresence>
                {showIcons && (
                  <motion.div
                    className="social-icons-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    {icons.map((icon) => (
                      <motion.a
                        key={icon.name}
                        href={icon.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {icon.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
            <motion.img
              src="/signature.svg"
              alt="Signature Logo"
              style={{
                width: "150px",
                height: "auto",
                paddingTop: "1rem",
                display: "block",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.4 }}
            />
          </div>
        </motion.div>
      </main>
    </>
  );
}
