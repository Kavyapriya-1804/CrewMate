import "./Button.scss";

const Button = ({ type = 'button', className, onClick, text, children, isDisabled=false }) => (
    <button type={type} className={className} onClick={onClick} disabled={isDisabled}>
        {text}
        {children}
    </button>
);

export default Button;
