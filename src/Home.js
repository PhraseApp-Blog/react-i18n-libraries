import React, {Component} from 'react';
import {useIntl, FormattedMessage} from 'react-intl';
import logo from './logo.svg'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HomeHeader />
        <div className="Home-container">
          <div className="Home-items">
            <div className="Home-item">
              <h3 className="focus">
                <FormattedMessage id="home.declarative"/></h3>
              <div><p><FormattedMessage id="home.declarative.p1" values={{name: <i>React</i>}}/></p>
                <p><FormattedMessage id="home.declarative.p2"/></p>
              </div>
            </div>
            <div className="Home-item">
              <h3 className="focus"><FormattedMessage id="home.component-based"/></h3>
              <div>
                <p><FormattedMessage id="home.component-based.p1"/></p>
                <p><FormattedMessage id="home.component-based.p2"/></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

const HomeHeader = () => {
  const intl = useIntl();
  return (
    <div className="Home-header">
      <img src={logo} className="Home-logo" alt="logo"/>
      <h2>{intl.formatMessage({id: 'home.welcome'}, {name: 'React.js'})}</h2>
    </div>
  )
};
