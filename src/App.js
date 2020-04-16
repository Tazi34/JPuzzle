import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GameContainer from "./components/gameContainer/GameContainer";

import TypeRegionGameMode from "./components/gameModes/typeRegionGameMode/TypeRegionGameMode";
import RandomRegionGameMode from "./components/gameModes/randomRegionGameMode/RandomRegionGameMode";
import FindAllGameMode from "./components/gameModes/findAllGameMode/FindAllGameMode";

class App extends Component {
  render() {
    return (
        <div style={{minHeight: "100vh"}} className={"d-flex flex-column"}>
          <Router>
            <GameContainer>
              <Switch>
                <Route exact path="/">
                  <RandomRegionGameMode/>
                </Route>
                <Route exact path="/typetowin">
                  <TypeRegionGameMode/>
                </Route>
                <Route exact path="/findall">
                  <FindAllGameMode/>
                </Route>
              </Switch>
            </GameContainer>
          </Router>
        </div>
    );
  }
}

export default App;
