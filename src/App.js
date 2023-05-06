import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
// import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { SocialLinks } from "./components/SocialLinks";
import { Technologies } from "./components/Technologies";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />

      {/* <Contact /> */}
      <SocialLinks />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Technologies />
            </>
          }
        />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
