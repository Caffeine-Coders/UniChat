import Link from "next/link"
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Signuplogin} from '../essentials/conn'
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
    return ( 
      <AppBar position="fixed" open={open} sx={{background:'transparent', boxShadow:'0'}}>
      <div class="bg-gradient-to-b from-gray-500 to-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm ">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="/te@cher/">
      <Typography variant="h4" noWrap component="div" sx={{fontFamily: 'caveat'}} color="black">
      UniChat
      </Typography>
      </Link>

       <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        {photourl && <Avatar src={photourl} />}
        {name1 && <Typography style={{ fontSize: '16px', color: 'black' }} mx={1} className="text-">{name1}</Typography>}
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
  </AppBar>   
    )
  }