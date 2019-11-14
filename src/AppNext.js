import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import {I18nextProvider} from "react-i18next";
import i18n from './i18n';
import HomeNext from "./HomeNext";

const HomeView = () => (<I18nextProvider i18n={ i18n }>
  <HomeNext />
</I18nextProvider>);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeView} />
    </Switch>
  </Router>);

export default App;


