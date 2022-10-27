import mountNativeElement from "./mountNativeElement"
import isFunction from "./isFunction"
import mountComponent from "./mountComponent"

export default function mountElement (vDom, rootDom, oldDom) {
  // 无论是函数组件还是类组件，他的vDom类型都是func，我们可以通过类型来判断是否为组件。
  if(isFunction(vDom)) {
    // 组件
    mountComponent(vDom, rootDom, oldDom)
  } else {
    // native
    mountNativeElement(vDom, rootDom)
  }
}