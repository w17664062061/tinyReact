/**
 * 判断是否为函数组件，反之为类组件
 * @param {*} vDom 
 * @returns Boolean
 */

export default function isFunctionComponent(vDom) {
  const type = vDom.type
  return type && typeof type === 'function' && !(type.prototype && type.prototype.render)
}