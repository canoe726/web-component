/** @jsx h */
function h(type, props, ...children) {
  return { type, props, children: children.flat() };
}

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const $elem = document.createElement(node.type);

  Object.entries(node.props || {})
        .filter(([attr, value]) => value)
        .forEach(([attr, value]) => (
          $elem.setAttribute(attr, value)
        ));

  const children = node.children.map(createElement);
  children.forEach(child => $elem.appendChild(child));
  return $elem;
}

const state = [
  { id: 1, completed: false, content: 'todo list item 1' },
  { id: 2, completed: true, content: 'todo list item 2' },
]

const vm = createElement(
  <div id="app">
    <ul>
      {state.map(({ id, completed, content }) => {
        return (
          <li id={id} class={completed ? 'completed' : null}>
            <input type="checkbox" class="toggle" checked={completed}/>
            {content}
            <button class="remove">삭제</button>
          </li>
        )
      })}
      {/* <li>
        <input type="checkbox" class="toggle"/>
        todo list item 1
        <button class="remove">삭제</button>
      </li>
      <li class="completed">
        <input type="checkbox" class="toggle"/>
        todo list item 2
        <button class="remove">삭제</button>
      </li> */}
    </ul>
    <form>
      <input type="text"/>
      <button type="submit">추가</button>
    </form>
  </div>
)

const $root = document.getElementById('root');
// $root.innerHTML = `
//   <pre>${JSON.stringify(vm, null, 2)}</pre>
// `
$root.appendChild(vm)
