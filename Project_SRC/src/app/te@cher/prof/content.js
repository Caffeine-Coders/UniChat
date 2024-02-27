'use client'
import Dash from './dashboard'
import Newproject from './addproject/newproject';
import Students from './students'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import FloatingActionsButtons from './float'
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
import { Signuplogin } from "../essentials/conn.js"
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
  const [selectedIndex, setSelectedIndex] = React.useState(1); 
  const [viewProjects, setviewprojects] = React.useState(true)
  const[addProject,setaddproject] = React.useState(false)
  const[viewClassroom, setviewclassroom] = React.useState(false)
  const handleListItemClick = (index) => { 
    setSelectedIndex(index);
    console.log("clicked",index)
    const indexval = JSON.stringify(index);
    localStorage.setItem("indexval", indexval, () => {
    });
    if (index === 0){
      setaddproject(true)
      setviewprojects(false)
      setviewclassroom(false)
    }
    else if(index === 1){
      setviewprojects(true)
      setaddproject(false)
      setviewclassroom(false)
    }
    else{

      setviewclassroom(true)
      setaddproject(false)
      setviewprojects(false)
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const signoutinstance = Signuplogin()
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [name1, setName1] = React.useState(null);
  const [photourl, setPhotoUrl] = React.useState(null);
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
  const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  const settings = ['Profile', 'Logout'];
  const sidebar=['New Project', 'All Projects', 'Classroom']

  const handleLogout = () => {
    signoutinstance.signout();
  }

return (
  <Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <AppBar position="fixed" open={open} sx={{background:'#5964f2'}}>
  <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Link href="/te@cher/">
    <Typography variant="h4" noWrap component="div" sx={{fontFamily: 'caveat'}}>
      UniChat
    </Typography>
    </Link>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        {photourl && <Avatar src={photourl} />}
        {name1 && <Typography style={{ fontSize: '16px' }} mx={1} className="text-">{name1}</Typography>}
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
          <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
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
      {sidebar.map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: 'block',  backgroundColor: selectedIndex === index? '#d5d8fb': 'transparent' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              
            }}
 
            onClick={() => handleListItemClick(index)} 
            selected={selectedIndex === index}
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
  <Box component="main" sx={{ flexGrow: 1, p: 5  }}>
    <DrawerHeader />
    <div class="border-2 border-gray-300 rounded-md p-4 shadow shadow-lg " >
      {viewProjects && <Dash/>}
      {addProject && <Newproject/>}
      {viewClassroom && <>
        <Accordion sx={{margin:'4px', marginBottom:'10px', padding:'4px'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>680 Master's Project</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Students/>
        </AccordionDetails>
      </Accordion> 
      <Accordion sx={{margin:'4px', marginBottom:'10px',padding:'4px'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>680 Master's Project</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Students/>
        </AccordionDetails>
      </Accordion> 
      <Accordion sx={{margin:'4px', marginBottom:'10px', padding:'4px'}}> 
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>680 Master's Project</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Students/>
        </AccordionDetails>
      </Accordion> 

      </>}
      </div>
      {viewClassroom &&
      <FloatingActionsButtons/>
}
  </Box>

</Box>
)
}