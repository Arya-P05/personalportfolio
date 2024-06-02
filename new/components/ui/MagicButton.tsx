import React from "react";

const MagicButton = ({
  text,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  text: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-30 md:mt-10 ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] z-0" />
      <span
        className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-3 z-10`}
      >
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
