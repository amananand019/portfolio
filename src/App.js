import { About } from "./components/About";
// import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { SocialLinks } from "./components/SocialLinks";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Technologies />
      {/* <Contact /> */}
      <SocialLinks />
    </div>
  );
}

export default App;
