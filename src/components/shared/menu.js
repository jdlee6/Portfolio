import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Nav from './nav';

export default function Menu(props) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="menu">
      <HamburgerMenu
        isOpen={open}
        menuClicked={handleClick}
        width={18}
        height={15}
        strokeWidth={2}
        rotate={0}
        color="gray"
        borderRadius={1}
        animationDuration={0.5}
      />
      {open ? (
        <div className="fade">
          {' '}
          <Nav aboutClick={props.aboutClick} />{' '}
        </div>
      ) : null}
    </div>
  );
}
