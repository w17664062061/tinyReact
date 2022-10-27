import createDOMElement from "./createDOMElement"
import unmountNode from "./unmountNode"

/**
 * 挂载非组件元素
 * @param {} vDom
 * @param {*} rootDom
 */
export default function mountNativeElement(vDom, rootDom, oldDom) {
  let newElement = createDOMElement(vDom)
  if(oldDom) {
    unmountNode(oldDom)
  }
  // 将转换后的dom显示在页面中
  rootDom.appendChild(newElement)
  let component = vDom.component
  if (component) {
    component.setDom(newElement)
  }
}
