import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

    render () {
      return (
        <Aux>
          <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
          <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}/>
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </Aux>
      );
    }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
}

export default connect(mapStateToProps, null)(Layout);
