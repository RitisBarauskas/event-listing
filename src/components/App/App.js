import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Main from "../Main/Main";
import "./App.css";
import Header from "../Header/Header";
import api from "../../utils/Api";

function getAllMonths(cards, selectedMonth) {
    const months = []
    cards.forEach(card => {
        const month = card.date.split('.')[1];
        if (!months.includes(month)) {
            months.push(month);
        }
    })
    months.sort();
    let month = '';
    if (selectedMonth) {
        month = selectedMonth;
        months.splice(months.indexOf(month), 1);
    } else {
        month = months.shift()
    }
    return [month, months]
}

function getAllCites(cards, selectedCity) {
    const cites = []
    cards.forEach(card => {
        const city = card.city;
        if (!cites.includes(city)) {
            cites.push(city);
        }
    })
    cites.sort();
    let city = '';
    if (selectedCity) {
        city = selectedCity;
        cites.splice(cites.indexOf(city), 1);
    } else {
        city = cites.shift();
    }
    return [city, cites]
}


function getSelectedCards(cards, month, city) {
    return cards.filter((card) => {
        return (card.city === city && card.date.split('.')[1] === month)
    })
}

function getFavoriteCards(cards) {
    return cards.filter((card) => {
        return (localStorage.getItem(card.id));
    })
}

function App() {

    const [cards, setCards] = useState([]);
    const [months, setMonths] = useState([]);
    const [cites, setCites] = useState([]);
    const [month, setMonth] = useState('');
    const [city, setCity] = useState('');
    const [favorites, setFavorites] = useState('0');
    const [isFavorites, setIsFavorites] = useState(false);

    useEffect(() => {
        api.getAllEvents().then((cards) => {
            const month = cards[0].date.split('.')[1]
            const city = cards[0].city;
            return {cards, month, city};
        }).then(({cards, month, city}) => {
            setCity(city);
            setMonth(month);
            setMonths(getAllMonths(cards, month)[1]);
            setCites(getAllCites(cards, city)[1]);
            const newCards = getSelectedCards(cards, month, city);
            setCards(newCards);
            setFavorites(localStorage.length);
        }).catch((err) => console.log(err));
    }, []);

    const handleMonthClick = (month) => {
        api.getAllEvents().then((cards) =>{
            setMonths(getAllMonths(cards, month)[1]);
            const newCards = getSelectedCards(cards, month, city);
            setCards(newCards);
            setMonth(month);
        }).catch((err) => console.log(err));
    }

    const handleCityClick = (city) => {
        api.getAllEvents().then((cards) =>{
            setCites(getAllCites(cards, city)[1]);
            const newCards = getSelectedCards(cards, month, city);
            setCards(newCards);
            setCity(city);
        }).catch((err) => console.log(err));
    }

    const handleLikeClick = (card) => {
        if (localStorage.getItem(card.id)) {
            localStorage.removeItem(card.id);
        } else {
            localStorage.setItem(card.id, 'like');
        }
        api.getAllEvents().then((cards) =>{
            setMonths(getAllMonths(cards, month)[1]);
            let newCards = []
            if (isFavorites){
                newCards = getFavoriteCards(cards);
            } else {
                newCards = getSelectedCards(cards, month, city);
            }
            setCards(newCards);
            setMonth(month);
            setFavorites(localStorage.length);
        }).catch((err) => console.log(err));
    }

    const handleFavoritesClick = () => {
        setIsFavorites(true);
        api.getAllEvents().then((cards) => {
            const newCards = getFavoriteCards(cards);
            setCards(newCards);
        }).catch((err) => console.log(err));
    }

    const handleClickIndex = () => {
        setIsFavorites(false);
        api.getAllEvents().then((cards) => {
            const newCards = getSelectedCards(cards, month, city);
            setCards(newCards);
        })
    }

  return (
      <div className="app">
          <div className="app__container">
              <Switch>
                  <Route path="/">
                      <Header
                        months={months}
                        cites={cites}
                        city={city}
                        month={month}
                        onClickMonth={handleMonthClick}
                        onClickCity={handleCityClick}
                        favorites={favorites}
                        onClickFavorites={handleFavoritesClick}
                        isFavorites={isFavorites}
                        onClickIndex={handleClickIndex}
                      />
                      <Main
                        cards={cards}
                        onClickLike={handleLikeClick}
                        isFavorites={isFavorites}
                      />
                  </Route>
              </Switch>
          </div>
      </div>
  );
}

export default App;