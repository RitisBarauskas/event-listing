import "./Navigation.css";
import {Link} from "react-router-dom";
import pathArcNav from "../../images/arc_nav.svg";

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__section">
                <p className="navigation__text">
                    City:
                </p>
                <div className="navigation__container">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link to="/" className="navigation__link">
                                Пермь
                            </Link>
                        </li>
                        <ul className="navigation__submenu">
                            <li className="navigation__item navigation__item_sub">
                                <Link to="/" className="navigation__link">
                                    Москва
                                </Link>
                            </li>
                            <li className="navigation__item navigation__item_sub">
                                <Link to="/" className="navigation__link">
                                    Амстердам
                                </Link>
                            </li>
                        </ul>
                    </ul>
                    <img src={pathArcNav} className="navigation__image" />
                </div>
            </div>
            <div className="navigation__section">
                <p className="navigation__text">
                    Month:
                </p>
                <div className="navigation__container">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link to="/" className="navigation__link">
                                January
                            </Link>
                        </li>
                        <ul className="navigation__submenu">
                            <li className="navigation__item navigation__item_sub">
                                <Link to="/" className="navigation__link">
                                    February
                                </Link>
                            </li>
                            <li className="navigation__item navigation__item_sub">
                                <Link to="/" className="navigation__link">
                                    June
                                </Link>
                            </li>
                        </ul>
                    </ul>
                    <img src={pathArcNav} className="navigation__image" />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;