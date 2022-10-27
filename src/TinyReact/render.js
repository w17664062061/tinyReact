import diff from "./diff"

/**
 * 渲染函数
 * @param {*} vDom 
 * @param {*} rootDom 
 * @param {*} oldDom 
 */
export default function render (vDom, rootDom, oldDom = rootDom.firstChild) {
  diff(vDom, rootDom, oldDom)
}