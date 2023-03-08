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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
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
