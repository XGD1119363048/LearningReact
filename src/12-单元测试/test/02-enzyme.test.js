import App from '../App'
import Enzyme, { mount, shallow } from 'enzyme' // 需要适配器
import Adapter from '@cfaester/enzyme-adapter-react-18'

Enzyme.configure({
  adapter: new Adapter()
})
describe('react-test-renderer', () => {
  it('app 的名字是 xgd-todo', () => {
    let app = shallow(<App/>)
    expect(app.find('h1').text()).toEqual('xgd-todo')
  })

  it('删除功能', () => {
    let app = mount(<App/>)
    let todoLength = app.find('li').length
    app.find('button.del').at(0).simulate('click')
    expect(app.find('li').length).toEqual(todoLength - 1)
  })

  it('添加功能', () => {
    let app = mount(<App/>)
    let todoLength = app.find('li').length
    let appInput = app.find('input')
    appInput.value = 'xgdaaa'
    app.find('.add').simulate('click')
    expect(app.find('li').length).toEqual(todoLength + 1)
  })
})