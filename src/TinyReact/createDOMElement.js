import mountElement from "./mountElement"
import updateNodeElement from "./updateNodeElement"

/**
 * 通过虚拟dom创建真实dom节点
 * @param {*} vDom 
 * @returns 
 */
export default function createDOMElement(vDom) {
  let newElement = null

  if (vDom.type === "text") {
    // 文本节点
    newElement = document.createTextNode(vDom.props.textContent)
  } else {
    // 元素节点
    newElement = document.createElement(vDom.type)
    // 添加属性
    updateNodeElement(newElement, vDom)
  }
  newElement._vDom = vDom
  // 递归创建子节点
  vDom.children.forEach((child) => {
    mountElement(child, newElement)
  })

  if(vDom.props && vDom.props.ref) {
    vDom.props.ref(newElement)
  }

  return newElement
}
