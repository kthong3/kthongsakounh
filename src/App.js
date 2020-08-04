import React from 'react'
import Nav from './components/Nav'
import './style/App.css'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import bgImg from './assets/jesse-schoff-Jur3IpOce6E-unsplash.jpg'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#000"
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

function App () {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.banner}>
        <Box>
          Katherine Thongsakounh
        </Box>
      </Box>
      <Nav />
    </div>
  )
}

export default App