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

export default Component;
