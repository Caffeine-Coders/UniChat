"use client";
import React, {useState, useEffect} from 'react';
import Class from './class'
import Newproject from '../addproject/newproject';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import GroupsIcon from '@mui/icons-material/Groups';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import { styled, alpha, useTheme } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "../../components/dash.css"
import Avatar from '@mui/material/Avatar';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';
import { Signuplogin } from '../../essentials/conn';
import CloseIcon from '@mui/icons-material/Close';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
   background:'transparent',
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    background:'transparent',
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
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Content() {
    if (typeof window!== 'undefined'){
        localStorage.setItem("indexval", 1, () => {
            });
      }

      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
    
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '16ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
    const signoutinstance = Signuplogin()
    const router = useRouter()
    const theme = useTheme();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [photourl, setPhotoUrl] = React.useState(null);
    const settings = ['Profile', 'Logout'];
    const sidebar=['New Project','All Projects','View Members']
    const lowerhalf = ['Invite Students', 'Invite Co-Instructors']
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1); 
    const [allProjects, setAllProjects] = React.useState(true)
    const [members,setMembers] = React.useState(false)
    const[newproject,setNewProject]=React.useState(false)
    const handleLogout = () => {
        signoutinstance.signout();
      }
      const handleListItemClick = (index) => { 
        setSelectedIndex(index);
        console.log("clicked",index)
        const indexval = JSON.stringify(index);
        localStorage.setItem("indexval", indexval, () => {
        });
        if (indexval == 0 ){
            setNewProject(true)
            setAllProjects(false)
        }
        else if (indexval == 1){
            setAllProjects(true)
            setNewProject(false)
        }
        else if (indexval == 2){
            setMembers(true)
        }
      };
  
      const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    const handleprojectadder = (event) => {
        router.push('/te@cher/prof/addproject')
      };
    const [classname, setClassname] = useState('');
    const [classnumber, setClassnumber] = useState('');
    const [hover, setHover] = useState(false);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const studentlist = ['Forum Dipen Shah', 'Dheeraj Kumar Thanda', 'Sai Vishnu Anudeep Kadiyala' , 'Satwik Bhasin']
    const handlemembersClose = () => {
        setMembers(false);
    };
    // const handlestudent = () => {
    //     setOpen(true);
    // }
    
      const [checked, setChecked] = React.useState([1]);
      const [name1, setName1] = React.useState(null);
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
      const handleToggle = (value) => () => {
          const currentIndex = checked.indexOf(value);
          const newChecked = [...checked];
  
          if (currentIndex === -1) {
          newChecked.push(value);
          } else {
          newChecked.splice(currentIndex, 1);
          }
  
          setChecked(newChecked);
      };
      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <>
     <Box sx={{ display: 'flex' }}>
        <CssBaseline />
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
        <Drawer variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
          <DrawerHeader>
            <IconButton onMouseEnter={handleDrawerOpen}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {sidebar.map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
       
                  onClick={() => handleListItemClick(index)} 
                  selected={index === selectedIndex}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
      
                  >
                    {index === 0 ? <AddCircleOutlineIcon/>:''}
                    {index === 1? <GridViewIcon/>:''}
                    {index === 2 ? <GroupsIcon/>:''}
                   
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider /> 

          <List>
            {lowerhalf.map((text, index) => (
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
                    {index === 0 ? <GroupAddIcon/>:''}
                    {index === 1 ? <PersonAddAltIcon/>:''}
                 
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:'40px', display: 'flex' }}>
        <DrawerHeader/>
        {allProjects && <Class/>}
        {newproject && <Newproject/>}
            </Box>

</Box>

<Dialog
open={members}
onClose={handlemembersClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
maxWidth="md"
fullWidth={true}
PaperProps={{ style: { height: '90vh', borderRadius: '15px'} }}
>
<div class='h-full w-full p-4 pb-0 mx-auto'>
<DialogTitle id="alert-dialog-title" style={{fontSize: '25px'}}>
<IconButton
edge="start"
color="inherit"
onClick={handlemembersClose}
aria-label="close"
sx={{ position: 'absolute', right: 8, top: 8 }}
>
<CloseIcon />
</IconButton>
    {"Members involved in this class:"}
</DialogTitle>
<DialogContent>
    <DialogContentText id="alert-dialog-description">
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Students" {...a11yProps(0)} />
        <Tab label="Co Instructors" {...a11yProps(1)} />
        </Tabs>
        <div class="flex rounded-md w-full">
          <Search style={{ display: 'flex', width: '100%', background: 'linear-gradient(to right, white, transparent)', height: '50px', borderRadius: '15px'}}>
              <SearchIconWrapper>
              <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
              placeholder="Search Members"
              inputProps={{ 'aria-label': 'search' }}
              style={{background:'transparent', height: '100%', width: 'full', padding: '0', margin: '0', flex: '1' }}
              />
          </Search>
          </div>
    </Box>
    <CustomTabPanel value={value} index={0} width="full">
        <div class="  mt-4 rounded-lg flex justify-between space-between">
            <h4 class="flex ">
            <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
            Forum Dipen Shah
            </h4>
            <h4 class="mr-4">somemeial@gmail.com</h4>
            
        </div>
        <hr class=" mt-4 h-px  bg-gray-400 border-0"></hr>
        <div class="  mt-4 rounded-lg flex justify-between space-between">
            <h4 class="flex ">
            <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
            Dheeraj Kumar Thanda
            </h4>
            <h4 class="mr-4">somemeial@gmail.com</h4>
            
        </div>
        <hr class=" mt-4 h-px  bg-gray-400 border-0"></hr>
        <div class="  mt-4 rounded-lg flex justify-between space-between">
            <h4 class="flex ">
            <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
            Sai Vishnu Anudeep Kadiyala
            </h4>
            <h4 class="mr-4">somemeial@gmail.com</h4>
            
        </div>
        <hr class="  mt-4 h-px  bg-gray-400 border-0"></hr>
        <div class=" mt-4 rounded-lg flex justify-between space-between">
            <h4 class="flex ">
            <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
            Satwik Bhasin
            </h4>
            <h4 class="mr-4">somemeial@gmail.com</h4>
            
        </div>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
    <div class="  mt-4 rounded-lg flex justify-between space-between">
            <h4 class="flex ">
            <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
            Professor 1 
            </h4>
            <h4 class="mr-4">professor1@gmail.com</h4>
            
        </div>
        <hr class=" mt-4 h-px  bg-gray-400 border-0"></hr>
        <div class="  mt-4 rounded-lg flex justify-between space-between">
            <h4 class="flex ">
            <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
            Professor 2
            </h4>
            <h4 class="mr-4">professor2@gmail.com</h4>
            
        </div>
    </CustomTabPanel>
    </Box>    
    </DialogContentText>
</DialogContent>

</div>
</Dialog>

  </>  
    );
}

