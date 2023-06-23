import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
    // Input fields
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputNameIsValid, setInputNameIsValid] = useState(false);
    const [inputNameTouched, setInputNameTouched] = useState(false);

    const inputNameChangeHandler = event => {
        setInputName(event.target.value);
    }

    const inputEmailChangeHandler = event => {
        setInputEmail(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        setInputNameTouched(true);

        if (inputName.trim() === '') {
            setInputNameIsValid(false);
            return;
        }

        setInputNameIsValid(true);
        setInputName('');
        setInputEmail('')
    }

    const inputNameIsInvalid = !inputNameIsValid && inputNameTouched;

    // Sets validation classes
    const inputNameClass = inputNameIsInvalid ? 'contact__form-wrap contact__form-wrap--invalid' : 'contact__form-wrap'

    return (
        <section className="contact">
            <h2 className="contact__title">Contact</h2>
            <p className="contact__text">Feel free to contact me and I will get back to you as soon as possible</p>
            <form className="contact__form" onSubmit={formSubmitHandler}>
                <div className={inputNameClass}>
                    {/*<label className="contact__form-label" htmlFor="name">Name</label>*/}
                    <input
                        className="contact__form-field"
                        id="name"
                        type="text"
                        onChange={inputNameChangeHandler}
                        placeholder="Name"
                        value={inputName}
                    />
                    {inputNameIsInvalid && <p>Name must not be empty</p>}
                </div>
                <div className="contact__form-wrap">
                    {/*<label className="contact__form-label" htmlFor="email">Email</label>*/}
                    <input
                        className="contact__form-field"
                        id="email"
                        type="email"
                        onChange={inputEmailChangeHandler}
                        placeholder="Email"
                        value={inputEmail}
                    />
                </div>
                <div className="contact__form-wrap contact__form-wrap--ta">
                    <textarea className="contact__form-textarea" maxLength="415" placeholder="Message"></textarea>
                </div>
                <button className="contact__form-button">Send</button>
            </form>
        </section>
    )
}

export default Contact;