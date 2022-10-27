/**
 * 组件diff
 * @param {*} vDom 组件本身的vDom，可以获取到组件最新的props
 * @param {*} oldComponent 要更新组件的实例对象，可以调用组件生命周期函数，更新props，获取组件最新vDom--(render())
 * @param {*} oldDom 要更新的dom对象，在更新组件时，需要在已有的dom对象上更改实现最小化操作，获取旧的vDom对象（通过createDOMElement向对象添加的vDom属性）
 * @param {*} rootDom 如果更新的组件和旧的组件不是同一个，需要获取旧组件的容器
 */
import updateComponent from "./updateComponent"
import mountElement from "./mountElement"

export default function diffComponent(vDom, oldComponent, oldDom, rootDom) {
  if (isSameComponent(vDom, oldComponent)) {
    updateComponent(vDom, oldComponent, oldDom, rootDom)
  } else {
    mountElement(vDom, rootDom, oldDom)
  }
}

/**
 * 判断是否为同一组件
 * @param {*} vDom 
 * @param {*} oldComponent 
 * @returns 
 */
function isSameComponent(vDom, oldComponent) {
  return oldComponent && vDom.type === oldComponent.constructor
}
