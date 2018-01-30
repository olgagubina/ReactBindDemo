import React, { Component } from 'react'

class SingleInput extends Component {
  //    We colllect all the props we are getting in to the input component.
  //    Emphasis on onChange and value which will create a managed component
  render() {
    return (
        <label>{this.props.label}
          <input value={this.props.value} onChange={this.props.onchangefunc} type={this.props.type} placeholder={this.props.placeholder} id={this.props.id} />
          <button type="text" onClick={this.props.onClickDemo}>Click me</button><br />
        </label>
    )
  }
}
export default SingleInput
