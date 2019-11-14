import React, {Component} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {

  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo"/>
          <h2>{t('Welcome to React.js')}</h2>
          <button onClick={() => changeLanguage('el')}>el</button>
          <button onClick={() => changeLanguage('en')}>en</button>

        </div>
        <div className="Home-container">
          <div className="Home-items">
            <div className="Home-item">
              <h3 className="focus">
                {t('Declarative')}
              </h3>
              <div><p>
                <Trans name={'React.js'}>
                  React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                </Trans>
              </p>
                <p><Trans>Declarative views make your code more predictable and easier to debug.</Trans></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// extended main view with translate hoc
export default withTranslation('translations')(Home);
