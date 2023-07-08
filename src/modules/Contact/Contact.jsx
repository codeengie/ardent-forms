import { useState } from 'react';
import './Contact.scss';
import Button from '../../components/Button/Button.jsx';

const Contact = () => {
    /**
     * Name
     * Instead of creating additional states to manage I'm deriving `inputNameIsValid` and
     * `inputNameIsValid` from other states.
     * @todo Make input and textarea a component
     */
    const [inputName, setInputName] = useState('');
    const [inputNameTouched, setInputNameTouched] = useState(false);
    const inputNameIsValid = inputName.trim() !== '';
    const inputNameIsInvalid = !inputNameIsValid && inputNameTouched;

    const inputNameChangeHandler = event => {
        setInputName(event.target.value);
    }

    const inputNameBlurHandler = event => {
        setInputNameTouched(true);
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [inputEmail, setInputEmail] = useState('');
    const [inputEmailTouched, setInputEmailTouched] = useState(false);
    const inputEmailIsValid = emailPattern.test(inputEmail.trim());
    const inputEmailIsInvalid = !inputEmailIsValid && inputEmailTouched;

    const inputEmailChangeHandler = event => {
        setInputEmail(event.target.value);
    }

    const inputEmailBlurHandler = event => {
        setInputEmailTouched(true);
    }

    // Textarea
    const [textBox, setTextBox] = useState('');
    const [textBoxTouched, setTextBoxTouched] = useState(false);
    const textBoxIsValid = textBox.trim() !== '';
    const textBoxIsInvalid = !textBoxIsValid && textBoxTouched;

    const textBoxChangeHandler = event => {
        setTextBox(event.target.value);
    }

    const textBoxBlurHandler = event => {
        setTextBoxTouched(true);
    }

    // Validate form
    let formIsValid = false;

    // You can useEffect() but it's not needed
    if (inputNameIsValid && inputEmailIsValid && textBoxIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        setInputNameTouched(true);
        setInputEmailTouched(true);
        setTextBoxTouched(true);

        if (!inputNameIsValid && !inputEmailIsValid && !textBoxIsInvalid) {
            return;
        }

        console.log('Data to send: ', inputName, inputEmail, textBox);

        // Add spinner class

        // Clear form fields
        setInputName('');
        setInputNameTouched(false);

        setInputEmail('');
        setInputEmailTouched(false);

        // @todo This is not resetting, needs fixing
        setTextBox('');
        setTextBoxTouched(false);
    }

    const inputNameClass = inputNameIsInvalid ? 'contact__form-input contact__form-input--invalid' : 'contact__form-input';
    const inputEmailClass = inputEmailIsInvalid ? 'contact__form-input contact__form-input--invalid' : 'contact__form-input';
    const textBoxClass = textBoxIsInvalid ? 'contact__form-input contact__form-input--invalid' : 'contact__form-input';

    return (
        <section className="contact" id="contactRef">
            <h2 className="contact__title">Contact</h2>
            <p className="contact__text">Feel free to contact me and I&rsquo;ll get back to you as soon as possible</p>
            <form className="contact__form" onSubmit={formSubmitHandler}>
                <div className={inputNameClass}>
                    <div className="contact__form-wrap">
                        <input
                            className="contact__form-field"
                            id="name"
                            type="text"
                            onBlur={inputNameBlurHandler}
                            onChange={inputNameChangeHandler}
                            placeholder="Name"
                            value={inputName}
                        />
                    </div>
                    {inputNameIsInvalid && <p className="contact__form-error">Please enter your name</p>}
                </div>
                <div className={inputEmailClass}>
                    <div className="contact__form-wrap">
                        <input
                            className="contact__form-field"
                            id="email"
                            type="email"
                            onBlur={inputEmailBlurHandler}
                            onChange={inputEmailChangeHandler}
                            placeholder="Email"
                            value={inputEmail}
                        />
                    </div>
                    {inputEmailIsInvalid && <p className="contact__form-error">Please enter a valid email</p>}
                </div>
                <div className={textBoxClass}>
                    <div className="contact__form-wrap contact__form-wrap--ta">
                        <textarea
                            className="contact__form-textarea"
                            maxLength="415"
                            onBlur={textBoxBlurHandler}
                            onChange={textBoxChangeHandler}
                            placeholder="Message">
                        </textarea>
                    </div>
                    {textBoxIsInvalid && <p className="contact__form-error">Please enter a message</p>}
                </div>
                <Button cName="contact__form-button" disableButton={!formIsValid} text="Send"/>
                <p className="contact__form-message">Thank you! Your message has been sent. I will get back to you shortly.</p>
            </form>
        </section>
    )
}

export default Contact;