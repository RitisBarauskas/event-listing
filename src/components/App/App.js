import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Main from "../Main/Main";
import "./App.css";
import Header from "../Header/Header";
import api from "../../utils/Api";

function getAllMonths(cards, selectedMonth) {
    const months = []
    cards.map(card => {
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
        month = months[0]
    }
    return [month, months]
}

function getAllCites(cards, selectedCity) {
    const cites = []
    cards.map(card => {
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
        city = cites[0];
    }
    return [city, cites]
}


function getSelectedCards(cards, month, city) {
    return cards.filter((card) => {
        return (card.city === city && card.date.split('.')[1] === month)
    })
}

function App() {

    const [cards, setCards] = useState([]);
    const [months, setMonths] = useState([]);
    const [cites, setCites] = useState([]);
    const [month, setMonth] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        api.getAllEvents().then((cards) => {
            setMonths(getAllMonths(cards)[1]);
            setCites(getAllCites(cards)[1]);
            setMonth(getAllMonths(cards)[0]);
            setCity(getAllCites(cards)[0]);
            const newCards = getSelectedCards(cards, cards[0].date.split('.')[1], cards[0].city);
            setCards(newCards);
        }).catch((err) => console.log(err));
    }, []);

    const handleMonthClick = (month) => {
        api.getAllEvents().then((cards) =>{
            setMonths(getAllMonths(cards, month)[1]);
            const newCards = getSelectedCards(cards, month, city);
            setCards(newCards);
            setMonth(month);
        })
    }

    const handleCityClick = (city) => {
        api.getAllEvents().then((cards) =>{
            setCites(getAllCites(cards, city)[1]);
            const newCards = getSelectedCards(cards, month, city);
            setCards(newCards);
            setCity(city);
        })
    }

    const handleLikeClick = (card) => {
        console.log(card);
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
                      />
                      <Main
                        cards={cards}
                        onClickLike={handleLikeClick}
                      />
                  </Route>
              </Switch>
          </div>
      </div>
  );
}

export default App;