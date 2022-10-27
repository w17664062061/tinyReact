export default function updateTextNode (vDom, oldVDom, oldDom) {
  if(vDom.props.textContent !== oldVDom.props.textContent) {
    oldDom.textContent = vDom.props.textContent
    oldDom._vDom = vDom
  }
}