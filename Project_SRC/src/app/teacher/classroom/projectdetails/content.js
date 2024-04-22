'use client'
import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ArticleIcon from '@mui/icons-material/Article';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Navdash from '../../dashboard/navbar';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Drivecomponent } from '../../drive/drivecomponent';
import FormControlLabel from '@mui/material/FormControlLabel';

import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Collapse from '@mui/material/Collapse'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Signuplogin } from "../../essentials/conn"
import "../../components/dash.css"
import InputBase from '@mui/material/InputBase';
import Discord from '../components/discord'
import Details from '../components/details'
import Chat from '../components/chat'
import Grades from '../components/grades'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Chatgpt from '../components/chatgpt'
import { Dialog, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import GradingIcon from '@mui/icons-material/Grading';
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


// Define a custom DelayedContent component
function DelayedContent({ children, delay }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading ? <CustomLoading /> : children;
}
export default function Content(){
  if (typeof window!== 'undefined'){
  localStorage.setItem("indexval", 0, () => {
      });
}
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1); 
    const [viewProjects, setviewprojects] = React.useState(true)
    const[addProject,setaddproject] = React.useState(false)
    const[viewClassroom, setviewclassroom] = React.useState(false)
    const [discord, setDiscord] = React.useState(false)
    const [chat, setChat] = React.useState(false)
    const [gpt, setGpt] = React.useState(false)
    const [onmessage, seemessage] = React.useState(false)
    const [seeGrades, setGrades] = React.useState(false)
    const driveInstance = Drivecomponent()
    const handleListItemClick = (index) => { 
      setSelectedIndex(index);
      console.log("clicked",index)
      const indexval = JSON.stringify(index);
      localStorage.setItem("indexval", indexval, () => {
      });
      if (index===0){
        setviewprojects(true)
        setDiscord(false)
        setaddproject(false)
        setviewclassroom(false)
        setChat(false)
        setGpt(false)
        setGrades(false)
      }
      if(index == 1){
        seemessage(!onmessage)
      }
      if(index===2){
        setDiscord(true)
        setviewprojects(false)
        setaddproject(false)
        setviewclassroom(false)
        setChat(false)
        setGpt(false)
        setGrades(false)
      }
      if(index===3){
        setGpt(true)
        setDiscord(false)
        setviewprojects(false)
        setaddproject(false)
        setviewclassroom(false)
        setChat(false)
        setGrades(false)
      }
      
      if(index === 4){
        driveInstance.handleopenPicker()
      }
      // if (index === 6){
      //   setChat(false)
      //   setDiscord(false)
      //   setviewprojects(false)
      //   setaddproject(false)
      //   setviewclassroom(false)
      //   setGpt(false)
      //   setGrades(true)
      // }
    };
    const [inviteTeacher,setTeacherInvite] = useState(false)
    const [inviteStudent,setStudentInvite] = useState(false)
    const studentlist = [ 'Sai Vishnu Anudeep Kadiyala' , 'Satwik Bhasin', 'Rachel Green', 'Michael Scott']
    const teacherlist = ['Mei-Hwa Chen', 'Forum Dipen Shah', 'Dheeraj Kumar Thanda']
    const [emails, setEmails] = React.useState([]);
    const [focused, setFocused] = React.useState(false);
    const handleTeacherClose = () =>{
      setTeacherInvite(false)
    }
    const handleStudentClose = () =>{
      setStudentInvite(false)
    }
    let [studentchecked, setstudentChecked] = React.useState([]);
    let newCheckedStudents = []
    const handlestudentToggle = (value) => () => {
      const currentIndex = studentchecked.indexOf(value);
      newCheckedStudents = [...studentchecked];

      if (currentIndex === -1) {
        newCheckedStudents.push(value);
      } else {
        newCheckedStudents.splice(currentIndex, 1);
      }

      setstudentChecked(newCheckedStudents);
      console.log("checked", newCheckedStudents)
  };
  const handlestudentCheckboxChange = () => {
    const allChecked = studentchecked.length === studentlist.length;
    const newCheckedStudents = allChecked ? [] : [...studentlist];
    setstudentChecked(newCheckedStudents);
  };
  let [teacherchecked, setteacherChecked] = React.useState([]);
  const handleteacherToggle = (value) => () => {
    const currentIndex = teacherchecked.indexOf(value);
    const newChecked = [...teacherchecked];

    if (currentIndex === -1) {
    newChecked.push(value);
    } else {
    newChecked.splice(currentIndex, 1);
    }

    setteacherChecked(newChecked);
};
    let newChecked = []
   const handleteacherCheckboxChange = () => {
    const allChecked = teacherchecked.length === teacherlist.length;
    newChecked = allChecked ? [] : [...teacherlist];
    setteacherChecked(newChecked);
    
  };
    const handleListItemClick2 = (index) => {
      setSelectedIndex(index);
      console.log("clicked",index)
      if (index===0){
        setStudentInvite(true)
      }
      if(index == 1){
        setTeacherInvite(true)
      }
    }
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
      seemessage(false)
    };
    
    const signoutinstance = Signuplogin()
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [name1, setName1] = React.useState(null);
    const [photourl, setPhotoUrl] = React.useState(null);
    const [openAccordion, setOpenAccordion] = React.useState(false);
    const inviteStudentHandler = () =>{
      console.log("heree", studentchecked)
      if (typeof window !== 'undefined'){
        if(localStorage.getItem("invitedStudent")){
          console.log("found in local")
          const tempst = localStorage.getItem("invitedStudent")
          const ars = tempst.split(',')
          console.log(ars)
          studentchecked = studentchecked.concat(ars)
          studentchecked = Array.from(new Set(studentchecked))
          console.log("new",studentchecked)
        }
        localStorage.setItem("invitedStudent", studentchecked, () => {
        
            });
        const tempdata = localStorage.getItem("invitedStudent")
        console.log("from local",tempdata)
      
        setStudentInvite(false)
        if (typeof window !=='undefined'){
        window.location.reload()
        }
      }
    }

    const inviteTeacherHandler = () =>{
      console.log("teacher here",teacherchecked)
      if (typeof window !== 'undefined'){
        if(localStorage.getItem("invitedTeacher")){
          console.log("found in local")
          const tempt = localStorage.getItem("invitedTeacher")
          const art = tempt.split(',')
          console.log(art)
          teacherchecked = teacherchecked.concat(art)
          teacherchecked = Array.from(new Set(teacherchecked))
          console.log("new",teacherchecked)
        }
      }
      if (typeof window !== 'undefined'){
        localStorage.setItem("invitedTeacher",teacherchecked,()=>{

        })
        const tempdata = localStorage.getItem("invitedTeacher")
        console.log("from local",tempdata)
        setTeacherInvite(false)
        if (typeof window !=='undefined'){
        window.location.reload()
        }
      }
    }
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        setName1(JSON.parse(localStorage.getItem("Tname")));
        setPhotoUrl(JSON.parse(localStorage.getItem("photoURL")));
        // const temps = localStorage.getItem("invitedStudent")
        // if (temps!==null && temps.length>0) {
          
        // }
        const indexfromlocal = JSON.parse(localStorage.getItem("indexval"))
        console.log("here",indexfromlocal)
        if (indexfromlocal!=null){
          setSelectedIndex(indexfromlocal)
          handleListItemClick(indexfromlocal)
        }
      }
    }, []);
    const sidebar=['Project Details','Messaging','Group Chat','ChatGPT','Google Drive']
    const lowerhalf = ['Add Students', 'Add Co-Instructors']
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
    return(

        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navdash/>
        <Drawer variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
          <DrawerHeader>
           
          </DrawerHeader>
          <Divider />
          <List>
            {sidebar.map((text, index) => (
              <React.Fragment key={text}>

                {(index!==2 && index!==3 ) || onmessage ? (
                  

              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    ...(index >=2 && index<4 && {marginLeft:'30px'})
                  }}
                  onClick={() => handleListItemClick(index)} 
                  selected={index === selectedIndex}
                >
                  <ListItemIcon
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                    }}
                  >
                    {index === 0 ? <ArticleIcon /> : null}
                    {index === 1 ? <MarkChatUnreadIcon/> : null}

                    {index === 2 ? <svg stroke='currentColor' fill='none' strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
    <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z"></path>
</svg>: ''}
                    {index === 3 ? <svg fill='currentColor' strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
<path d="M 11.134766 1.0175781 C 10.87173 1.0049844 10.606766 1.0088281 10.337891 1.0332031 C 8.1135321 1.2338971 6.3362243 2.7940749 5.609375 4.8203125 C 3.8970488 5.1768339 2.4372723 6.3048522 1.671875 7.9570312 C 0.73398779 9.9840533 1.1972842 12.30076 2.5878906 13.943359 C 2.0402591 15.605222 2.2856216 17.434472 3.3320312 18.921875 C 4.6182099 20.747762 6.8565685 21.504693 8.9746094 21.121094 C 10.139659 22.427613 11.84756 23.130452 13.662109 22.966797 C 15.886521 22.766098 17.663809 21.205995 18.390625 19.179688 C 20.102972 18.823145 21.563838 17.695991 22.330078 16.042969 C 23.268167 14.016272 22.805368 11.697142 21.414062 10.054688 C 21.960697 8.3934373 21.713894 6.5648387 20.667969 5.078125 C 19.38179 3.2522378 17.143432 2.4953068 15.025391 2.8789062 C 14.032975 1.7660011 12.646869 1.0899755 11.134766 1.0175781 z M 11.025391 2.5136719 C 11.921917 2.5488523 12.754993 2.8745885 13.431641 3.421875 C 13.318579 3.4779175 13.200103 3.5164101 13.089844 3.5800781 L 9.0761719 5.8964844 C 8.7701719 6.0724844 8.5801719 6.3989531 8.5761719 6.7519531 L 8.5175781 12.238281 L 6.75 11.189453 L 6.75 6.7851562 C 6.75 4.6491563 8.3075938 2.74225 10.433594 2.53125 C 10.632969 2.5115 10.83048 2.5060234 11.025391 2.5136719 z M 16.125 4.2558594 C 17.398584 4.263418 18.639844 4.8251563 19.417969 5.9101562 C 20.070858 6.819587 20.310242 7.9019929 20.146484 8.9472656 C 20.041416 8.8773528 19.948163 8.794144 19.837891 8.7304688 L 15.826172 6.4140625 C 15.520172 6.2380625 15.143937 6.2352031 14.835938 6.4082031 L 10.052734 9.1035156 L 10.076172 7.0488281 L 13.890625 4.8476562 C 14.584375 4.4471562 15.36085 4.2513242 16.125 4.2558594 z M 5.2832031 6.4726562 C 5.2752078 6.5985272 5.25 6.7203978 5.25 6.8476562 L 5.25 11.480469 C 5.25 11.833469 5.4362344 12.159844 5.7402344 12.339844 L 10.464844 15.136719 L 8.6738281 16.142578 L 4.859375 13.939453 C 3.009375 12.871453 2.1365781 10.567094 3.0175781 8.6210938 C 3.4795583 7.6006836 4.2963697 6.8535791 5.2832031 6.4726562 z M 15.326172 7.8574219 L 19.140625 10.060547 C 20.990625 11.128547 21.865375 13.432906 20.984375 15.378906 C 20.522287 16.399554 19.703941 17.146507 18.716797 17.527344 C 18.724764 17.401695 18.75 17.279375 18.75 17.152344 L 18.75 12.521484 C 18.75 12.167484 18.563766 11.840156 18.259766 11.660156 L 13.535156 8.8632812 L 15.326172 7.8574219 z M 12.025391 9.7109375 L 13.994141 10.878906 L 13.966797 13.167969 L 11.974609 14.287109 L 10.005859 13.121094 L 10.03125 10.832031 L 12.025391 9.7109375 z M 15.482422 11.761719 L 17.25 12.810547 L 17.25 17.214844 C 17.25 19.350844 15.692406 21.25775 13.566406 21.46875 C 12.449968 21.579344 11.392114 21.244395 10.568359 20.578125 C 10.681421 20.522082 10.799897 20.48359 10.910156 20.419922 L 14.923828 18.103516 C 15.229828 17.927516 15.419828 17.601047 15.423828 17.248047 L 15.482422 11.761719 z M 13.947266 14.896484 L 13.923828 16.951172 L 10.109375 19.152344 C 8.259375 20.220344 5.8270313 19.825844 4.5820312 18.089844 C 3.9291425 17.180413 3.6897576 16.098007 3.8535156 15.052734 C 3.9587303 15.122795 4.0516754 15.205719 4.1621094 15.269531 L 8.1738281 17.585938 C 8.4798281 17.761938 8.8560625 17.764797 9.1640625 17.591797 L 13.947266 14.896484 z"></path>
</svg>:''}
                    {/* {index === 4 ? <PermIdentityIcon/> : null} */}
                    {index === 4 ? <AddToDriveIcon /> : null}
                    {/* {index === 6 ? <GradingIcon/>: null} */}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  {index === 1 && open && !onmessage ? <KeyboardArrowDownIcon/>:null}
                  {index === 1 && open && onmessage ? <KeyboardArrowUpIcon/>:null}
                </ListItemButton>
              </ListItem>
                              ): null}
                              </React.Fragment>
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
       
                onClick={() => handleListItemClick2(index)}
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          
          <DrawerHeader/>
            {viewProjects && <Details/>}
            {discord && <Discord/>}
            {chat && <Chat/>}
            {gpt && <Chatgpt/>}
            {seeGrades && <Grades/>}
        </Box>
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
              {"Add Co-Instructors to this project"}
          </DialogTitle>
          <DialogContent>
              <DialogContentText id="alert-dialog-description">
              <Box sx={{ width: '100%', height:'100%' }}>
              <div class="flex rounded-md w-full" style={{border: '1px solid black'}}>
                <Search style={{ display: 'flex', width: 'full', height: '50px', borderRadius: '15px', borderBlockColor: 'black'}}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search Instructors..."
                    inputProps={{ 'aria-label': 'search' }}
                    style={{background:'transparent', height: '100%', width: 'full', padding: '0', margin: '0' }}
                  />
                </Search>
              </div>
              <FormControlLabel
            style={{justifyContent:"space-between", display:'flex' , marginRight:'4px'}}
            
        label={
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Select All
        </Typography>
        }
        labelPlacement='start'
        control={
          <Checkbox
            checked={teacherchecked.length === teacherlist.length}
            onChange={handleteacherCheckboxChange}
            end = "end"

          />
        }

      />
      <hr  ></hr>
              {teacherlist.map((value) => {
                           const labelId = `checkbox-list-secondary-label-${value}`;
                           return (
                           <ListItem
                               key={value}
                               secondaryAction={
                               <Checkbox
                                   edge="end"
                                   onChange={handleteacherToggle(value)}
                                   checked={teacherchecked.indexOf(value) !== -1}
                                   inputProps={{ 'aria-labelledby': labelId }}
                               />
                               }
                               disablePadding
                               sx={{ justifyContent: 'center' }}
                           >
                               <ListItemButton>
                               <ListItemText id={labelId} primary={value} />
                               </ListItemButton>
                           </ListItem>
                           );
                       })}
          </Box> 
          
          </DialogContentText>
        </DialogContent>



        </div>
        <button onClick={inviteTeacherHandler} class="w-4/6 mx-auto mb-4 justify-center font-semibold tracking-wider  rounded-2xl bg-opacity-60 text-black bg-discordpurple-0 px-4 py-2">
              Add
            </button>
        </Dialog>
        <Dialog
          open={inviteStudent}
          onClose={handleStudentClose}
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
          onClick={handleStudentClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8 }}
          >
          <CloseIcon />
          </IconButton>
              {"Add Students to this project"}
          </DialogTitle>
          <DialogContent>
              <DialogContentText id="alert-dialog-description">
              <Box sx={{ width: '100%', height:'100%' }}>
              <div class="flex rounded-md w-full" style={{border: '1px solid black'}}>
                <Search style={{ display: 'flex', width: '100%', height: '50px', borderRadius: '15px', borderBlockColor: 'black'}}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search Students..."
                    inputProps={{ 'aria-label': 'search' }}
                    style={{background:'transparent', height: '100%', width: 'full', padding: '0', margin: '0', flex: '1' }}
                  />
                </Search>
              </div>

              <FormControlLabel
            style={{justifyContent:"space-between", display:'flex' , marginRight:'4px'}}
            
        label={
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Select All
        </Typography>
        }
        labelPlacement='start'
        control={
          <Checkbox
            checked={studentchecked.length === studentlist.length}
            // indeterminate={checked.length > 0 && checked.length < studentlist.length}
            onChange={handlestudentCheckboxChange}
            end = "end"

          />
        }

      />
      <hr  ></hr>
              {studentlist.map((value) => {
                           const labelId = `checkbox-list-secondary-label-${value}`;
                           return (
                           <ListItem
                               key={value}
                               secondaryAction={
                               <Checkbox
                                   edge="end"
                                   onChange={handlestudentToggle(value)}

                                   checked= {studentchecked.indexOf(value) !== -1}
                                   inputProps={{ 'aria-labelledby': labelId }}
                               />
                               }
                               disablePadding
                               sx={{ justifyContent: 'center' }}
                           >
                               <ListItemButton>
                               <ListItemText id={labelId} primary={value} />
                               </ListItemButton>
                           </ListItem>
                           );
                       })}

          </Box> 
          
          </DialogContentText>
        </DialogContent>



        </div>
        <button onClick={inviteStudentHandler} class="w-4/6 mx-auto mb-4 justify-center font-semibold tracking-wider  rounded-2xl bg-opacity-60 text-black bg-discordpurple-0 px-4 py-2">
              Add
            </button>
        </Dialog>


</Box>

    )
}