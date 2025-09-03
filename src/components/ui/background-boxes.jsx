"use client";
import React from "react";
import { motion } from "framer-motion";

// Simple className utility
const cn = (...classes) => classes.filter(Boolean).join(' ');

export const BoxesCore = ({
  className,
  ...rest
}) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "#fb923c", // orange-400
    "#f97316", // orange-500
    "#ea580c", // orange-600
    "#dc2626", // red-600
    "#ef4444", // red-500
    "#f59e0b", // amber-500
    "#fbbf24", // amber-400
    "#fed7aa", // orange-200
    "#fecaca", // red-200
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute inset-0 z-0 flex h-full w-full p-4 opacity-30",
        className
      )}
      {...rest}>
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="relative h-8 w-16 border-l border-orange-300/60">
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-orange-300/60">
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-orange-300/50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore); 