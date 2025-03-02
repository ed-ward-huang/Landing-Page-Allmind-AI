"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import yooli from "./yooli.png"; 

const testimonials = [
  {
    name: "Edward HUang",
    title: "SE",
    quote:
      "ALLMIND AI IS THE BEST BLAH  BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH",
    image: yooli,
  },
  {
    name: "Awaar",
    title: "ALLMIND",
    quote:
      "ALLMIND IS GREAT! ALLMIND IS GREAT! BLAH  BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH",
    image: yooli,
  },
  {
    name: "ALLMIND",
    title: "ALLMIND ai",
    quote:
      "ALLMIND AI BLAH  BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAh",
    image: yooli,
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-40">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides
        loop
        navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className={`p-6 border rounded-lg shadow-md transition-all duration ${
                index === activeIndex
                  ? "border-2 border-blue-500 shadow-lg"
                  : "border-gray"
              }`}
            >
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white"></div>
    </div>
  );
}