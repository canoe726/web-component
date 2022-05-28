import Component from './cores/Component.js';

class App extends Component {
  init () {
    this.$state = {
      items: ['item1', 'item2', 'item3', 'item4']
    };
  }

  template () {
    const { items } = this.$state;
    return `
      <ul>
        ${items.map((item) => {
          return `
            <li>${item}</li>
          `;
        }).join('')}
      </ul>
      <button id="append">Add</button>
    `;
  }

  setEvent () {
    const btn = this.$target.querySelector('#append');
    btn.addEventListener('click', () => {
      const { items } = this.$state;
      this.setState({
        ...this.$state,
        items: [
          ...items,
          `item${items.length + 1}`,
        ]
      })
    });  
  }
}

export default App;
