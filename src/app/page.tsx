"use client";
import NavBar from './label';
import Trust from './trust';
import Testimonial from './testimonial';
import Mission from './mission';
import Cases from './cases';
import Features from './features';
import Video from './video';
import Box from './box';
import Scroll from './scroll'
import Bottom from './bottom'

export default function Home() {

  return (
    <main className="min-h-screen bg-white text-black relative">
      <NavBar />
      <Mission />
      <h1 className="text-4xl text-center mt-40 mb-20 font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Trusted By the World&apos;s Best Companies ...
          </h1>
      <Trust />
      <h1 className="text-4xl text-center font-bold py-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            And Employees
          </h1>
      <Testimonial />
      <Cases />
      <Features />
      <Video />
      <Box />
      <Scroll />
      <Bottom />

    </main>
  );
}
