"use client"
import Link from "next/link"
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Signuplogin} from '../../teacher/essentials/conn'
import Chatbot from '../../teacher/components/chatbot'
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import * as React from 'react';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
export default function Navdash() {
    const signoutinstance = Signuplogin()
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
  const [name1, setName1] = React.useState(null);
  const [photourl, setPhotoUrl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1); 
  const handleListItemClick = (index) => { 
    setSelectedIndex(index);
    console.log("clicked",index)
    const indexval = JSON.stringify(index);
    localStorage.setItem("indexval", indexval, () => {
    });
  }
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setName1(JSON.parse(localStorage.getItem("Tname")));
      setPhotoUrl(JSON.parse(localStorage.getItem("photoURL")));

      const indexfromlocal = JSON.parse(localStorage.getItem("indexval"))
      console.log("here",indexfromlocal)
      if (indexfromlocal!=null){
        setSelectedIndex(indexfromlocal)
        handleListItemClick(indexfromlocal)
      }
    }
  }, []);

  const settings = ['Profile', 'Logout'];

  const handleLogout = () => {
    signoutinstance.signout();
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [openChatGPT, setOpenChatGPT] = useState(false);
    const toggleChatGPT = () => {
        setOpenChatGPT(!openChatGPT);
        
    };
    return ( 
      <AppBar position="fixed" open={open} sx={{background:'transparent', boxShadow:'0'}}>
      <div class="bg-gradient-to-b from-gray-500 to-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm ">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="/teacher/">
      <Typography variant="h4" noWrap component="div" sx={{fontFamily: 'caveat'}} color="black">
      UniChat
      </Typography>
      </Link>

       <Box sx={{ display: 'flex', alignItems: 'center' }}>
       <Tooltip title="ChatGPT" placement="bottom">
                <Button
                    style={{ backgroundColor: "transparent", "&:hover": { backgroundColor: "transparent" }, padding: 0,}}
                    onClick={toggleChatGPT}
                    disableRipple
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png" alt="chatgpt" style={{ height: "40px" }} />
                </Button>
            </Tooltip>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft:'20px' }}>
        {photourl && <Avatar src={photourl} />}
        {/* {name1 && <Typography style={{ fontSize: '16px', color: 'black' }} mx={1} className="text-">{name1}</Typography>} */}
      </IconButton>
      <Menu
        sx={{ mt: '46px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
        ))}
      </Menu>
    </Box>
    </Toolbar>
    </div>
    {openChatGPT && <Chatbot isOpen={openChatGPT}/>}
  </AppBar>   
    )
  }