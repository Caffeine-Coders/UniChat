"use client";
import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Add from '@mui/icons-material/Add';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import ticon from "../../../../../public/ticon.png"
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
import ArticleIcon from '@mui/icons-material/Article';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import sicon from "../../../../../public/sicon.png"
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardMedia from '@mui/material/CardMedia';
import "../../components/dash.css"
import Avatar from '@mui/material/Avatar';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';
import { Signuplogin } from '../../essentials/conn';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
    const handleLogout = () => {
        signoutinstance.signout();
      }
      const handleListItemClick = (index) => { 
        setSelectedIndex(index);
        console.log("clicked",index)
        const indexval = JSON.stringify(index);
        localStorage.setItem("indexval", indexval, () => {
        });
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
    const handleClose = () => {
        setOpen(false);
    };
    const handlestudent = () => {
        setOpen(true);
    }
    useEffect(() => {
      if (typeof window !== 'undefined') {
        setClassname(JSON.parse(localStorage.getItem("classname")));
        setClassnumber(JSON.parse(localStorage.getItem("classnumber")));
      }
    }, []);

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
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
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
                  selected={index === 1}
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
                    {index === 3 ? <svg fill='currentColor' strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
<path d="M 11.134766 1.0175781 C 10.87173 1.0049844 10.606766 1.0088281 10.337891 1.0332031 C 8.1135321 1.2338971 6.3362243 2.7940749 5.609375 4.8203125 C 3.8970488 5.1768339 2.4372723 6.3048522 1.671875 7.9570312 C 0.73398779 9.9840533 1.1972842 12.30076 2.5878906 13.943359 C 2.0402591 15.605222 2.2856216 17.434472 3.3320312 18.921875 C 4.6182099 20.747762 6.8565685 21.504693 8.9746094 21.121094 C 10.139659 22.427613 11.84756 23.130452 13.662109 22.966797 C 15.886521 22.766098 17.663809 21.205995 18.390625 19.179688 C 20.102972 18.823145 21.563838 17.695991 22.330078 16.042969 C 23.268167 14.016272 22.805368 11.697142 21.414062 10.054688 C 21.960697 8.3934373 21.713894 6.5648387 20.667969 5.078125 C 19.38179 3.2522378 17.143432 2.4953068 15.025391 2.8789062 C 14.032975 1.7660011 12.646869 1.0899755 11.134766 1.0175781 z M 11.025391 2.5136719 C 11.921917 2.5488523 12.754993 2.8745885 13.431641 3.421875 C 13.318579 3.4779175 13.200103 3.5164101 13.089844 3.5800781 L 9.0761719 5.8964844 C 8.7701719 6.0724844 8.5801719 6.3989531 8.5761719 6.7519531 L 8.5175781 12.238281 L 6.75 11.189453 L 6.75 6.7851562 C 6.75 4.6491563 8.3075938 2.74225 10.433594 2.53125 C 10.632969 2.5115 10.83048 2.5060234 11.025391 2.5136719 z M 16.125 4.2558594 C 17.398584 4.263418 18.639844 4.8251563 19.417969 5.9101562 C 20.070858 6.819587 20.310242 7.9019929 20.146484 8.9472656 C 20.041416 8.8773528 19.948163 8.794144 19.837891 8.7304688 L 15.826172 6.4140625 C 15.520172 6.2380625 15.143937 6.2352031 14.835938 6.4082031 L 10.052734 9.1035156 L 10.076172 7.0488281 L 13.890625 4.8476562 C 14.584375 4.4471562 15.36085 4.2513242 16.125 4.2558594 z M 5.2832031 6.4726562 C 5.2752078 6.5985272 5.25 6.7203978 5.25 6.8476562 L 5.25 11.480469 C 5.25 11.833469 5.4362344 12.159844 5.7402344 12.339844 L 10.464844 15.136719 L 8.6738281 16.142578 L 4.859375 13.939453 C 3.009375 12.871453 2.1365781 10.567094 3.0175781 8.6210938 C 3.4795583 7.6006836 4.2963697 6.8535791 5.2832031 6.4726562 z M 15.326172 7.8574219 L 19.140625 10.060547 C 20.990625 11.128547 21.865375 13.432906 20.984375 15.378906 C 20.522287 16.399554 19.703941 17.146507 18.716797 17.527344 C 18.724764 17.401695 18.75 17.279375 18.75 17.152344 L 18.75 12.521484 C 18.75 12.167484 18.563766 11.840156 18.259766 11.660156 L 13.535156 8.8632812 L 15.326172 7.8574219 z M 12.025391 9.7109375 L 13.994141 10.878906 L 13.966797 13.167969 L 11.974609 14.287109 L 10.005859 13.121094 L 10.03125 10.832031 L 12.025391 9.7109375 z M 15.482422 11.761719 L 17.25 12.810547 L 17.25 17.214844 C 17.25 19.350844 15.692406 21.25775 13.566406 21.46875 C 12.449968 21.579344 11.392114 21.244395 10.568359 20.578125 C 10.681421 20.522082 10.799897 20.48359 10.910156 20.419922 L 14.923828 18.103516 C 15.229828 17.927516 15.419828 17.601047 15.423828 17.248047 L 15.482422 11.761719 z M 13.947266 14.896484 L 13.923828 16.951172 L 10.109375 19.152344 C 8.259375 20.220344 5.8270313 19.825844 4.5820312 18.089844 C 3.9291425 17.180413 3.6897576 16.098007 3.8535156 15.052734 C 3.9587303 15.122795 4.0516754 15.205719 4.1621094 15.269531 L 8.1738281 17.585938 C 8.4798281 17.761938 8.8560625 17.764797 9.1640625 17.591797 L 13.947266 14.896484 z"></path>
</svg>:''}
                    {index === 4 ? <AddToDriveIcon/>:''}
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
            <Grid container spacing={4}>
            <Grid item xs={12}>
                <div class="flex rounded-md mt-8">
                <Typography variant="h2" component="h2" sx={{fontFamily: 'Montserrat'}}>
                    Classroom : {classnumber+ " " +classname}
                </Typography>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div class="flex rounded-md mt-8">
                <Typography variant="h5" component="h2" fontWeight="bold" letterSpacing="2px">
                    Projects
                </Typography>
                </div>
                <Divider variant="middle" sx={{marginTop:'10px'}}/>
            </Grid> 
            
            <Grid item xs={12}>
           <div class=" pl-4 py-2  rounded-lg flex justify-between space-between shadow-lg">
                <h4 class="flex font-bold tracking-wider ">
                  Create new Project
                </h4>
                {/* <button class="mr-4 bg-discordpurple-300 px-4 rounded-lg font-medium">Create</button> */}
                <Button variant="contained" style={{marginRight:'10px', borderRadius:'15px', backgroundColor:'#692ea3'}}>
                  Create 
                <AddCircleOutlineOutlinedIcon  sx={{paddingLeft:'4px', marginLeft:'4px'}}/>
                </Button>
            </div>

            </Grid>
            <Grid item xs={12}>
                <div class="flex rounded-md w-full">
                <Search style={{ display: 'flex', width: '100%', background: 'linear-gradient(to right, white, transparent)', height: '50px', borderRadius: '15px'}}>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search Projects..."
                    inputProps={{ 'aria-label': 'search' }}
                    style={{background:'transparent', height: '100%', width: 'full', padding: '0', margin: '0', flex: '1' }}
                    />
                </Search>
                </div>
            </Grid> 
        
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?t=st=1709264522~exp=1709268122~hmac=37495c2f747709fb91df549997f05b4fa7716d2b9c2bd9cebeab5eaa4ebc67b6&w=2000"
                        style={{ height: '200px' }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">View</Button>
                    </CardActions>
                </Card>
            </Grid>  
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?t=st=1709264619~exp=1709268219~hmac=02dbc5612dd7fda27d7fa496c363e0210ffd860b4525359a2d7fb922c80b6415&w=2000"
                    style={{ height: '200px' }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project 2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">View</Button>
                    </CardActions>
                </Card>
            </Grid>  
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?t=st=1709264652~exp=1709268252~hmac=e920e67e63c1dad31bc765d6e11bb104962195a5e15e9a1b710ff32fbea9a7e9&w=1380"
                    alt="green iguana"
                    style={{ height: '200px' }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project 3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">View</Button>
                    </CardActions>
                </Card>
            </Grid>  
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://img.freepik.com/free-vector/project-management-business-process-planning-workflow-organization-colleagues-working-together-teamwork_335657-2469.jpg?t=st=1709264673~exp=1709268273~hmac=e2c3f6cc36f72bddbe55c2584d0f21348c438e981c9c30f37667154bba83bf5e&w=2000"
                    style={{ height: '200px' }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project 4
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">View</Button>
                    </CardActions>
                </Card>
            </Grid>  
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?t=st=1709264522~exp=1709268122~hmac=37495c2f747709fb91df549997f05b4fa7716d2b9c2bd9cebeab5eaa4ebc67b6&w=2000"
                        style={{ height: '200px' }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project 5
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">View</Button>
                    </CardActions>
                </Card>
            </Grid>  
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?t=st=1709264619~exp=1709268219~hmac=02dbc5612dd7fda27d7fa496c363e0210ffd860b4525359a2d7fb922c80b6415&w=2000"
                    style={{ height: '200px' }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project 6
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">View</Button>
                    </CardActions>
                </Card>
            </Grid>  
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?t=st=1709264652~exp=1709268252~hmac=e920e67e63c1dad31bc765d6e11bb104962195a5e15e9a1b710ff32fbea9a7e9&w=1380"
                    alt="green iguana"
                    style={{ height: '200px' }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project 7
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">View</Button>
                    </CardActions>
                </Card>
            </Grid>  
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://img.freepik.com/free-vector/project-management-business-process-planning-workflow-organization-colleagues-working-together-teamwork_335657-2469.jpg?t=st=1709264673~exp=1709268273~hmac=e2c3f6cc36f72bddbe55c2584d0f21348c438e981c9c30f37667154bba83bf5e&w=2000"
                    style={{ height: '200px' }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Project 8
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">View</Button>
                    </CardActions>
                </Card>
            </Grid>  
            <Grid item xs={12} sx={{display:'flex', justifyContent: 'center'}}>
                <Pagination count={5}  renderItem={(item) => (
                    <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                    />
                )}/>
            </Grid>
        </Grid>
    
            </Box>

</Box>

    
    );
}

