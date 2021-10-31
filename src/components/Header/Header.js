import "./Header.css";
import Navigation from "../Navigation/Navigation";


function Header({months, cites, city, month, onClickCity, onClickMonth, favorites, onClickFavorites, isFavorites, onClickIndex}) {
    return (
        <header className="header">
            <h1 className="header__title" onClick={_ => onClickIndex()}>
                Event Listing
            </h1>
            {isFavorites ? '' :
                <Navigation
                months={months}
                cites={cites}
                city={city}
                month={month}
                onClickCity={onClickCity}
                onClickMonth={onClickMonth}
                />
            }

            <p className="header__likes" onClick={_ => onClickFavorites()}>
                {favorites}
            </p>
        </header>
    )
}

export default Header;