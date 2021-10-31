import "./Header.css";
import Navigation from "../Navigation/Navigation";


function Header({months, cites, city, month, onClickCity, onClickMonth}) {
    return (
        <header className="header">
            <h1 className="header__title">
                Event Listing
            </h1>
            <Navigation
                months={months}
                cites={cites}
                city={city}
                month={month}
                onClickCity={onClickCity}
                onClickMonth={onClickMonth}
            />
        </header>
    )
}

export default Header;