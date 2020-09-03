import React from 'react'
import contact from '../static/contact'
import Box from '@material-ui/core/Box'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

function Contact() {
  return (
    <Box>
      <h2>Let's chat!</h2>
      <Box>
        <MailOutlineIcon /> {contact.email}
      </Box>
      <Box>
        <LinkedInIcon /> {contact.linkedIn}
      </Box>
      <Box>
        <GitHubIcon /> {contact.github}
      </Box>
    </Box>
  )
}

export default Contact