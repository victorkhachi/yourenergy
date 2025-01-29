import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import RecentProjects from '../components/home/RecentProjects';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import sampleVideo from "../assets/WhatsApp Video 2025-01-23 at 17.47.20.mp4"

export default function Home() {
  return (
    <div>
      <Hero />
      <video style={{ height: "400px", margin: "24px auto" }} className="w-full max-w-lg rounded-xl shadow-lg" autoPlay loop controls >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Features />
      <Stats />
      <RecentProjects />
      <Testimonials />
    </div>
  );
}