import { useContext, useEffect, useRef } from 'react';
import './About.scss';
import ScrollContext from '../../store/scroll-context.jsx';

const About = () => {
    const ctx = useContext(ScrollContext);
    const aboutRef = useRef();

    useEffect(() => {
        if (ctx.scrollToRef === 'aboutRef') {
            ctx.handleScrollToRef(aboutRef);
        }
    }, [ctx.scrollToRef, ctx.handleScrollToRef, ctx]);

    return (
        <section className="about" ref={aboutRef}>
            <h2 className="about__title">About</h2>
            <p className="about__text">I embarked on my coding journey over a decade ago, right after completing my bachelor&rsquo;s degree in Interactive Media and Web Design at The Art Institute. Little did I know that my years of dedicated training and refining my design sensibilities would ultimately lead me into the world of web development.</p>
            <p className="about__text">Today, I specialize in translating complex designs into meticulously crafted, visually stunning, and flawlessly responsive websites, ensuring that every pixel is perfectly aligned for a seamless user experience.</p>
            <p className="about__text">When I&rsquo;m not immersed in my Integrated Development Environment (IDE), you&rsquo;ll often find me immersed in other creative pursuits. I enjoy indulging in PC gaming, exploring 3D modeling and printing, and expressing my creativity through digital art on my tablet.</p>
            <p className="about__text"></p>
        </section>
    );
}

export default About;