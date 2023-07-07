//Importante CamelCase a la hora de desarrollar componentes
//Atajo RFCE --> crea componente
// Utilizar es7 VERSION 

import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
  return (
    <div className="header">
      
     <img 
     className='header__LOGO'
     src="LOGO.jpg"
     alt= ""
     />
     <input type="text" />
     <MenuIcon  />
     <FindInPageIcon/>
     <AppsIcon />
    <VideoCallIcon/>
    <NotificationsNoneIcon/>
    </div>
  );
}

export default Header;
/*https://5a4608eb6a25.ngrok.io */