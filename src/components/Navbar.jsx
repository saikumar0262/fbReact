import { Home, OndemandVideo, People, Search, SportsEsports,Apps as AppsIcon, Forum, Notifications, ArrowDropDown } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-left'>
        <img
          src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'
          alt='facebook'
          className='facebook'
        />
        <div className='search'>
          <Search />
          <input type='text' placeholder='search facebook' />
        </div>
      </div>
      <div className='nav-middle'>
        <div className='options-active'>
          <Home fontSize='large' />
        </div>
        <div className='options'>
          <OndemandVideo fontSize='large' />
        </div>
        <div className='options'>
          <People fontSize='large' />
        </div>
        <div className='options'>
          <SportsEsports fontSize='large' />
        </div>
      </div>
      <div className='nav-right'>
        <div className='info'>
          <Avatar src='https://pps.whatsapp.net/v/t61.24694-24/312283434_940297870269136_7988867842789756209_n.jpg?ccb=11-4&oh=01_AdRlH-6SGs3xmhywUrf8BZxyZADkyhzW2LyIWOq26FrMqQ&oe=63B8F624' />
          <h5>k saikumar</h5>
        </div>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <ArrowDropDown />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar