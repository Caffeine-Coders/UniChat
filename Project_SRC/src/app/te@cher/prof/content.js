'use client'
import Dash from './dashboard'
import Newproject from './addproject/newproject';
import * as React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FloatingActionsButtons from './float'
import GridViewIcon from '@mui/icons-material/GridView';
import SchoolIcon from '@mui/icons-material/School';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Navdash from "./navbar"
import Classroom from './classroom'

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  padding:'10px',
  overflowX: 'hidden',
  background:'transparent',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  padding:'10px',
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    
  },
  background:'transparent',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  background:'transparent',
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    background:'transparent',
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
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1); 

  const[addClassroom,setaddClassroom] = React.useState(false)
  const[viewClassroom, setviewclassroom] = React.useState(true)
  const handleListItemClick = (index) => { 
    setSelectedIndex(index);
    console.log("clicked",index)
    const indexval = JSON.stringify(index);
    localStorage.setItem("indexval", indexval, () => {
    });
    if (index === 0){
      setaddClassroom(true)
      setviewclassroom(false)
    }
    else if(index === 1){
      setviewclassroom(true)
      setaddClassroom(false)
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const sidebar=['New Classroom', 'All Classrooms']

return (

  <Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <Navdash/>
  <Drawer variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose} >
    <DrawerHeader>
     {/* <MenuIcon sx={{color:'grey'}}/> */}
    </DrawerHeader>
    <Divider />
    <List>      {sidebar.map((text, index) => (
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
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <DrawerHeader />
        {/* {viewProjects && <Dash/>}
       {addProject && <Newproject/>} */}
       {addClassroom}
       {viewClassroom && <Dash/>}
      {/* {viewClassroom && <FloatingActionsButtons/>} */}
  </Box>
</Box>

)
}