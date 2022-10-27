/**
 * 同组件更新
 * @param {*} vDom
 * @param {*} oldComponent
 * @param {*} oldDom
 * @param {*} rootDom
 */

import diff from "./diff"

export default function updateComponent(vDom, oldComponent, oldDom, rootDom) {
  oldComponent.componentWillReceiveProps(vDom.props)
  if(oldComponent.shouldComponentUpdate(vDom.props)) {
    // 获取未更新之前的props
    let prevProps = oldComponent.props
    oldComponent.componentWillUpdate(vDom.props)
    // 更新实例props
    oldComponent.updateProps(vDom.props)
    // 获取最新的vDom对象
    let nextVDom = oldComponent.render()
    // 更新component挂载
    nextVDom.component = oldComponent
    // 比对
    diff(nextVDom, rootDom, oldDom)
    oldComponent.componentDidUpdate(prevProps)
  }

}
