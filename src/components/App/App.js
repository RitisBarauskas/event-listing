import {Route, Switch } from 'react-router-dom';
import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
      <div className="app">
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
  );
}

export default App;