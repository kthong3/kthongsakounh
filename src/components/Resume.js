import React from 'react'
import resumeContent from '../static/resumeContent'
import '../style/App.css'
 
function Resume(props) {
  const [skills, experience, education] = resumeContent
  
  const skillsList = skills.content.map((skill) => 
    <li>
      <div>
        {skill}
      </div>
    </li>
  )
  
  const experienceList = experience.content.map((exp) =>
    <li>
      <div>
        {exp.company} - {exp.position} {exp.dates}
      </div>
      <div>
        <ul>
          {exp.description.map((expDesc) => <li>{expDesc}</li>)}
        </ul>
      </div>
    </li>
  )

  const educationList = education.content.map((edu) =>
    <li>
      <div>{edu.name} {edu.dates}</div>
      <ul>
          {edu.description.map((eduDesc) => <li>{eduDesc}</li>)}
        </ul>
    </li>
    
  )

  return (
    <div>
      <div>
        <h2>Skills</h2>
        <ul>
          {skillsList}
        </ul>
      </div>
      <div>
        <h2>Experience</h2>
        <ul>
          {experienceList}
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <ul>
          {educationList}
        </ul>
      </div>
    </div>
  )
}

export default Resume