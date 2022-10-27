import diff from "./diff"

export default class Component {
  constructor(props) {
    this.props = props
  }
  setState(state) {
    this.state = Object.assign({}, this.state, state)
    // 获取最新的vDom
    let vDom = this.render()
    // 获取旧的vDom 比对
    let oldDom = this.getDom()
    diff(vDom, oldDom.parentNode, oldDom)
  }
  setDom(dom) {
    this._dom = dom
  }
  getDom() {
    return this._dom 
  }
  updateProps(props) {
    this.props = props
  }

  // 生命周期函数
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  shouldComponentUpdate() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnMount() {}
}