import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import Canvas from "./component/Canvas";
import Videos from "./component/Videos";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Canvas />
      <Videos />
    </>
  );
}

export default App;
