"use client";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
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
export default function Class() {
  const router = useRouter();
  const [classname, setClassname] = React.useState('');
    const [classnumber, setClassnumber] = React.useState('');
  
    const handleCreate = () =>{
     
    }
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
          const storedClassname = localStorage.getItem("classname");
          const storedClassnumber = localStorage.getItem("classnumber");
          if (storedClassname && storedClassnumber) {
              // If classname and classnumber are simple strings, no need to use JSON.parse
              setClassname(storedClassname);
              setClassnumber(storedClassnumber);
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
  const projects = [
    { name: "Project 1", url: "https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?t=st=1709264522~exp=1709268122~hmac=37495c2f747709fb91df549997f05b4fa7716d2b9c2bd9cebeab5eaa4ebc67b6&w=2000" },
    { name: "Project 2", url: "https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?t=st=1709264652~exp=1709268252~hmac=e920e67e63c1dad31bc765d6e11bb104962195a5e15e9a1b710ff32fbea9a7e9&w=1380" },
    { name: "Project 3", url: "https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?t=st=1709264652~exp=1709268252~hmac=e920e67e63c1dad31bc765d6e11bb104962195a5e15e9a1b710ff32fbea9a7e9&w=1380" },
    { name: "Project 4", url: "https://img.freepik.com/free-vector/project-management-business-process-planning-workflow-organization-colleagues-working-together-teamwork_335657-2469.jpg?t=st=1709264673~exp=1709268273~hmac=e2c3f6cc36f72bddbe55c2584d0f21348c438e981c9c30f37667154bba83bf5e&w=2000"},
    { name: "Project 5", url: "https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?t=st=1709264522~exp=1709268122~hmac=37495c2f747709fb91df549997f05b4fa7716d2b9c2bd9cebeab5eaa4ebc67b6&w=2000" },
    { name: "Project 6", url: "https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?t=st=1709264652~exp=1709268252~hmac=e920e67e63c1dad31bc765d6e11bb104962195a5e15e9a1b710ff32fbea9a7e9&w=1380" },
    { name: "Project 7", url: "https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?t=st=1709264652~exp=1709268252~hmac=e920e67e63c1dad31bc765d6e11bb104962195a5e15e9a1b710ff32fbea9a7e9&w=1380" },
    { name: "Project 8", url: "https://img.freepik.com/free-vector/project-management-business-process-planning-workflow-organization-colleagues-working-together-teamwork_335657-2469.jpg?t=st=1709264673~exp=1709268273~hmac=e2c3f6cc36f72bddbe55c2584d0f21348c438e981c9c30f37667154bba83bf5e&w=2000"},
  ];
  function ProjectCard({ projectName, projectUrl }) {
    // const [projectname, setProjectname] = React.useState(null)
    // const [projecturl, setProjecturl] = React.useState(null)
    const handleprojectclick = () => {
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
          <Grid container spacing={3} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ProjectCard projectName={project.name} projectUrl={project.url} />
              </Grid>
            ))}
          </Grid>
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


  )
}
        