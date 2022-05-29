import Component from './cores/Component.js';
import MyList from './src/components/myList.js';

class App extends Component {
  constructor() {
    const root = document.querySelector('#root');
    new MyList(root);
  }
}

export default App;
