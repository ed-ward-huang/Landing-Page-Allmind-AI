"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["job interviews", "sales pitches", "management training"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" relative flex flex-col items-center text-center py-64 bg-gradient-to-b from-white to-blue-50">
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-blue-50 -z-10"></div>
      <h1 className="text-4xl font-bold">
        AI Roleplays for{" "}
        <span className="relative inline-block h-[40px] w-auto overflow-hidden align-middle">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="block text-blue-600"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>
      <p className="text-gray-600 max-w-2xl mt-4">
        START USING ALLMIND AI TODAYYY
      </p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition">
          Start roleplaying
        </button>
        <button className="px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-full shadow-md hover:bg-blue-50 transition">
          Use Yooli
        </button>
      
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-blue-50 overflow-visible">

  <div className="absolute top-32 left-0 right-0 h-32 w-full">
    <svg 
      viewBox="0 0 1440 100" 
      className="w-full h-full rotate-180" 
      preserveAspectRatio="none"
    >
      <path 
        fill="#EFF6FF" 
        d="M0,100 Q720,-50 1440,100 L1440,100 L0,100 Z"
      ></path>
    </svg>
  </div>
</div>
<div className="absolute inset-0 bg-white -z-10"></div>


    </div>
  );
}
