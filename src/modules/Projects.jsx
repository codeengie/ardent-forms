import ProjectListing from "../components/ProjectListing/ProjectListing.jsx";

const Projects = () => {
    // Temporary data while I implement API and DB
    // @todo Refactor to use API
    const projects = [
        {
            code: true,
            date: '2022-06-15',
            image: 'https://placehold.co/290x140',
            info: 'Amet aliquam id diam maecenas. Lectus proin nibh nisl condimentum id venenatis. Magnis dis parturient montes nascetur ridiculus mus. Duis tristique sollicitudin nibh sit.',
            tech: ['React', 'Vite', 'HTML', 'SCSS', 'AWS'],
            title: 'Ardent Forms',
            type: 'App',
            url: 'https://ardentforms.com'
        },
        {
            code: true,
            date: '2022-03-05',
            image: 'https://placehold.co/290x140',
            info: 'Justo laoreet sit amet cursus sit amet dictum sit. Et malesuada fames ac turpis egestas integer. Ante metus dictum at tempor commodo ullamcorper a lacus.',
            tech: ['Vue.js', 'HTML', 'SCSS', 'AWS'],
            title: 'The Cave Dev',
            type: 'App',
            url: 'https://thecavedev.com'
        },
        {
            code: true,
            date: '2021-02-15',
            image: 'https://placehold.co/290x140',
            info: 'Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. In iaculis nunc sed augue lacus viverra. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Lacus viverra vitae congue eu consequat ac.',
            tech: ['Vue.js', 'HTML', 'SCSS', 'JavaScript', 'AWS'],
            title: 'ShelfDat',
            type: 'App',
            url: 'https://shelfdat.com'
        },
        {
            code: false,
            date: '2020-09-11',
            image: 'https://placehold.co/290x140',
            info: 'Ornare lectus sit amet est placerat in egestas erat. Cras sed felis eget velit aliquet sagittis. Dolor sit amet consectetur adipiscing. Augue interdum velit euismod in pellentesque massa placerat duis.',
            tech: ['.NET', 'SQL', 'HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
            title: 'Endicia',
            type: 'Website',
            url: 'https://endicia.com'
        },
        {
            code: false,
            date: '2017-06-11',
            image: 'https://placehold.co/290x140',
            info: 'Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Pulvinar elementum integer enim neque volutpat.',
            tech: ['.NET', 'SQL', 'HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
            title: 'Shipworks',
            type: 'Website',
            url: 'https://shipworks.com'
        },
        {
            code: false,
            date: '2016-04-22',
            image: 'https://placehold.co/290x140',
            info: 'Scelerisque in dictum non consectetur. Sed id semper risus in hendrerit gravida rutrum quisque non. Libero nunc consequat interdum varius sit amet mattis.',
            tech: ['Steal.js', '.NET', 'SQL', 'HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
            title: 'Web Registration',
            type: 'App',
            url: 'https://webregistration.com'
        },
        {
            code: false,
            date: '2015-12-23',
            image: 'https://placehold.co/290x140',
            info: 'Libero id faucibus nisl tincidunt eget nullam non nisi est. Ultrices vitae auctor eu augue ut lectus arcu. Turpis egestas maecenas pharetra convallis posuere morbi leo urna.',
            tech: ['.NET', 'SQL', 'HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
            title: 'Stamps',
            type: 'Website',
            url: 'https://stamps.com'
        }
    ];

    return (
        <section className="projects" id="projectsRef">
            <h2 className="projects__title">Projects</h2>
            {projects.map((project, index) => <ProjectListing key={index} projectData={project}/>)}
        </section>
    );
}

export default Projects;