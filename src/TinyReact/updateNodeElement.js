/**
 * 为节点添加属性、事件
 * @param {*} newElement 父节点
 * @param {*} vDom 虚拟dom
 */
export default function updateNodeElement(newElement, vDom, oldVDom = {}) {
  const newProps = vDom.props || {}
  const oldProps = oldVDom.props || {}
  Object.keys(newProps).forEach((propName) => {
    // 获取属性值
    const newPropsValue = newProps[propName]
    const oldPropsValue = oldProps[propName]
    if (newPropsValue !== oldPropsValue) {
      // 判断属性是否为事件
      if (propName.slice(0, 2) === "on") {
        // 事件名称 onClick -> click
        const eventName = propName.toLowerCase().slice(2)
        newElement.addEventListener(eventName, newPropsValue)
        if(oldPropsValue) {
          // 删除原有的事件
          newElement.removeEventListener(eventName, oldPropsValue)
        }
      } else if (propName === "value" || propName === "checked") {
        newElement[propName] = newPropsValue
      } else if (propName !== "children") {
        if (propName === "className") {
          newElement.setAttribute("class", newPropsValue)
        } else {
          newElement.setAttribute(propName, newPropsValue)
        }
      }
    }
  })

  Object.keys(oldProps).forEach((propName) => {
    const newPropsValue = newProps[propName]
    const oldPropsValue = oldProps[propName]
    if(!newPropsValue) {
      // 属性删除
      if(propName.slice(0, 2) === 'on') {
        const eventName = propName.toLowerCase().slice(2)
        newElement.removeEventListener(eventName, oldPropsValue)
      } else if(propName !== 'children') {
        newElement.removeAttribute(propName)
      }
    }
  })
}
