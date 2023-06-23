import './App.scss';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Intro from "./modules/Intro.jsx";
import About from "./modules/About.jsx";
import Experience from "./modules/Experience.jsx";
import Projects from "./modules/Projects.jsx";
import Contact from "./modules/Contact.jsx";

const App = () => {
  return (
      <>
          <Header/>
          <Intro/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Footer/>
      </>
  )
}

export default App
