import React, {Component} from "react";
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import Home from './Home';

import intl from 'react-intl-universal';
// common locale data
require('intl/locale-data/jsonp/el.js');

let i18nConfig = {
  locale: 'el',
  messages: {
    "home.welcome": "Καλώς 'Ηρθατε στο {name}!",
    "home.declarative": "Δηλωτικό",
    "home.declarative.p1": "To {name} καθιστά ανώφελη τη δημιουργία διαδραστικών διεπαφών χρήστη. Σχεδιάστε απλές προβολές για κάθε κράτος στο δικό σας\n" +
      "                εφαρμογή και το React θα ενημερώσει αποτελεσματικά και θα αποδώσει τα σωστά στοιχεία όταν τα δεδομένα σας\n" +
      "                αλλαγές.",
    "home.declarative.p2": "Οι δηλωτικές προβολές καθιστούν τον κώδικα πιο προβλέψιμο και πιο εύκολο στον εντοπισμό σφαλμάτων.",
    "home.component-based": "Βασισμένο σε στοιχεία",
    "home.component-based.p1": "Δημιουργήστε ενσωματωμένα στοιχεία που διαχειρίζονται τη δική τους κατάσταση, και στη συνέχεια συνθέστε τα για να δημιουργήσετε σύνθετα UI.",
    "home.component-based.p2": "Δεδομένου ότι η λογική συνιστωσών είναι γραμμένη σε JavaScript αντί για πρότυπα, μπορείτε εύκολα να περάσετε πλούσια δεδομένα\n" +
      "                  μέσω της εφαρμογής σας και να κρατήσετε την κατάσταση εκτός του & nbsp; DOM.",
  }
};

// app locale data
const locales = {
  [i18nConfig.locale]: i18nConfig.messages
};

export default class App extends Component {

  state = {initDone: false};

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    intl.init({
      currentLocale: i18nConfig.locale,
      locales,
    })
      .then(() => {
        // After loading CLDR locale data, start to render
        this.setState({initDone: true});
      });
  }

  render() {
    return (
      this.state.initDone &&
      <div>
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </Router>
      </div>
    );
  }

}
