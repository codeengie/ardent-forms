import { useState } from 'react';

const Contact = () => {
    const [movie, setMovie] = useState([]);

    // Functions need to be declared before return()
    const sendForm = async () => {
        console.log('Sent an email!');

        try {
            const response = await fetch('https://swapi.dev/api/films/');

            if (!response.ok) {
                new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            setMovie(data);
            console.log(data);
        } catch (error) {
            console.error('Error', error.message);
        }
    };

    return (
        <section className="contact">
            <h2 className="contact__title">Contact</h2>
            <p className="contact__text">Feel free to contact me and I will get back to you as soon as possible</p>
            <button onClick={sendForm}>Send</button>
            <p>{movie.count}</p>
        </section>
    )
}

export default Contact;