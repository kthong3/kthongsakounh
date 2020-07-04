import React, { Component } from 'react'

class Resume extends Component {
  render() {
    const skills = this.props.content.map((skill) => 
      <li>{skill}</li>
    )

    return (
      <div>
        <h3>skills</h3>
        <ul>
          {skills}
        </ul>
      </div>
    )
  }
}

export default Resume