import { motion } from "framer-motion";

const LogoAnimation = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => (
  <motion.div
    style={{
      position: "absolute", // Change to absolute positioning
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
    }}
    initial={{ opacity: 1 }}
    animate={{
      top: "4%", // Move logo to the top center
      left: "50%",
      transform: "translateX(-50%)", // Ensure it's always centered
      opacity: 1,
    }}
    transition={{
      duration: 2.5,
      ease: "easeInOut",
    }}
    onAnimationComplete={onAnimationEnd}
  >
    <motion.img
      src="/signature.svg"
      alt="Signature Logo"
      initial={{ scale: 1.5 }} // Start with a larger size
      animate={{ scale: 1 }} // Shrink down to normal size as it animates upwards
      transition={{ duration: 2.5, ease: "easeInOut" }}
      style={{ width: "150px", height: "auto" }} // Ensure the logo size is consistent
    />
  </motion.div>
);

export default LogoAnimation;
