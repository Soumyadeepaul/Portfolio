import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSidebar from "./components/ProjectsSidebar";
import Projects from "./components/Projects";
import Activities from "./components/Activities";

function App() {
  return (
    <div>
      <Navbar />

      <div className="layout">
        {/* LEFT */}
        <div>
          <Hero />

          {/* 👇 This will appear ONLY on small screens */}
          <div className="mobile-projects">
            <Projects />
          </div>
          

          {/* later: Experience, Activities */}
          <Activities />
        </div>

        {/* RIGHT SIDEBAR (desktop only) */}
        <div className="sidebar">
          <ProjectsSidebar />
        </div>
      </div>
    </div>
  );
}



export default App;