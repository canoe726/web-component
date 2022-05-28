const app = document.querySelector('#root');

let state = {
  items: ['item1', 'item2', 'item3', 'item4']
}

const render = () => {
  const { items } = state;
  app.innerHTML = `
    <ul>
      ${items.map((item) => {
        return `
          <li>${item}</li>
        `;
      }).join('')}
    </ul>
    <button id="append">Add</button>
  `
  const btn = document.getElementById('append');
  btn.addEventListener('click', () => {
    setState({
      items: [
        ...items,
        `item${items.length + 1}`,
      ]
    })
  });
}

const setState = (newState) => {
  state = {
    ...state,
    ...newState,
  };
  render();
}

render();
