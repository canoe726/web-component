import Component from "../../cores/Component.js";

class MyList extends Component {
  init () {
    this.$state = {
      items: ['item1', 'item2', 'item3', 'item4']
    };
  }

  template () {
    const { items } = this.$state;
    return `
      <ul>
        ${items.map((item, key) => {
          return `
          <span>
            <li>${item}</li>
            <button class="deleteBtn" data-index="${key}">delete</button>
          </span>
          `;
        }).join('')}
      </ul>
      <button class="addBtn">Add</button>
    `;
  }

  setEvent () {
    this.addEvent('click', '.addBtn', ({ target }) => {
      const { items } = this.$state;
      this.setState({
        ...this.$state,
        items: [
          ...items,
          `item${items.length + 1}`,
        ],
      })
    });
    this.addEvent('click', '.deleteBtn', ({ target }) => {
      const { items } = this.$state;
      items.splice(target.dataset.index, 1);
      this.setState({
        ...this.$state,
        items: [
          ...items
        ]
      })
    });
  }
}

export default MyList;
