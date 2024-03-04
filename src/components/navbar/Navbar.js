import "./style.css";

import logo from "./../../img/logo.png";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__row">
                    <a className="logo" href="./index.html">
                        <img src={logo} alt="logo" />
                    </a>

                    <button className="dark-mode-btn">
                        <img className="dark-mode-btn__icon" src={sun} alt="Light mode" />
                        <img className="dark-mode-btn__icon" src={moon} alt="Dark mode" />
                    </button>

                    <ul>
                        <li><a className="nav__link nav__link--active" href="./index.html">Home</a></li>
                        <li><a className="nav__link" href="./projects.html">Projects</a></li>
                        <li><a className="nav__link" href="./contacts.html">Contacts</a></li>
                    </ul>
                    <div className="burger">
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;