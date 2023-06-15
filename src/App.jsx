import './App.scss';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./modules/About.jsx";
import Experience from "./modules/Experience.jsx";
import Projects from "./modules/Projects.jsx";

const App = () => {
  return (
      <>
          <Header/>
          <About/>
          <Experience/>
          <Projects/>
          <Footer/>
      </>
  )
}

export default App
