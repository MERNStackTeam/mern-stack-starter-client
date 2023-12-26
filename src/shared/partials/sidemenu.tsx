// SideNavbar.tsx
import React from 'react';


const SideNavbar: React.FC = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar" >
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <i className="mdi mdi-home menu-icon"></i>
          <span className="menu-title">Dashboard</span>
        </a>
      </li>
    {/*   <li className="nav-item">
        <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <i className="mdi mdi-circle-outline menu-icon"></i>
          <span className="menu-title">UI Elements</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="ui-basic">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" >Buttons</a></li>
            <li className="nav-item"> <a className="nav-link" >Typography</a></li>
          </ul>
        </div>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <i className="mdi mdi-screwdriver menu-icon"></i>
          <span className="menu-title">Control Panel</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="ui-basic">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" >User</a></li>
            <li className="nav-item"> <a className="nav-link" >Roles</a></li>
            <li className="nav-item"> <a className="nav-link" >User Roles</a></li>
            <li className="nav-item"> <a className="nav-link" >Menus</a></li>
            <li className="nav-item"> <a className="nav-link" >Change Password</a></li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="collapse" href="#ui-masters" aria-expanded="false" aria-controls="ui-masters">
          <i className="mdi mdi-face-profile menu-icon"></i>
          <span className="menu-title">Masters</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="ui-masters">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" >Master 1</a></li>
            <li className="nav-item"> <a className="nav-link" >Master 2</a></li>
            <li className="nav-item"> <a className="nav-link" >Master 3</a></li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="collapse" href="#ui-settings" aria-expanded="false" aria-controls="ui-settings">
          <i className="mdi-settings mdi menu-icon"></i>
          <span className="menu-title">Settings</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="ui-settings">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" >Appearance</a></li>
            <li className="nav-item"> <a className="nav-link" >Email Config</a></li>
          </ul>
        </div>
      </li>
     {/*  <li className="nav-item">
        <a className="nav-link" href="pages/forms/basic_elements.html">
          <i className="mdi mdi-view-headline menu-icon"></i>
          <span className="menu-title">Form elements</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="pages/charts/chartjs.html">
          <i className="mdi mdi-chart-pie menu-icon"></i>
          <span className="menu-title">Charts</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="pages/tables/basic-table.html">
          <i className="mdi mdi-grid-large menu-icon"></i>
          <span className="menu-title">Tables</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="pages/icons/mdi.html">
          <i className="mdi mdi-emoticon menu-icon"></i>
          <span className="menu-title">Icons</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
          <i className="mdi mdi-account menu-icon"></i>
          <span className="menu-title">User Pages</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="auth">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" > Login </a></li>
            <li className="nav-item"> <a className="nav-link"> Login 2 </a></li>
            <li className="nav-item"> <a className="nav-link" > Register </a></li>
            <li className="nav-item"> <a className="nav-link"> Register 2 </a></li>
            <li className="nav-item"> <a className="nav-link"> Lockscreen </a></li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="documentation/documentation.html">
          <i className="mdi mdi-file-document-box-outline menu-icon"></i>
          <span className="menu-title">Documentation</span>
        </a>
      </li> */}
    </ul>
  </nav>
  );
};

export default SideNavbar;
