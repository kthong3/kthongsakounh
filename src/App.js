import React from 'react'
import './style/App.css'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import bgImg from './assets/jesse-schoff-Jur3IpOce6E-unsplash.jpg'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#000",
  },
  navBar:{
    flexGrow: 1,
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  banner: {
    backgroundImage: `url(${bgImg})`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '4em'
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h6" color="primary" className={classes.navBar}>
              <Box>
                <ul className={classes.navList}>
                  <li>
                    <Link to='/about'>About Me</Link>
                  </li>
                  <li>
                    <Link to='/resume'>Resume</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </Box>
              <Box></Box>
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Box className={classes.banner}>
          <Box>
            Katherine Thongsakounh
          </Box>
        </Box>

        <Container>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/resume'>
                <Resume />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
            </Switch>
        </Container>
      </Router>
    </div>
  )
}

export default App