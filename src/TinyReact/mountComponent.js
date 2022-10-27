import isFunction from "./isFunction"
import isFunctionComponent from "./isFunctionComponent"
import mountElement from "./mountElement"
import mountNativeElement from "./mountNativeElement"

/**
 * 挂载组件元素
 * @param {*} vDom
 */

export default function mountComponent(vDom, rootDom, oldDom) {
  let nextVDom = null

  if (isFunctionComponent(vDom)) {
    nextVDom = buildFunctionComponent(vDom)
  } else {
    nextVDom = buildClassComponent(vDom)
  }
  if(isFunction(nextVDom)) {
    mountComponent(nextVDom, rootDom, oldDom)
  } else {
    mountNativeElement(nextVDom, rootDom, oldDom)
  }
}

function buildFunctionComponent(vDom) {
  return vDom.type(vDom.props || {})
}

function buildClassComponent(vDom) {
  const component = new vDom.type(vDom.props || {})
  const nextVDom = component.render()
  nextVDom.component = component
  return nextVDom
}