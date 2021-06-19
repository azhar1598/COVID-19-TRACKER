import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home'
import Whatshoticon from '@material-ui/icons/Whatshot'
import Subscription from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OnedemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'






import SidebarRow from "./SidebarRow"

function Sidebar() {
    return (
        <div className="sidebar">


            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            
            <SidebarRow  Icon={Whatshoticon}title="Trending"/>

            <SidebarRow  Icon={Subscription}title="Subscription"/>
<hr/>

<SidebarRow  Icon={VideoLibraryIcon} title="Library"/>
<SidebarRow  Icon={HistoryIcon}title="History"/>
<SidebarRow  Icon={OnedemandVideoIcon}title="Your videos"/>
<SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
<SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
<SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
<hr/>




            
        </div>
    )
}

export default Sidebar
