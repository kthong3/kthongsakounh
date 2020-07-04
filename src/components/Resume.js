import React, { Component } from 'react'

class Resume extends Component {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Resume