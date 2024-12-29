import { motion } from "framer-motion";
import "../app/global.css";

export default function MainContent() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
        style={{ width: "100%", textAlign: "center" }}
      >
        <div className="letter-container">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            I'm <span className="styled-text">Arya</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            I love to build. <br />
            Sometimes, I <span className="styled-text">hack</span> together
            things that work.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            By day, I work as an ML and Backend engineer at{" "}
            <span className="styled-text">MPAC</span> &<br />
            study CS + Finance at <span className="styled-text">UWaterloo</span>
            .
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            By life, I <span className="styled-text">explore</span> photography,
            the world, and capture fleeting moments on film.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          >
            I'm always open for a{" "}
            <span className="styled-text">conversation.</span>
          </motion.p>
          <motion.img
            src="/signature.svg"
            alt="Signature Logo"
            style={{ width: "150px", height: "auto", paddingTop: "1rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />
        </div>
      </motion.div>
    </main>
  );
}
