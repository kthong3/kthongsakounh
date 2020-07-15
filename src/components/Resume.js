import React from 'react'
import resumeContent from '../static/resumeContent'
 
function Resume(props) {
  const [skills, experience, education] = resumeContent
  
  const skillsList = skills.content.map((skill) => 
    <li>{skill}</li>
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
        Skills
        <ul>
          {skillsList}
        </ul>
        <br />  
        Experience
        <ul>
          {experienceList}
        </ul>
        Education
        <ul>
          {educationList}
        </ul>
    </div>
  )
}

export default Resume