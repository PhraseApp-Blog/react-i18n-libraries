import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import Home from "./Home";
import {i18nConfig} from "./config";
import {IntlProvider} from "react-intl";

const HomeView = () => (<IntlProvider
  locale={i18nConfig.locale}
  defaultLocale={i18nConfig.locale}
  messages={i18nConfig.messages}
>
  <Home />
</IntlProvider>);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/universal" component={HomeView} />
    </Switch>
  </Router>);

export default App;
