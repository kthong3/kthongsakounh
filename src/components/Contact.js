import React from 'react'
import contact from '../static/contact'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

function Contact() {
  return (
    <Container>
      <Box>
        Let's chat!
      </Box>
      <Box>
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
    </Container>
  )
}

export default Contact