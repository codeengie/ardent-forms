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
                alt: 'A screenshot of Ardent Forms web application showing a few of the sections with content',
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
            info: 'ShelfDat is an inventory management web application. It enables the user to easily track what they have and where it is at anytime on any device. Its built using a modern web stack and boasts a responsive design, ensuring a seamless and optimized experience across desktop, tablet, and mobile devices.',
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
                alt: 'A screenshot of Endicia website homepage with a large hero banner colored in cyan',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/endicia.webp'
            },
            info: 'Endicia is a leading provider for online shipping solutions that empower businesses and individuals to streamline their shipping processes and maximize efficiency.',
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
                alt: 'A screenshot of Shipworks website homepage with a big heading and a video with a orange button',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/shipworks.webp'
            },
            info: 'ShipWorks is a cutting-edge e-commerce shipping and order management platform designed to simplify and streamline the shipping process for online businesses of all sizes.',
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
                alt: 'A screenshot of Stamps Registration showing a sign up form with a step tracker on top',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/webreg.webp'
            },
            info: 'Stamps Registration is the convenient and streamlined platform designed to help you seamlessly sign up for Stamps online postage service.',
            tech: ['React', '.NET', 'SQL', 'HTML', 'SCSS', 'Bootstrap', 'JavaScript'],
            title: 'Stamps Registration',
            type: 'App',
            url: 'https://registration.stamps.com'
        },
        {
            code: false,
            date: '2015-12-23',
            demo: false,
            image: {
                alt: 'A screenshot of Stamps website homepage with an image of cartoon characters and a mailbox',
                source: 'https://s3.us-west-1.amazonaws.com/images.ardentforms.com/images/projects/stamps.webp'
            },
            info: 'Stamps is an innovative and user-friendly online postage service that revolutionizes the way individuals and businesses handle their mailing needs.',
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