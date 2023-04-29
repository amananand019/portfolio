import { About } from "./components/About";
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
      <SocialLinks />
    </div>
  );
}

export default App;
