import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Home extends Component<any, any> {
    render() {
        return (
          <div>
            <AppBar position='fixed'>
              <Toolbar>
                <IconButton aria-label='Menu'>
                  <MenuIcon />
                </IconButton>
                <Typography variant='title' color='inherit'>Test</Typography>
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}

export default withRouter<any>(Home);