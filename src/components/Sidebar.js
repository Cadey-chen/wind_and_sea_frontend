import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import {SidebarEntries} from './SidebarEntries';
import './Sidebar.css';

function Sidebar() {

  const [showSidebar, setShowSidebar] = useState(false);

  const updateShowSideBar = () => setShowSidebar(!showSidebar);

  return (
    <>
    <div className='sideBar'>
        <Link to="#" className='icon-bars'>
            <FaIcons.FaBars onClick={updateShowSideBar}/>
        </Link>
    </div>
    <nav className={showSidebar ? 'nav-menu.active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={updateShowSideBar}>
        <li className="navbar-toggle">
          <Link to="#" className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarEntries.map((item, index) => {
          return (
            <li key={index} className={item.cid}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </>
  )
}

export default Sidebar;