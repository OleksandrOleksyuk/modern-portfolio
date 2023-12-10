import { Hero, Navbar, ProjectsSection } from "./components";

function App() {
  return (
    <>
      <header className="space-y-4">
        <Navbar />
        <Hero />
      </header>
      <main className="space-y-4">
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
