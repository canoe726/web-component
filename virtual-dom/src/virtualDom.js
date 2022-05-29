function h (type, props, ...children) {
  return { type, props, children: children.flat() };
}

{/* Real DOM
<ul>
  <li>
    <input type="checkbox" class="toggle"/>
    todo list item 1
    <button class="remove">삭제</button>
  </li>
  <li class="completed">
    <input type="checkbox" class="toggle"/>
    todo list item 2
    <button class="remove">삭제</button>
  </li>
</ul>
<form>
  <input type="text"/>
  <button type="submit">추가</button>
</form>
*/}

const vDom =
h('div', { id: 'app' },
  h('ul', null, 
    h('li', null,
      h('input', { type: 'checkbox', class: 'toggle' },
        'todo list item 1',
        h('button', { class: 'remove' }, '삭제'),
      )
    ),
    h('li', { class: 'completed' },
      h('input', { type: 'checkbox', class: 'toggle' },
        'todo list item 2',
        h('button', { class: 'remove' }, '삭제')
      )
    ),
    h('form', null,
      h('input', { type: 'text' }),
      h('button', { type: 'submit' }, '추가'),
    )
  )
)

console.log(vDom)
