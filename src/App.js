import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import Home from "./Home";
import HomeLingui from "./HomeLingui";
import {i18nConfig} from "./config";
import {IntlProvider} from "react-intl";
import { I18nProvider } from '@lingui/react';
import catalogEl from './locales/el/messages.js';
import catalogEn from './locales/en/messages.js';
const catalogs = { en: catalogEn, el: catalogEl };

const HomeView = () => (<IntlProvider
  locale={i18nConfig.locale}
  defaultLocale={i18nConfig.locale}
  messages={i18nConfig.messages}
>
  <Home />
</IntlProvider>);

const HomeLinguiView = () => (<I18nProvider
  language={i18nConfig.locale}
  catalogs={catalogs}
>
  <HomeLingui name={'React.js'}/>
</I18nProvider>);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/lingui" component={HomeLinguiView} />
    </Switch>
  </Router>);

export default App;
