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
            <p className="about__text">Etiam nec pretium turpis. Vivamus a rhoncus tellus. Duis eu ornare diam. Suspendisse vestibulum dolor in lacus imperdiet, vitae sagittis erat gravida. Pellentesque placerat cursus tristique. Suspendisse rutrum laoreet ipsum nec volutpat. Donec commodo sed odio id rhoncus. </p>
            <p className="about__text">Quisque lobortis arcu ut odio commodo luctus. Sed eget aliquam lacus. Curabitur sem dui, vestibulum sit amet ultricies id.</p>
            <p className="about__text">Ut vitae bibendum magna. Proin id purus consequat, aliquet urna ut, auctor lacus. Sed non erat libero. Vestibulum eu lacus erat. Aliquam non metus eu enim posuere pharetra. Morbi tellus mauris, tincidunt vitae nisi eu, pharetra tempor augue.</p>
        </section>
    );
}

export default About;