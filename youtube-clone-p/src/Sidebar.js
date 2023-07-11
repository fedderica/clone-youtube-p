import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HomeIcon from "@mui/icons-material/Home"; //Siempre recordar desde que librería importo los ICONS-Revisar fuente o copiar codigo.

function Sidebar() {
 return(
<div className="sidebar"> 
<SidebarRow Icon={HomeIcon} title="Home"/>
<SidebarRow Icon={WhatshotIcon} title="Trending"/>
<SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
</div>
    );
}

export default Sidebar