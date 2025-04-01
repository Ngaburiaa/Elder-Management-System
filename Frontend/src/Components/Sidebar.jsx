import React from 'react';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <BsIcons.BsX className='icon close_icon' onClick={OpenSidebar} />
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/Dashboard"><BsIcons.BsGrid1X2Fill className='icon' /> Dashboard</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/Dashboard/services"><BsIcons.BsGearWide className='icon' /> Services</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/Dashboard/billing"><BsIcons.BsCreditCard2Front className='icon' /> Billing</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/Dashboard/CareGiverActivities"><BsIcons.BsPeopleFill className='icon' /> Care-Givers</Link>
        </li>

        <li className='sidebar-list-item'>
          <Link to="/Dashboard/Report"><BsIcons.BsMenuButtonWideFill className='icon' /> Report</Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/Dashboard/inventory"><BsIcons.BsListCheck className='icon' /> Inventory</Link>
        </li>
      
        <li className='sidebar-list-item'>
          <Link to="/Dashboard/settings"><BsIcons.BsFillGearFill className='icon' /> Setting</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;