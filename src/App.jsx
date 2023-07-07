import './App.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Intro from './modules/Intro/Intro.jsx';
import About from './modules/About/About.jsx';
import Experience from './modules/Experience/Experience.jsx';
import Projects from './modules/Projects/Projects.jsx';
import Contact from './modules/Contact/Contact.jsx';
import { PortfolioContextProvider } from '../store/portfolio-context.jsx';
import { ScrollContextProvider } from '../store/scroll-context.jsx';

const App = () => {
    return (
        <>
            <ScrollContextProvider>
                <Header/>
                <main role="main">
                    <Intro/>
                    <About/>
                    <PortfolioContextProvider>
                        <Experience/>
                        <Projects/>
                    </PortfolioContextProvider>
                    <Contact/>
                </main>
            </ScrollContextProvider>
            <Footer/>
        </>
    )
}

export default App
