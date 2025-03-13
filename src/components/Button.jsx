import "./Button.css";
function Button({legend="Tolieck is awesome", myColor=""}) {

    return (
        <button className={myColor}>{legend}</button>
    );
}

export default Button;