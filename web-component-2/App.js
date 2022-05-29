import Component from './cores/Component.js';
import MyListHeader from './src/components/myListHeader.js';

class App extends Component {
  init () {
    this.$state = {
      isFilter: 0,
      items: [
        {
          seq: 1,
          contents: 'item1',
          active: false,
        },
        {
          seq: 2,
          contents: 'item2',
          active: true,
        },
        {
          seq: 3,
          contents: 'item3',
          active: false,
        },
      ]
    };
  }
  
  template () {
    return `
      <header data-component="item-appender"></header>
      <main data-component="items></main>
      <footer data-component="item-filter"></footer>
    `;
  }

  mounted () {
    const { addItem } = this;

    const $myListHeader = this.$target.querySelector('[data-component="item-appender"]');
    new MyListHeader($myListHeader, {
      addItem: addItem.bind(this),
    });
  }

  addItem (contents) {
    const { items } = this.$state;
    const seq = Math.max(0, ...items.map(item => item.seq));
    const active = false;
    this.setState({
      ...this.$state,
      items: [
        ...items,
        { seq, contents, active }
      ],
    });
  }
}

export default App;
