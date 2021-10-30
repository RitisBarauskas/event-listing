import "./Navigation.css";
import {Link} from "react-router-dom";
import pathArcNav from "../../images/arc_nav.svg";

const monthsName = {
    "01": "January",
    "02": "Fabruary",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
}

function ListItem({data}) {
    return (
        <li className="navigation__item navigation__item_sub">
            <Link to="/" className="navigation__link">
                {data}
            </Link>
        </li>
    );
}

function Navigation({months, cites, city, month}) {
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
                                {city}
                            </Link>
                        </li>
                        <ul className="navigation__submenu">
                            {
                                Object.keys(cites).map((key, i) => (
                                    <ListItem data={cites[key]}/>
                                ))
                            }
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
                                {monthsName[month]}
                            </Link>
                        </li>
                        <ul className="navigation__submenu">
                            {
                                Object.keys(months).map((key, i) => (
                                    <ListItem data={monthsName[months[key]]}/>
                                ))
                            }
                        </ul>
                    </ul>
                    <img src={pathArcNav} className="navigation__image" />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;