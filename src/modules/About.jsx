const About = () => {
    const gradYear = 2010;
    const yearsOfExperience = new Date().getFullYear() - gradYear;

    return (
        <section className="about">
            <h2 className="about__title">About</h2>
            <p className="about__text">I began my coding journey {yearsOfExperience} years ago immediately after earning my bachelor&rsquo;s in Interactive Media and Web Design from The Art Institute. Who would&rsquo;ve thought all the years I spent training and honing my design eye would lead to development.</p>
            <p className="about__text">These days I transform intricate designs into well-crafted, stunning and beautiful responsive websites that are visually flawless down to the pixel.</p>
            <p className="about__text">On the days I&rsquo;m not buried in my IDE, you&rsquo;ll find me indulging in PC games, 3D modeling and printing, or creating digital art on my tablet.</p>
        </section>
    );
}

export default About;