import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "@/components/icon.css"; // Import CSS file for styling

interface IconButtonProps {
  positionClasses: string;
  otherClasses?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  positionClasses,
  otherClasses,
}) => {
  return (
    <button className={`relative ${positionClasses} ${otherClasses}`}>
      <span className="absolute inset-0 flex items-center justify-center icon">
        <FaLinkedin />
      </span>
      <span className="absolute inset-0 flex items-center justify-center icon hover-icon">
        <FaLinkedin />
      </span>
    </button>
  );
};

export default IconButton;
