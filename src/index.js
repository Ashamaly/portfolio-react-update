// REMEMBER
// RUN  npm run deploy
// IN ORDER TO UPDATE YOUR CHANGES HERE TO GH PAGES
// THANKS ASH LOVE YOU
// add more projects

import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// import Header from './header';
// import Footer from './footer';
import Projects from './projects';
import Skills from './skills';
import Landing from './landing'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Header /> */}
    <Landing />
    <App />
    <Projects />
    <Skills />
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
