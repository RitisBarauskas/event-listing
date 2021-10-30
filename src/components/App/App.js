import {Route, Switch } from 'react-router-dom';
import Main from "../Main/Main";
import "./App.css";
import Header from "../Header/Header";

function App() {
  return (
      <div className="app">
          <div className="app__container">
              <Switch>
                  <Route path="/">
                      <Header />
                      <Main />
                  </Route>
              </Switch>
          </div>
      </div>
  );
}

export default App;