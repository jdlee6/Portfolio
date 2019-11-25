import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Nav from './Nav';

export class Menu extends Component {
  state = {
    open: true
  };

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="menu">
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={18}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="gray"
          borderRadius={1}
          animationDuration={0.5}
        />
        {this.state.open ? (
          <div className="fade">
            {' '}
            <Nav aboutClick={this.props.aboutClick} />{' '}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Menu;
