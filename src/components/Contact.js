import React from 'react'
import contact from '../static/contact'

function Contact() {
    return (
      <div>
        {contact.email}
        {contact.linkedIn}
        {contact.github}
      </div>
    )
}

export default Contact