import Component from './cores/Component.js';
import { store } from './store/VuexStore.js';

const Result = () => {
  return `<p>a + b = ${store.state.a + store.state.b}</p>`;
}

const InputA = () => {
  return `<input id="stateA" value="${store.state.a}"/>`;
}

const InputB = () => {
  return `<input id="stateB" value="${store.state.b}"/>`;
}

class App2 extends Component {
  template () {
    return `
      ${Result()}
      ${InputA()}
      ${InputB()}
    `;
  }

  setEvent () {
    this.addEvent('keyup', '#stateA', ({ key, target }) => {
      if (key !== 'Enter') return false;
      store.commit('SET_A', Number(target.value));
    });

    this.addEvent('keyup', '#stateB', ({ key, target }) => {
      if (key !== 'Enter') return false;
      store.commit('SET_B', Number(target.value));
    });
  }
}

export default App2;
