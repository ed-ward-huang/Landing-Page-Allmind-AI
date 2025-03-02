import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import yooli from "./yooli.png";
import Image from "next/image";

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-6 py-4 md:px-12 md:py-6 z-50">
      <div className="flex items-center gap-x-8">
      <div className="w-[100px] h-auto relative">
    <Image src={yooli} alt="Yooli Logo" width={100} height={50} />
    </div>
        
        <div className="hidden md:flex gap-8">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("for-business")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-600 hover:underline transition-colors">
              For Business
            </button>
            <AnimatePresence>
              {activeMenu === "for-business" && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-56 bg-white p-4 rounded-lg shadow-lg border border-gray-100"
                >
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    GTM Enablement
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Learning
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Learning
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Learning
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Learning
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#pricing" className="hover:text-blue-600 hover:underline transition-colors">
            Pricing
          </a>
          <a href="#about" className="hover:text-blue-600 hover:underline transition-colors">
            About
          </a>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("use-cases")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-600 hover:underline transition-colors">
              Use Cases
            </button>
            <AnimatePresence>
              {activeMenu === "use-cases" && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-56 bg-white p-4 rounded-lg shadow-lg border border-gray-100"
                >
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    GTM Enablement
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Learning
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Learning
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Learning
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Learning
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("Resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-600 hover:underline transition-colors">
              Use Cases
            </button>
            <AnimatePresence>
              {activeMenu === "Resources" && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-56 bg-white p-4 rounded-lg shadow-lg border border-gray-100"
                >
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Resources
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    R
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Res
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Resour
                  </a>
                  <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded">
                    Resources
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      

      <div className="flex items-center gap-4">
        <a href="#signin" className="text-blue-600 hover:underline transition-colors">
          Sign In
        </a>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90">
          Get Yoodli
        </button>
        <button className="border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100">
          Talk to Sales
        </button>
      </div>
    </nav>
  );
}