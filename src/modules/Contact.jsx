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
            <button onClick={sendForm}>Send</button>
            <p>{movie.count}</p>
        </section>
    )
}

export default Contact;