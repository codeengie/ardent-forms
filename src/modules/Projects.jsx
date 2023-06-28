import ProjectListing from "../components/ProjectListing/ProjectListing.jsx";

const Projects = () => {
    // Temporary data while I implement API and DB
    // @todo Refactor to use API
    const projects = [
        {
            code: true,
            date: '2022-06-15',
            demo: false,
            image: {
                alt: 'Placeholder Image',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/ardent-forms.webp'
            },
            info: 'Ardent Forms is my portfolio designed to showcase the websites and applications I\'ve developed in the past and present. Its built using a modern web stack and boasts a responsive design, ensuring a seamless and optimized experience across desktop, tablet, and mobile devices.',
            tech: ['React', 'Vite', 'HTML', 'SCSS', 'JavaScript', 'Node.js', 'NPM', 'AWS'],
            title: 'Ardent Forms',
            type: 'App',
            url: 'https://ardentforms.com'
        },
        {
            code: true,
            date: '2022-03-05',
            demo: false,
            image: {
                alt: 'A screenshot of The Cave Dev web application showing blog posts presented on the homepage',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/thecavedev.webp'
            },
            info: 'The Cave Dev is a personal blogging web application that serves as a space where I can write, express my thoughts, and expertise on all things related to Web Development. Its built using a modern web stack and boasts a responsive design, ensuring a seamless and optimized experience across desktop, tablet, and mobile devices.',
            tech: ['Vue.js', 'HTML', 'SCSS', 'JavaScript', 'Node.js', 'NPM', 'AWS'],
            title: 'The Cave Dev',
            type: 'App',
            url: 'https://thecavedev.com'
        },
        {
            code: true,
            date: '2021-02-15',
            demo: true,
            image: {
                alt: 'A screenshot of the ShelfDat web application showing a dashboard interface with recent media',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/shelfdat.webp'
            },
            info: 'ShelfDat is an inventory management web application. It enables the user to easily track what they have and where it is at anytime on any device. ShelfDat is built using a modern web stack and boasts a responsive design, ensuring a seamless and optimized experience across desktop, tablet, and mobile devices.',
            tech: ['Vue.js', 'HTML', 'SCSS', 'JavaScript', 'Node.js', 'NPM', 'AWS'],
            title: 'ShelfDat',
            type: 'App',
            url: 'https://shelfdat.com'
        },
        {
            code: false,
            date: '2020-09-11',
            demo: false,
            image: {
                alt: 'Placeholder Image',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/endicia.webp'
            },
            info: 'Ornare lectus sit amet est placerat in egestas erat. Cras sed felis eget velit aliquet sagittis. Dolor sit amet consectetur adipiscing. Augue interdum velit euismod in pellentesque massa placerat duis.',
            tech: ['.NET', 'SQL', 'HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
            title: 'Endicia',
            type: 'Website',
            url: 'https://endicia.com'
        },
        {
            code: false,
            date: '2017-06-11',
            demo: false,
            image: {
                alt: 'Placeholder Image',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/shipworks.webp'
            },
            info: 'Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Pulvinar elementum integer enim neque volutpat.',
            tech: ['.NET', 'SQL', 'HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
            title: 'Shipworks',
            type: 'Website',
            url: 'https://shipworks.com'
        },
        {
            code: false,
            date: '2016-04-22',
            demo: false,
            image: {
                alt: 'Placeholder Image',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/webreg.webp'
            },
            info: 'Scelerisque in dictum non consectetur. Sed id semper risus in hendrerit gravida rutrum quisque non. Libero nunc consequat interdum varius sit amet mattis.',
            tech: ['Steal.js', '.NET', 'SQL', 'HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
            title: 'Web Registration',
            type: 'App',
            url: 'https://registration.stamps.com'
        },
        {
            code: false,
            date: '2015-12-23',
            demo: false,
            image: {
                alt: 'Placeholder Image',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/stamps.webp'
            },
            info: 'The design is clean, modern, and visually appealing, allowing users to navigate effortlessly through the various sections and access the information they need. With its responsive layout, the Stamps.com website ensures a consistent and optimized experience across desktop and mobile devices',
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