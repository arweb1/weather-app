import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import profilePicture from '../../resources/profile-picture.jpg'
import './HeaderApp.scss'

function HeaderApp() {
  return (
    <div className='HeaderApp'>
        <div className="HeaderApp__search">
            <SearchOutlinedIcon class="icon"/>
            <input type="text" placeholder='Search something here...'/>
        </div>
        <div className="HeaderApp__profile">
            <NotificationAddOutlinedIcon class="icon"/>
            <img src={profilePicture} class="profilePicture"></img>
        </div>
    </div>
  )
}

export default HeaderApp