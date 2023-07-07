import './Button.scss';

const Button = (props) => {
    const buttonHtml =
        <button className={`${props.cName} button button--email button--spinner`}>
            <span className="button__icon"></span>
            <span className="button__text">{props.text}</span>
        </button>

    const linkHtml =
        <a className={`button button--link ${props.cName}`} href={props.url} rel="noreferrer" target="_blank">
            <span className="button__icon"></span>
            <span className="button__text">{props.text}</span>
        </a>

    const content = (props.cType === 'link') ? linkHtml : buttonHtml;

    return (
        <>
            {content}
        </>
    );
}

export default Button;