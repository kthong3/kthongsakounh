import React from 'react'
import resumeContent from '../static/resumeContent'
import Grid from '@material-ui/core/Grid'
import '../style/App.css'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  resumeList: {
    backgroundColor: '#000',
  },
  resumeLink: {
    textDecoration: 'none',
    color: 'white',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  }
}))
 
function Resume() {
  const classes = useStyles();
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
    <Container className={classes.content}>
      <Box>
        <ul className={classes.resumeList}>
          <li className={classes.resumeItem}>
            <Link to='/skills' className={classes.resumeLink}>skills</Link>
          </li>
          <li className={classes.resumeItem}>
            <Link to='/experience' className={classes.resumeLink}>experience</Link>
          </li>
          <li className={classes.resumeItem}>
            <Link to='/education' className={classes.resumeLink}>education</Link>
          </li>
        </ul>
      </Box>
      <Box>
        <Switch>
          <Route exact path='/skills'>
            <Grid item xs={12} sm={6} md={4}>
              <h2>Skills</h2>
              <ul>
                {skillsList}
              </ul>
            </Grid>
          </Route>
          <Route exact path='/experience'>
              <h2>Experience</h2>
              <ul>
                {experienceList}
              </ul>
          </Route>
          <Route exact path='/education'>
            <h2>Education</h2>
            <ul>
              {educationList}
            </ul>
          </Route>
        </Switch>
      </Box>
    </Container>
  )
}

export default Resume