import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'
import ReactTestUtil from 'react-dom/test-utils'
describe('react-test-renderer', () => {
  it('app 的名字是 xgd-todo', () => {
    const render = new ShallowRender()
    render.render(<App/>)
    // console.log(render.getRenderOutput().props.children[0].type)
    expect(render.getRenderOutput().props.children[0].type).toBe('h1')
    expect(render.getRenderOutput().props.children[0].props.children).toBe('xgd-todo')
  })

  it('删除功能', () => {
    const app = ReactTestUtil.renderIntoDocument(<App/>)
    let todoItems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    console.log(todoItems.length)

    let deleteButton = todoItems[0].querySelector('button')

    ReactTestUtil.Simulate.click(deleteButton)

    let todoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')

    expect(todoItemsAfterClick.length).toBe(todoItems.length - 1)
  })

  it('添加功能', () => {
    const app = ReactTestUtil.renderIntoDocument(<App/>)
    let todoItems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    console.log(todoItems.length)

    let addInput = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'input')
    addInput.value = 'xgdaaaa'
    let addButton = ReactTestUtil.findRenderedDOMComponentWithClass(app, 'add')
    ReactTestUtil.Simulate.click(addButton)

    let todoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    expect(todoItemsAfterClick.length).toBe(todoItems.length + 1)
  })
})