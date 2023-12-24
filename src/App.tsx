import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/";
import { Home, Starter } from "./pages";

interface AppProps {
  // Definisci le props qui
}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="space-y-12 lg:space-y-20">
        <Routes>
          <Route index element={<Starter />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
