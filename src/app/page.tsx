"use client";
import { Inter } from "@next/font/google";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import ProudSection from "components/ProudSection";
import Web3Section from "components/Web3Section";
import ProgramSection from "components/ProgramSection";
import GoalsSection from "components/GoalsSection";
import ClassSection from "components/ClassSection";
import UserEngagement from "components/UserEngagement";
import Footer from "components/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      {isOpen && (
        <div className="absolute w-screen h-screen z-10  backdrop-blur-lg"></div>
      )}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <ProudSection />
      <Web3Section />
      <ProgramSection />
      <GoalsSection />
      <ClassSection />
      <UserEngagement />
      <Footer />
    </main>
  );
}
