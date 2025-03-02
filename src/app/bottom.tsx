// components/CurvedSection.js
import React from "react";

export default function Bottom() {
  return (
    <section className="relative bg-[#0B0E5B] text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 pointer-events-none">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,120 
               C480,0 960,0 1440,120 
               L1440,0 
               L0,0Z"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
        </div>

        <div className="grid gap-8 text-center sm:grid-cols-3">

          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-white text-[#0B0E5B] w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">AI</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Software Development</h3>
            <p className="text-sm">
              Artificial Intelligence
            </p>
          </div>

          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-white text-[#0B0E5B] w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">AI</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Software Development</h3>
            <p className="text-sm">
              Artificial Intelligence
            </p>
          </div>

          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-white text-[#0B0E5B] w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">AI</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Software Development</h3>
            <p className="text-sm">
              Artificial Intelligence
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#0B0E5B]">
            <span className="font-bold">AI</span>
          </div>
          <p className="mb-2 text-sm">
            Certifications <br />
          </p>
        </div>
      </div>
    </section>
  );
}
