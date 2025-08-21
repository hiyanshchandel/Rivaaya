import React from "react";
import Navbar from "../components/Navbar"
import ShopByCraft from "../components/ShopByCraft";
import ArtisanSpotlight from "../components/ArtisanSpotlight";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import JoinCTA from "@/components/JoinCTA";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-violet-50 text-slate-900">
      <Navbar />
      <Hero />
      <ShopByCraft />
      <ArtisanSpotlight />
      <AboutSection />
      <HowItWorks />
      <JoinCTA />
      <Footer />
    </div>
  );
}


