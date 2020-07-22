import React from 'react'
import about from '../static/about'

function About(props) {

  return (
    <div>
      {about.name},
      {about.intro}, 
      {about.description}, 
      {about.dbc}, 
      {about.opportunity}
    </div>
  )
}

export default About