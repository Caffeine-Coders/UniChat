"use client";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import cl1 from "../../../../public/class1.png"
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import {ProjectList} from '../dbconnections/getProject'
import {getProject} from '../dbconnections/getProjectDetails'
import { getMembers } from '../dbconnections/getNames';
export default function Class() {
  const router = useRouter();
  const [classname, setClassname] = React.useState('');
    const [classnumber, setClassnumber] = React.useState('');
    const[classyear,setClassyear]= React.useState('');
    const [projects, setProjects] = React.useState([]);
    // let projects = [];
    const handleCreate = () =>{
     
    }
    const projectgetter = async(parsedClassname, parsedClassnumber, parsedClassyear) =>{
        const tempprojects = await ProjectList(parsedClassname,parsedClassnumber,parsedClassyear)
          setProjects(tempprojects)
    }
    console.log("projects",projects)
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedClassname = localStorage.getItem("classname");
        const storedClassnumber = localStorage.getItem("classnumber");
        const storedClassyear = localStorage.getItem("classyear")
        if (storedClassname && storedClassnumber) {
          const parsedClassname = storedClassname[0] === '"' && storedClassname[storedClassname.length - 1] === '"' 
            ? storedClassname.slice(1, -1) 
            : storedClassname;
          const parsedClassnumber = storedClassnumber[0] === '"' && storedClassnumber[storedClassnumber.length - 1] === '"' 
            ? storedClassnumber.slice(1, -1) 
            : storedClassnumber;
          const parsedClassyear = storedClassyear
          setClassname(parsedClassname);
          setClassnumber(parsedClassnumber);
          setClassyear(storedClassyear)
          // const semails = localStorage.getItem("studentemails")
          // const temails = localStorage.getItem("teacheremails")
          console.log("got it",parsedClassname,parsedClassnumber,parsedClassyear)
          projectgetter(parsedClassname,parsedClassnumber,parsedClassyear) 
        }
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
  const detailsgetter = async(projectName) =>{
    const details = await getProject(projectName)
    console.log("details",details)
    localStorage.setItem("projectname",details.projectName)
    localStorage.setItem("projectid",details._id)
    localStorage.setItem("projectgoal",details.projectDescription)
    localStorage.setItem("nativeChat",details.nativeChat)
    console.log("details here",details.teacherIds,details.studentIds)
    localStorage.setItem("projectTemails",details.teacherIds)
    localStorage.setItem("projectSemails",details.studentIds)
    console.log("details for nativechat",JSON.stringify(details.messages))
    localStorage.setItem("nativemessages",JSON.stringify(details.messages))
    console.log("details got mmsgs",details.msgs)
    localStorage.setItem("messages",JSON.stringify(details.chatgptmessages))
    const semail = localStorage.getItem("projectSemails")
    const temail = localStorage.getItem("projectTemails")
    const names = await getMembers(semail,temail)
    // const names = await getMembers(details.studentIds,details.teacherIds)
    console.log("names",names)
    const {snames,tnames } = names
    localStorage.setItem("projectTnames",tnames)
    localStorage.setItem("projectSnames",snames)
    console.log("split working",snames,tnames)
  }
  function ProjectCard({ projectName, projectUrl }) {
    const handleprojectclick = async() => {
      await detailsgetter(projectName)
  
      router.push('/teacher/classroom/projectdetails');
    };

  return (
      <Card sx={{ maxWidth: 345, borderRadius: '15px', '&:hover':{cursor: 'pointer', boxShadow: '0 10px 10px rgba(224, 187, 255, 0.8)'} }} onClick={handleprojectclick}>
        <CardMedia
            component="img"
            height="140"
            image={projectUrl}
            style={{ height: '200px' }}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {projectName}
        </Typography>
        </CardContent>
        </Card>
  );
}

    return (
      <Grid container spacing={4}>
               
      <Grid item xs={12}>
        <a href='/teacher/dashboard'>
      <span class="flex text-sm" >
        <ArrowBackIcon style={{height:'20px'}}/> Dashboard</span>
        </a>
          <div class="flex rounded-md mt-8">
        <Typography variant="h2" component="h2" sx={{fontFamily: 'Montserrat'}}>
            Classroom : {classnumber || classname ? `${classnumber} ${classname}` : "Classroom 1"}
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
     <div class=" pl-4 py-2  rounded-lg flex justify-between space-between shadow-lg" >
          <h4 class="flex font-bold tracking-wider ">
            Create new Project
          </h4>
          {/* <button class="mr-4 bg-discordpurple-300 px-4 rounded-lg font-medium">Create</button> */}
          <Button onClick={handleCreate()}  variant="contained" style={{marginRight:'10px', borderRadius:'15px', backgroundColor:'#692ea3'}}>
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
  
      <Grid style={{position:'relative', marginTop:'3%', width:'100%', marginLeft:'30px'}}>
        {projects[0]!==null ? (
          <Grid container spacing={3} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ProjectCard projectName={project.projectName} projectUrl={project.url}/>
              </Grid>
            ))}
          </Grid>) : null}
        </Grid> 
      {/* <Grid item xs={12} sx={{display:'flex', justifyContent: 'center'}}>
          <Pagination count={5}  renderItem={(item) => (
              <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              />
          )}/>
      </Grid> */}
  </Grid>


  )
}
        