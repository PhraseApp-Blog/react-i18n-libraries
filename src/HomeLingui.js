import React from 'react';
import {Trans} from "@lingui/macro"
import logo from './logo.svg'
import './Home.css';

const HomeLingui = ({name}) => {
  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo"/>
        <Trans render="h2" id="home.welcome">Welcome to {name}!</Trans>
      </div>
      <div className="Home-container">
        <div className="Home-items">
          <div className="Home-item">
            <h3 className="focus">
              <Trans id="home.declarative">Declarative</Trans>
            </h3>
            <div>
              <p>
                <Trans id="home.declarative.p1">
                  {name} makes it painless to create interactive UIs.
                  Design simple views for each state in your application, and
                  React will efficiently update and render just the right components when your data changes.
                </Trans>
              </p>
              <p>
                <Trans id="home.declarative.p2">
                  Declarative views make your code more predictable and easier to debug.
                </Trans>
              </p>
            </div>
          </div>
          <div className="Home-item">
            <h3 className="focus">
              <Trans id="home.component-based">Component-Based</Trans>
            </h3>
            <div>
              <Trans render="p" id="home.component-based.p1">
                Build encapsulated components that manage their own state, then compose them to make complex UIs.
              </Trans>
              <Trans render="p" id="home.component-based.p2">
                Since component logic is written in JavaScript instead of templates, you can easily pass rich data
                through your app and keep state out of the DOM.
              </Trans>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLingui;
