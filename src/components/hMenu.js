import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './hMenu.css';

function hMenu() {
    return (
        <Menu>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/Concepts">
            Concepts
          </a>
          <a className="menu-item" href="/Timeline">
            Timeline
          </a>
          <a className="menu-item" href="/Explore">
            Explore
          </a>
          <a className="menu-item" href="/Playground">
            Playground
          </a>
        </Menu>
      );
}

export default hMenu;