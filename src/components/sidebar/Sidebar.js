import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React from 'react';
import './Sidebar.css';
import SidebarRows from './sidebarrows/SidebarRows';




const Sidebar = () => {
    return (
       <div className="sidebar">
           <SidebarRows src='https://www.w3schools.com/howto/img_avatar2.png' title='dalo' />
           <SidebarRows Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
           <SidebarRows Icon={EmojiFlagsIcon} title="Page" />
           <SidebarRows Icon={PeopleIcon} title="Friends"/>
           <SidebarRows Icon={ChatIcon} title="Messenger"/>
           <SidebarRows Icon={StorefrontIcon} title="Marketplace"/>
           <SidebarRows Icon={VideoLibraryIcon} title="Videos"/>
           <SidebarRows Icon={ExpandMoreIcon} title="Marketplace" />
       </div>
    )
}

export default Sidebar
