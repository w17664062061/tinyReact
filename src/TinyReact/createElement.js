/**
 * 创建虚拟dom
 * @param {*} type 节点类型
 * @param {*} props 节点属性
 * @param  {...any} children 子节点
 * @returns 
 */

export default function createElement(type, props, ...children) {
  const childElement = children.reduce((result,child) => {
    if(child !== false && child !== true && child !== null) {
      if(child instanceof Object) {
        result.push(child) 
      } else {
        result.push(createElement('text', { textContent: child })) 
      }
    }
    return result
  }, [])
  return {
    type,
    props: Object.assign({children: childElement}, props),
    children: childElement
  }
}
