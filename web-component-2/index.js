class Component {
  $target;
  $state;
  constructor ($target) {
    this.$target = $target;
    this.init();
    this.render();
  }
  init () {}
  template () {}
  render () {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent () {}
  setState (newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

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

const root = document.querySelector('#root');
new App(root);
