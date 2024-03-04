import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Valery</em></strong><br />
                a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a className="btn" href="https://github.com/Laun4eroja" target="_blank">GitHub</a>
            </div>
        </header>
    );
}
 
export default Header;