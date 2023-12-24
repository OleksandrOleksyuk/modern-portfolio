import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/";
import { Blog, Home, Login, Starter } from "./pages";

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
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
