//Importante CamelCase a la hora de desarrollar componentes
//Atajo RFCE --> crea componente
// Utilizar es7 VERSION 

import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
      <MenuIcon  />
     <img 
     className='header__LOGO'
     src="https://tse1.mm.bing.net/th?id=OIP.hTDoeEJzV6ewlE_EYMpxfAHaDH&pid=Api&P=0&h=180"
     alt= "logoyoutube"
     />
     </div>


     <div className="header__input">
     <input placeholder="Search" type="text" />
     <FindInPageIcon className="header__inputButton" />
     </div>
  <div className="header__icons">
    <VideoCallIcon className="header__icon" />
    <AppsIcon className="header__icon" />
    <NotificationsNoneIcon className="header__icon" />
    <AccountCircleIcon
    alt="Federica Bartto"
    src="https://github.com/fedderica" 
    />
  </div>
   </div>
  );
}

export default Header;

  /*https://5a4608eb6a25.ngrok.io */ 