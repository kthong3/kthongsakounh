import React from 'react'
import about from '../static/about'

function About(props) {

  return (
    <div>
      <h1>{about.name}</h1>
      <div>{about.intro}</div>
      <div>{about.description}</div>
      <div>{about.dbc}</div>
      <div>{about.opportunity}</div>
    </div>
  )
}

export default About