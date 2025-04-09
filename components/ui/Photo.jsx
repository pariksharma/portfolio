"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px] xl:w-[445px] xl:h-[445px] mix-blend-lighten absolute mx-auto"
        >
          <Image
            src="/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain overflow-hidden rounded-full mx-auto"
          />
        </motion.div>
        <motion.svg
          className="w-[250px] h-[250px] xl:w-[445px] xl:h-[445px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Circle (Clockwise Rotation) */}
          <motion.circle
            cx="253"
            cy="253"
            r="250" // Slightly smaller than the viewBox
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360], // Full clockwise rotation
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner Circle (Counterclockwise Rotation) */}
          <motion.circle
            cx="253"
            cy="253"
            r="275" // Smaller inner circle
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [360, 0], // Reverse (counterclockwise) rotation
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
