import createDOMElement from "./createDOMElement"
import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"
import updateTextNode from "./updateTextNode"
import unmountNode from "./unmountNode"
import diffComponent from "./diffComponent"
/**
 * diff算法
 * @param {*} vDom 要更新的vDom
 * @param {*} rootDom 父节点
 * @param {*} oldDom 原有dom
 */
export default function diff(vDom, rootDom, oldDom) {
  const oldVDom = oldDom && oldDom._vDom
  const oldComponent = oldVDom && oldVDom.component
  // 判断old是否存在，不存在直接转换为真实dom
 
  if (!oldDom) {
    mountElement(vDom, rootDom)
  } else if (vDom.type !== oldVDom.type && 
    typeof vDom.type !== 'function') {
    const newElement = createDOMElement(vDom)
    oldDom.parentNode.replaceChild(newElement, oldDom)
  } else if( typeof vDom.type === 'function'){
    /**
     * vDom 组件本身的vDom，可以获取到组件最新的props
     * oldComponent 要更新组件的实例对象，可以调用组件生命周期函数，更新props，获取组件最新vDom--(render())
     * oldDom 要更新的dom对象，在更新组件时，需要在已有的dom对象上更改实现最小化操作，获取旧的vDom对象（通过createDOMElement向对象添加的vDom属性）
     * rootDom 如果更新的组件和旧的组件不是同一个，需要获取旧组件的容器
     */
    diffComponent(vDom, oldComponent, oldDom, rootDom)
  } else if (oldVDom && vDom.type === oldVDom.type) {
    if (vDom.type === "text") {
      // 更新节点文字内容
      updateTextNode(vDom, oldVDom, oldDom)
    } else {
      // 更新节点属性
      updateNodeElement(oldDom, vDom, oldVDom)
    }
    // 比对子节点
    vDom.children.forEach((child, i) => {
      diff(child, oldDom, oldDom.childNodes[i])
    })

    // 删除节点
    // 获取旧节点的数量
    const oldChildNodes = oldDom.childNodes
    // 判断旧节点的数量大于新节点，则需要删除节点
    if(oldChildNodes.length > vDom.children.length) {
      for(let i = oldChildNodes.length - 1; i > vDom.children.length -1; i--) {
        unmountNode(oldChildNodes[i])
      }
    }
  }
}
