class Store {
  #state;
  #mutation;
  #actions;
  state = {};

  constructor ({ state, mutations, actions }) {
    this.#state = state;
    this.#mutation = mutations;
    this.#actions = actions;

    Object.keys(state).forEach(key => {
      Object.defineProperty(this.state, key, {
        get: () => this.#state[key],
      })
    });
  }

  commit (action, payload) {
    this.#mutation[action](this.#state, payload);
  }

  dispatch (action, payload) {
    return this.#actions[action]({
      state: this.#state,
      commit: this.commit.bind(this),
      dispatch: this.dispatch.bind(this),
    }, payload);
  }
}

export default Store;
