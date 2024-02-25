'use client'
import Dash from './dashboard'
import Teachers from './teachers'
import Students from './students'
import * as React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import GridViewIcon from '@mui/icons-material/GridView';
import SchoolIcon from '@mui/icons-material/School';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Icon from '../../../Assets/sidebaricon.png';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Content() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let name1;
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    if (typeof window !== 'undefined') {
        name1 = JSON.parse(localStorage.getItem("Tname"));
    }
    let photourl;
    if (typeof window !== 'undefined') {
        photourl = JSON.parse(localStorage.getItem("photoURL"));
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
  const settings = ['Profile', 'Logout'];

return (
  <Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <AppBar position="fixed" open={open}>
  <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Link href="/te@cher/">
    {/* <IconButton sx={{ p: 0, mr: 1 }}>
    <img src={ Icon } alt="Icon description" />
  </IconButton> */}
    <Typography variant="h4" noWrap component="div" sx={{fontFamily: 'caveat'}}>
      UniChat
    </Typography>
    </Link>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar src={photourl} />
        <Typography style={{ fontSize: '16px' }} mx={1} className="text-">
          {name1}
        </Typography>
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
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
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  </Toolbar>
</AppBar>
  <Drawer variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
    <DrawerHeader>
      <IconButton onMouseEnter={handleDrawerOpen}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      {['New Project', 'All Projects', 'Classroom'].map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {index === 0 ? <AddBoxIcon />: ''}
              {index === 1 ? <GridViewIcon/>:''}
              {index === 2 ? <SchoolIcon/>:''}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider /> 
  </Drawer>
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <DrawerHeader />
    <Typography paragraph>
              <Dash/>
    </Typography>
    <Typography paragraph>

    </Typography>
  </Box>
</Box>
)
}