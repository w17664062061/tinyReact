import TinyReact from "./TinyReact";

const rootDom = document.getElementById('root')

// const vDom = (
//   <div className='vDom'>
//     {false && <p>你好 tinyReact</p>}
//     <p onClick={() => console.log(222)}>2131267312</p>
//     <input value='11'/>
//   </div>
// )

// TinyReact.render(vDom, rootDom)


// const updateDom = (
//   <div className='vDom'>
//     {false && <p>你好 tinyReact!!!!</p>}
//     <p onClick={() => console.log(222214141)}>111111</p>
//   </div>
// )

// setTimeout(() => {
//   TinyReact.render(updateDom, rootDom)
// }, 2000)

// function Demo () {
//   return <Heart title='hello tiny'/>
// }

function Heart (props){
 return <div>{props.title}</div>
}

// TinyReact.render(<Demo/>, rootDom)

class Alert extends TinyReact.Component {
  constructor(props) {
    // 子类调用父类constructor
    super(props)
    this.state = {
      title : 'def'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(){
    this.setState({title: 'changed'})
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  render () {
    return <div>
      <p>{this.state.title} {this.props.title}</p>
      <button onClick={this.handleChange}>setTitle</button>
    </div>
  }
}

TinyReact.render(<Alert title='1111111' />, rootDom)

setTimeout(() => {
  TinyReact.render(<Alert title='33333' />, rootDom)
}, 2000)