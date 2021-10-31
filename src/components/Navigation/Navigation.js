import "./Navigation.css";
import pathArcNav from "../../images/arc_nav.svg";
import {monthsName} from "../../utils/Constants";


function ListItem({data, onClickFunc, dataKey}) {
    return (
        <li className="navigation__item navigation__item_sub" onClick={_ => dataKey ? onClickFunc(dataKey): onClickFunc(data)}>
            <p className="navigation__item-text">
                {data}
            </p>
        </li>
    );
}

function Navigation({months, cites, city, month, onClickCity, onClickMonth}) {
    return (
        <nav className="navigation">
            <div className="navigation__section">
                <p className="navigation__text">
                    City:
                </p>
                <div className="navigation__container">
                    <ul className="navigation__list">
                        <li className="navigation__item" onClick={_ => onClickCity(city)}>
                            <p className="navigation__item-text">
                                {city}
                            </p>
                        </li>
                        <ul className="navigation__submenu">
                            {
                                Object.keys(cites).map((key) => (
                                    <ListItem data={cites[key]} onClickFunc={onClickCity}/>
                                ))
                            }
                        </ul>
                    </ul>
                    <img src={pathArcNav} className="navigation__image" alt="Навигационная стрелка"/>
                </div>
            </div>
            <div className="navigation__section">
                <p className="navigation__text">
                    Month:
                </p>
                <div className="navigation__container">
                    <ul className="navigation__list">
                        <li className="navigation__item" onClick={_ => onClickMonth(month)}>
                            <p className="navigation__item-text">
                                {monthsName[month]}
                            </p>
                        </li>
                        <ul className="navigation__submenu">
                            {
                                Object.keys(months).map((key) => (
                                    <ListItem data={monthsName[months[key]]} onClickFunc={onClickMonth} dataKey={months[key]}/>
                                ))
                            }
                        </ul>
                    </ul>
                    <img src={pathArcNav} className="navigation__image" alt="Навигационная стрелка" />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;