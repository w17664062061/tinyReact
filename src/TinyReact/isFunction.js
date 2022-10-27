/**
 * 判断是否为函数
 * @param {*} vDom 
 * @returns 
 */
export default function isFunction(vDom) {
  return vDom && typeof vDom.type === 'function'
}