import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import RecentProjects from '../components/home/RecentProjects';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Stats />
      <RecentProjects />
      <Testimonials />
    </div>
  );
}