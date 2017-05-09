import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import './index.css';
import Routes from './routes';
import { AppContainer } from 'react-hot-loader';

const renderApp = (Component) => {
  render(
    <AppContainer>
      { Component }
    </AppContainer>,
    document.getElementById('App')
  );
};

renderApp(Routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    renderApp(Routes);
  });
}
