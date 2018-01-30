import React, { Component } from 'react'
import SingleInput from './SingleInput'

//  Notice we import SingleInput on the top
class Form extends Component {
    constructor(props) {
      super(props)//    Create super and pass the props
      this.state = ({name:'',email:''})//   Create a state
      this.onchangefunc = this.onchangefunc.bind(this) //   Prepare the binding in order to get "this"
    }
  
    onchangefunc(event){ //  Function to listen on change
        //  event.target.id will get the id
        //  event.target.value will get the value
        //  [event.target.id] if we dont use the [] react will actually receive event.target.id and NOT the value we think we get. (Yes, just the text event.target.id )
      this.setState({[event.target.id]: event.target.value},
      () => {
        console.log(this.state) //  Passing a async callback function to get the data.
      })
    }
    
    onClickDemo() { //  Example of function in the top state that we will pass as props
      alert('It works!')
    }
    render() {
      return (
        <div>
          <h1>{this.state.demoval}</h1>
         <form>
            <SingleInput onClickDemo={this.onClickDemo} value={this.state.name} onchangefunc={this.onchangefunc} label="Entername" type="text" placeholder="Fill this" id="name"/>
            <SingleInput onClickDemo={this.onClickDemo} value={this.state.email} onchangefunc={this.onchangefunc} label="Enter email" type="email" placeholder="Email here" id="email"/>
         </form>
        </div>
      )
    }
  }
export default Form
