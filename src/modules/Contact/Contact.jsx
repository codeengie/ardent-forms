import { useContext, useEffect, useRef, useState } from 'react';
import './Contact.scss';
import Button from '../../components/Button/Button.jsx';
import ScrollContext from '../../../store/scroll-context.jsx';

const Contact = () => {
    const ctxScroll = useContext(ScrollContext);
    const contactRef = useRef();
    const [spinner, setSpinner] = useState(false);
    const [serverResponse, setServerResponse] = useState('');

    const sendEmail = async (name, email, message) => {
        const settings = {
            method: 'POST',
            /*headers: {
                'x-api-key': import.meta.env.VITE_API_KEY
            },*/
            body: JSON.stringify({
                senderName: name,
                senderEmail: email,
                senderMessage: message
            })
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, settings);
            //console.log(response);

            if (!response.ok) {
                new Error(`Request failed with status: ${response.status}`);
            }

            //const data = await response.json();
            //console.log(data);
            setServerResponse('Thank you! Your message has been sent. I will get back to you shortly.');
        } catch (error) {
            console.log('Error:', error.message);
            setServerResponse('Oops! Something went wrong on our end. Please try again.');
        }

        // @todo Refactor so you can use clearTimeout()
        const timeout = setTimeout(() => {
            setServerResponse('');
        }, 4000);
    }

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
    const [textBoxCounter, setTextBoxCounter] = useState(0);
    const maxChar = 415;
    const [textBox, setTextBox] = useState('');
    const [textBoxTouched, setTextBoxTouched] = useState(false);
    const textBoxIsValid = textBox.trim() !== '';
    const textBoxIsInvalid = !textBoxIsValid && textBoxTouched;

    const textBoxChangeHandler = event => {
        let inputValue = event.target.value;

        setTextBox(inputValue);
        setTextBoxCounter(inputValue.length);
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

        // If form is valid send the email
        setSpinner(true);
        await sendEmail(inputName, inputEmail, textBox);

        // Reset form, fields and buttons
        setInputName('');
        setInputNameTouched(false);
        setInputEmail('');
        setInputEmailTouched(false);
        setTextBox('');
        setTextBoxTouched(false);
        setSpinner(false);
    }

    const inputNameClass = inputNameIsInvalid ? 'contact__form-input contact__form-input--invalid' : 'contact__form-input';
    const inputEmailClass = inputEmailIsInvalid ? 'contact__form-input contact__form-input--invalid' : 'contact__form-input';
    const textBoxClass = textBoxIsInvalid ? 'contact__form-input contact__form-input--invalid' : 'contact__form-input';
    const spinnerClass = spinner ? 'contact__form-button button--spinner' : 'contact__form-button';

    useEffect(() => {
        if (ctxScroll.scrollToRef === 'contactRef') {
            ctxScroll.handleScrollToRef(contactRef);
        }
    }, [ctxScroll.scrollToRef, ctxScroll.handleScrollToRef, ctxScroll]);

    return (
        <section className="contact" ref={contactRef}>
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
                            maxLength={maxChar}
                            onBlur={textBoxBlurHandler}
                            onChange={textBoxChangeHandler}
                            placeholder="Message"
                            value={textBox}>
                        </textarea>
                    </div>
                    <div className="contact__form-counter">{`${textBoxCounter}/${maxChar}`}</div>
                    {textBoxIsInvalid && <p className="contact__form-error">Please enter a message</p>}
                </div>
                <Button cName={spinnerClass} disableButton={!formIsValid} text="Send"/>
                <p className="contact__form-message">{serverResponse}</p>
            </form>
        </section>
    )
}

export default Contact;