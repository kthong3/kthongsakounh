import React from 'react'
import './style/App.css'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import bgImg from './assets/jesse-schoff-Jur3IpOce6E-unsplash.jpg'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import './style/App.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#000',
  },
  navBar: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '15px',
    color: 'white',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
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
    fontSize: '4em',
    fontFamily: `'Lato', sans-serif`,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="primary" 
              className={classes.navBar}>
              <Box>Logo</Box>
              <Box>
                <ul className={classes.navList}>
                  <li className={classes.navListItem}>
                    <Link to='/about' className={classes.navLink}>About Me</Link>
                  </li>
                  <li className={classes.navListItem}>
                    <Link to='/resume' className={classes.navLink}>Resume</Link>
                  </li>
                  <li className={classes.navListItem}>
                    <Link to='/contact' className={classes.navLink}>Contact</Link>
                  </li>
                </ul>
              </Box>
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Box className={classes.banner}>
          <Box>
            Katherine Thongsakounh
          </Box>
        </Box>

        <Container maxWidth='lg' className={classes.content}>
          <Grid container spacing={3}>
            <Switch>
              <Route path='/about'>
                <Grid item xs={12} sm={6} md={4}>
                  <About />
                </Grid>
              </Route>
              <Route path='/resume'>
                <Resume />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
            </Switch>
           </Grid> 
        </Container>
      </Router>
    </div>
  )
}

export default App