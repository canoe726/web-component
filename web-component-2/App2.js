import Component from './cores/Component.js'

class App2 extends Component {
  initState () {
    return this.$state = {
      a: 10,
      b: 20,
    };
  }

  template () {
    const { a, b } = this.$state;

    return `
      <p>a + b = ${a + b}</p>
      <input id="stateA" value="${a}"/>
      <input id="stateB" value="${b}"/>
    `;
  }

  setEvent () {
    this.addEvent('keyup', '#stateA', ({ key, target }) => {
      if (key !== 'Enter') return false;
      this.setState({
        ...this.$state,
        a: Number(target.value),
      });
    });

    this.addEvent('keyup', '#stateB', ({ key, target }) => {
      if (key !== 'Enter') return false;
      this.setState({
        ...this.$state,
        b: Number(target.value),
      });
    });
  }
}

export default App2;
