import Component from "../../cores/Component.js";

class MyList extends Component {
  get filteredItems () {
    const { isFilter, items } = this.$state;
    console.log(isFilter)
    return items.filter(({ active }) => (isFilter === 1 && active) ||
                                        (isFilter === 2 && !active) ||
                                        (isFilter === 0));
  }

  template () {
    const filteredItems = this.filteredItems;
    return `
      <header>
        <input type="text" class="appender" placeholder="아이템 내용 입력"/>
      </header>
      <main>
        <ul>
          ${filteredItems.map(({ seq, contents, active }) => {
            return `
              <li data-seq="${seq}">
                ${contents}
                <button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
                  ${active ? '활성' : '비활성'}
                </button>
                <button class="deleteBtn">삭제</button>
              </li>
            `;
          }).join('')}
        </ul>
      </main>
      <footer>
        <button class="filterBtn" data-is-filter="0">전체 보기</button>
        <button class="filterBtn" data-is-filter="1">활성 보기</button>
        <button class="filterBtn" data-is-filter="2">비활성 보기</button>
      </footer>
    `;
  }

  setEvent () {

    this.addEvent('click', '.deleteBtn', ({ target }) => {
      const { items } = this.$state;
      const seq = Number(target.closest('[data-seq]').dataset.seq);
      items.splice(items.findIndex(item => item.seq === seq), 1);
      this.setState({
        ...this.$state,
        items: [
          ...items
        ]
      })
    });

    this.addEvent('click', '.toggleBtn', ({ target }) => {
      const { items } = this.$state;
      const seq = Number(target.closest('[data-seq]').dataset.seq);
      const index = items.findIndex(item => item.seq === seq);
      items[index].active = !items[index].active;

      this.setState({
        ...this.$state,
        items: [
          ...items,
        ]
      })
    });

    this.addEvent('click', '.filterBtn', ({ target }) => {
      this.setState({
        ...this.$state,
        isFilter: Number(target.dataset.isFilter),
      })
    });
  }
}

export default MyList;
