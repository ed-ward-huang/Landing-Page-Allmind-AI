import Image from "next/image";
import yooli from "./yooli.png"; 

export default function Trust() {
  return (
    <nav className="relative w-full">
      <section className="overflow-hidden whitespace-nowrap bg-white py-15 w-full">
        <div className="flex space-x-15 animate-marquee">
          {[...Array(40)].map((_, index) => (
            <Image key={index} src={yooli} alt="Yooli" width={10000} height={400} className="h-full w-auto" />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </nav>
  );
}