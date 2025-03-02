import Image from "next/image";
import yooli from "./yooli.png";

export default function FeaturedIn() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <div className="mb-12 text-center">
        <h3 className="text-4xl font-semibold text-gray-600 mb-8">Featured in</h3>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index}
                className="relative h-64 w-64 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={yooli}
                  alt="Featured company"
                  className="object-contain p-4"
                  fill
                  sizes="(max-width: 768px) 33vw, 10vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}