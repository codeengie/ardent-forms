const Contact = () => {
    // Functions need to be declared before return()
    const sendForm = () => {
        console.log('Sent an email!');
    };

    return (
        <div className="contact">
            <button onClick={sendForm}>Send</button>
        </div>
    )
}

export default Contact;