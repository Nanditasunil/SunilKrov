import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import Canvas from "./component/Canvas";
import Videos from "./component/Videos";
import Cartoons from "./component/Cartoons";
import Books from "./component/Books";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Canvas />
      <Videos />
      <Cartoons />
      <Books />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
