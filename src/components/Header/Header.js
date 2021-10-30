import "./Header.css";
import Navigation from "../Navigation/Navigation";


function Header({months, cites, city, month}) {
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
            />
        </header>
    )
}

export default Header;