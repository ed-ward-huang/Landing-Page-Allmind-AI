'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import yooli from './yooli.png';

export default function ScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalBoxes = 3;

  const boxSpacing = 70; 
  const offset = (100 - boxSpacing) / 2; 

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const calculateProgress = () => {
      const { top, height } = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -top / (height - viewportHeight)));
      setScrollProgress(progress);
    };

    const handleScroll = () => requestAnimationFrame(calculateProgress);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const adjustedProgress = scrollProgress * (totalBoxes - 1);

  return (
    <section ref={sectionRef} className="min-h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
          <div className="relative h-full">
            <Image
              src={yooli}
              alt="Yoodli AI"
              className="object-cover rounded-2xl"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>


          <div className="relative h-full">
            <div className="relative h-full">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="absolute inset-x-0 flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{ top: `${(index - adjustedProgress) * boxSpacing + offset}vh` }}
                >
                  <span className="text-blue-600 font-bold mb-2">Step {index + 1}</span>
                  <h3 className="text-2xl font-bold mb-4">
                    {index === 0 && 'ALLMIND AI'}
                    {index === 1 && 'Use Allmind'}
                    {index === 2 && 'Landing page'}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {index === 0 && 'Frontend'}
                    {index === 1 && 'Backend'}
                    {index === 2 && 'FullStack'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
