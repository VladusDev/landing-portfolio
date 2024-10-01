import About from "./components/about/About";
import Pie from "./components/about/Circle";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
