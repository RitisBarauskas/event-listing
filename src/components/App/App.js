import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Main from "../Main/Main";
import "./App.css";
import Header from "../Header/Header";
import api from "../../utils/Api";

function getAllMonths(cards) {
    const months = []
    cards.map(card => {
        const month = card.date.split('.')[1];
        if (!months.includes(month)) {
            months.push(month);
        }
    })
    months.sort();
    const month = months.shift();
    return [month, months]
}

function getAllCites(cards) {
    const cites = []
    cards.map(card => {
        const city = card.city;
        if (!cites.includes(city)) {
            cites.push(city);
        }
    })
    cites.sort();
    const city = cites.shift()
    return [city, cites]
}


function App() {

    const [cards, setCards] = useState([]);
    const [months, setMonths] = useState('');
    const [cites, setCites] = useState('');
    const [month, setMonth] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        api.getAllEvents().then((cards) => {
            setCards(cards);
            setMonths(getAllMonths(cards)[1]);
            setCites(getAllCites(cards)[1]);
            setMonth(getAllMonths(cards)[0]);
            setCity(getAllCites(cards)[0]);
        }).catch((err) => console.log(err));
    }, []);



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
                      />
                      <Main
                        cards={cards}
                      />
                  </Route>
              </Switch>
          </div>
      </div>
  );
}

export default App;