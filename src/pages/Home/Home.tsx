import React from "react";
import { Contacts } from "@/components/";
import { About, Hero, ProjectsSection } from "./components";

interface HomeProps {
  // Definisci le props qui
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <main className="space-y-12 lg:space-y-20">
        <About />
        <ProjectsSection />
        <Contacts />
      </main>
    </>
  );
};

export default Home;
