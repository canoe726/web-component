// import App from './App.js';

// const root = document.querySelector('#root');
// new App(root);

import Component from './cores/Component.js';
import MyList from './src/components/myList.js';

class App {
  constructor() {
    const root = document.querySelector('#root');
    new MyList(root);
  }
}

new App();
