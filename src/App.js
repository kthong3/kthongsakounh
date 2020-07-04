import React from 'react'
import resumeContent from './static/Experience'
import Resume from './components/Resume'

class App extends React.Component {
  render() {
    const resumeItems = resumeContent.map((item) => 
      <Resume key={item.key} content={item.content} />
    )
    return (
      <div>
        {resumeItems}
      </div>
    )
  }
}

export default App