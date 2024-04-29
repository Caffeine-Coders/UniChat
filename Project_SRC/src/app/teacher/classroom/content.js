"use client";
import React, {useState, useEffect} from 'react';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/dist/style.css';
import Class from './class'
import Newproject from '../dashboard/addproject/newproject';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Navdash from '../dashboard/navbar';
import GroupsIcon from '@mui/icons-material/Groups';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import { styled, alpha, useTheme } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "../components/dash.css"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';
import { Signuplogin } from '../essentials/conn';
import CloseIcon from '@mui/icons-material/Close';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from "@mui/material";
import {getMembers} from "../dbconnections/getNames"
import {addTeacher} from "../dbconnections/inviteTeacher"
import {addStudent} from "../dbconnections/inviteStudent"
const drawerWidth = 240;
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
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
    const namegetter = async() =>{
        const semails = localStorage.getItem("studentemails")
        const temails = localStorage.getItem("teacheremails")
        
        console.log("trial got here",semails,temails)
        const temp2 = await getMembers(semails,temails)
        console.log("tempp in content",temp2)
        const {snames,tnames} = temp2
        console.log("split done",snames,tnames)
        localStorage.setItem("teachernames",tnames)
        localStorage.setItem("studentnames",snames)
    }
      const handleListItemClick = (index) => { 
        
        console.log("clicked",index)
        const indexval = JSON.stringify(index);
        localStorage.setItem("indexval", indexval, () => {
        });
        if (indexval == 0 ){
          setSelectedIndex(index);
            localStorage.removeItem("projectname")
            localStorage.removeItem("projectgoal")
            localStorage.removeItem("invitedTeacher")
            localStorage.removeItem("invitedTeacherEmail")
            localStorage.removeItem("invitedStudent")
            localStorage.removeItem("invitedStudentEmail")
            setNewProject(true)
            setAllProjects(false)
        }
        else if (indexval == 1){
          setSelectedIndex(index);
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
        router.push('/teacher/prof/addproject')
      };
    const [classname, setClassname] = useState('');
    const [classnumber, setClassnumber] = useState('');
    const [hover, setHover] = useState(false);
    const [inviteStudent,setStudentInvite] = useState(false)
    const [value, setValue] = React.useState(0);
    const [inviteTeacher,setTeacherInvite] = useState(false)
    const [semails, setsEmails] = React.useState([]);
    const [temails, settEmails] = React.useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInvite = (indexVal) => {
      if (indexVal == 0){
        setStudentInvite(true)
      }
      if (indexVal == 1){
        setTeacherInvite(true)
      }
    }
    const handlemembersClose = () => {
        setMembers(false);
    };
    const handleInviteClose = () =>{
      setsEmails([])
      setStudentInvite(false)
    }
    const handleTeacherClose = () =>{
      settEmails([])
      setTeacherInvite(false)
    }
    
    const [focused, setFocused] = React.useState(false);
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
        namegetter()
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
      let studentemailsString;
      let studentnamesString;
      let teacheremailsString;
      let teachernamesString;
      if (typeof window!== 'undefined'){
        studentemailsString = localStorage.getItem("studentemails")
        studentnamesString = localStorage.getItem("studentnames")
        teacheremailsString = localStorage.getItem("teacheremails")
        teachernamesString = localStorage.getItem("teachernames")
      }

      // let studentemailsString1 = '["Dheeraj ","Dheeraj Kumar T","Forum Shah"]';
      console.log("studentemails",studentnamesString)
      let studentemails;
      if (studentemailsString){
      studentemails = studentemailsString.split(',');
      }
      let teacheremails
      if (teacheremailsString){
      teacheremails = teacheremailsString.split(',');
      }
      let studentnames;
      let users =[];
      let tusers = [];
      if(studentnamesString){
        studentnames = studentnamesString.split(',');
        users = studentemails?.map((email, index) => {
          return { name: studentnames[index], email: email };
        });
      }
      let teachernames;
      if(teachernamesString){ 
        teachernames = teachernamesString.split(',');
        tusers = teacheremails?.map((email, index) => {
          return { name: teachernames[index], email: email };
        });
      }

      const teacheradder = async(teacherinvites) =>{
        const classnum = localStorage.getItem("classnumber")
        const classname = localStorage.getItem("classname")
        const classyear = localStorage.getItem("classyear")
        await addTeacher(teacherinvites,classnum,classname,classyear)
        await namegetter()
      }
      const studentadder = async(studentinvites) =>{
        const classnum = localStorage.getItem("classnumber")
        const classname = localStorage.getItem("classname")
        const classyear = localStorage.getItem("classyear")
        await addStudent(studentinvites,classnum,classname,classyear)
        await namegetter()
      }
      let teacherinvites;
      const handleTeacherInvite = async() => {
        teacherinvites = temails.filter((email) => !teacheremails.includes(email));
        console.log("emils are ",teacherinvites);
        await teacheradder(teacherinvites)
        teacheremails.push(...teacherinvites);
        localStorage.setItem("teacheremails", teacheremails, () => {
          JSON.parse(localStorage.getItem("teacheremails"));
        });
        setTeacherInvite(false)
        if (typeof window !== 'undefined'){
        window.location.reload()
        }
      }
      let studentinvites;
      const handleStudentInvite = async() => {
        studentinvites = semails.filter((email) => !studentemails.includes(email));
        console.log("emils are ",studentinvites);
        await studentadder(studentinvites)
        studentemails.push(...studentinvites);
        localStorage.setItem("studentemails", studentemails, () => {
          JSON.parse(localStorage.getItem("studentemails"));
        });
        setStudentInvite(false)
        if (typeof window !== 'undefined'){
        window.location.reload()
        }
      }





  return (
    <>
     <Box sx={{ display: 'flex' }}>
        <CssBaseline />
<Navdash/>
      
        <Drawer variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
          <DrawerHeader>
          
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
                  onClick={() => handleInvite(index)} 
                
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

       
        {allProjects &&  <Class/>}
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
      {users?.map((user, index) => (
        <div key={index}>
          <div className="mt-4 rounded-lg flex justify-between space-between">
            <h4 className="flex ">
              <img className="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
              {user.name}
            </h4>
            <h4 className="mr-4">{user.email}</h4>
          </div>
          {index < users.length - 1 && <hr className="mt-4 h-px bg-gray-400 border-0"></hr>}
        </div>
      ))}
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
    {tusers?.map((user, index) => (
        <div key={index}>
          <div className="mt-4 rounded-lg flex justify-between space-between">
            <h4 className="flex ">
              <img className="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
              {user.name}
            </h4>
            <h4 className="mr-4">{user.email}</h4>
          </div>
          {index < tusers.length - 1 && <hr className="mt-4 h-px bg-gray-400 border-0"></hr>}
        </div>
      ))}
    </CustomTabPanel>
    </Box>    
    </DialogContentText>
</DialogContent>

</div>
</Dialog>

<Dialog
open={inviteStudent}
onClose={handleInviteClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
maxWidth="md"
// width="85%"

fullWidth={true}
PaperProps={{ style: { height: '70vh', borderRadius: '15px' } }}
>
<div class='h-full w-full p-4 pt-0 pb-0 mx-auto'>
<DialogTitle id="alert-dialog-title" style={{fontSize: '25px' }}>
<IconButton
edge="start"
color="inherit"
onClick={handleInviteClose}
aria-label="close"
sx={{ position: 'absolute', right: 8 }}
>
<CloseIcon />
</IconButton>
    {"Invite New Students to Classroom"}
</DialogTitle>

<DialogContent>
    <DialogContentText id="alert-dialog-description">
    <Box sx={{ width: 'full' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Enter Email Address" {...a11yProps(0)} />
        <Tab label="Upload CSV File" {...a11yProps(1)} />
        </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}  sx={{}}>
    <Box sx={{ width: '100%'}}>
    <div class="flex items-center justify-center w-4/5 mx-auto  mb-4">
                    <div
                        sx={{justifyContent:'justify', alignItems:'center', color: 'black', background:'transparent'}}
                        >
                        <div class="flex flex-col items-center justify-center w-full h-auto border-2 border-black px-4 border-dashed rounded-lg cursor-pointer ">
                        <ReactMultiEmail
                
                style={{border:'none', width:'100vh'}}
                placeholder='Enter Email Addresses to Invite'
                inputProps={{
                  sx: {
                      '::placeholder': {
                          color: 'black'
                      },

                  }
              }}
                emails={semails}
                onChange={(emails) => setsEmails(emails)}
                autoFocus={true}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                getLabel={(email, index, removeEmail) => {
                    return (
                        <div data-tag key={index}>
                            <div data-tag-item>{email}</div>
                            <span data-tag-handle onClick={() => removeEmail(index)}>
                                ×
                            </span>
                        </div>
                    );
                }}
            />
                        </div>
        
                        </div>
                        </div>
                
      {semails?.map((email,index)=>(
        <div key={index} class="w-4/5 mx-auto  mt-4 rounded-lg flex justify-between space-between">
        <h4 class="flex ">
            {email}
            </h4>
            <h4 class="mr-4"><DeleteOutlineIcon/></h4>
        </div>

))}
   </Box>  
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
    <Box sx={{ width: '100%' }}>
    <div class="flex items-center justify-center w-4/5 mx-auto">
                    <Button
                        component="label"
                        role={undefined}
                        // variant="contained"
                        tabIndex={-1}
                        // startIcon={<CloudUploadIcon />}
                        sx={{justifyContent:'justify', alignItems:'center', backgroundColor:'transparent', boxShadow:'none', color: 'black'}}
                        >
                        <div class="flex flex-col items-center justify-center w-full h-auto border-2 border-black px-4 border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm "><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-sm">Upload your exported Grades CSV File here to add Students</p>
                            </div>
                        </div>
                        <VisuallyHiddenInput type="file"   />
                        
                        </Button>
                        </div>
                      
   </Box>  
    </CustomTabPanel>
     
    
    </Box>    
    </DialogContentText>
</DialogContent>

</div>
<button class=" w-4/6 flex mx-auto mb-4 items-center justify-center font-semibold tracking-wider  rounded-2xl bg-opacity-60 text-black bg-discordpurple-0 px-4 py-2" onClick={handleStudentInvite}>
                                            Invite
                                          </button>
</Dialog>

<Dialog
open={inviteTeacher}
onClose={handleTeacherClose}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
maxWidth="md"
fullWidth={true}
PaperProps={{ style: { height: '70vh', borderRadius: '15px', overflowY:'none'} }}
>
<div class='h-full w-full p-4 pt-0 pb-0 mx-auto'>
<DialogTitle id="alert-dialog-title" style={{fontSize: '25px', textAlign:'center' }}>
<IconButton
edge="start"
color="inherit"
onClick={handleTeacherClose}
aria-label="close"
sx={{ position: 'absolute', right: 8 }}
>
<CloseIcon />
</IconButton>
    {"Invite Co-Instructors to Classroom"}
</DialogTitle>
<DialogContent>
    <DialogContentText id="alert-dialog-description">
    <Box sx={{ width: '100%', height:'100%' }}>
    <div class="flex items-center justify-center w-4/5 mx-auto mb-4">
                    <div
                        sx={{justifyContent:'justify', alignItems:'center', color: 'black', background:'transparent'}}
                        >
                        <div class="flex flex-col items-center justify-center w-full h-auto border-2 border-black px-4 border-dashed rounded-lg cursor-pointer ">
                        <ReactMultiEmail
                
                style={{border:'none', width:'100vh'}}
                placeholder='Enter Email Addresses to Invite'
                inputProps={{
                  sx: {
                      '::placeholder': {
                          color: 'black'
                      },

                  }
              }}
                emails={temails}
                onChange={(emails) => settEmails(emails)}
                autoFocus={true}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                getLabel={(email, index, removeEmail) => {
                    return (
                        <div data-tag key={index}>
                            <div data-tag-item>{email}</div>
                            <span data-tag-handle onClick={() => removeEmail(index)}>
                                ×
                            </span>
                        </div>
                    );
                }}
            />
                        </div>
        
                        </div>
                        </div>
                
      {temails?.map((email,index)=>(
        <div key={index} class="w-4/5 mx-auto mt-4 rounded-lg flex justify-between space-between">
        <h4 class="flex ">
            {email}
            </h4>
            <h4 class=""><DeleteOutlineIcon/></h4>
        </div>

))}

   </Box> 
   
  </DialogContentText>
</DialogContent>



</div>
<button class="w-4/6 mx-auto mb-4 justify-center font-semibold tracking-wider  rounded-2xl bg-opacity-60 text-black bg-discordpurple-0 px-4 py-2" onClick={handleTeacherInvite}>
      Invite
    </button>
</Dialog>
  </>  
    );
}

