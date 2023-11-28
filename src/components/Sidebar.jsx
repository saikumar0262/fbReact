import { ArrowDropDown, Article, Bookmark, ModeNight, OndemandVideo, Person, Settings, Storefront } from '@mui/icons-material'
import { Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#user'>
              <ListItemIcon>
                <Avatar src='https://pps.whatsapp.net/v/t61.24694-24/312283434_940297870269136_7988867842789756209_n.jpg?ccb=11-4&oh=01_AdRlH-6SGs3xmhywUrf8BZxyZADkyhzW2LyIWOq26FrMqQ&oe=63B8F624' />
              </ListItemIcon>
              <ListItemText primary='saikumar k' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#pages'>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#watch'>
              <ListItemIcon>
                <OndemandVideo />
              </ListItemIcon>
              <ListItemText primary='watch' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#marketplace'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary='Marketplace' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#friends'>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary='Friends' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#setting'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary='Setting' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#saved'>
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary='saved' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#light'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#more'>
              <ListItemIcon>
                <ArrowDropDown />
              </ListItemIcon>
              <ListItemText primary='see more' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar