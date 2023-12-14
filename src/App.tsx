import { About, Contacts, Hero, Navbar, ProjectsSection } from "./components";

function App() {
  return (
    <>
      <header className="space-y-12 lg:space-y-20">
        <Navbar />
        <Hero />
      </header>
      <main className="space-y-12 lg:space-y-20">
        <About />
        <ProjectsSection />
        <Contacts />
      </main>
    </>
  );
}

export default App;
