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
export default function Class() {
  const [classname, setClassname] = React.useState('');
    const [classnumber, setClassnumber] = React.useState('');
  
    const handleCreate = () =>{
     
    }
    React.useEffect(() => {
    if (typeof window !== 'undefined') {
        const storedClassname = localStorage.getItem("classname");
        const storedClassnumber = localStorage.getItem("classnumber");
        if (storedClassname && storedClassnumber) {
            setClassname(JSON.parse(storedClassname));
            setClassnumber(JSON.parse(storedClassnumber));
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
    { name: "Project 1", url: "https://img.freepik.com/free-vector/hand-drawn-flat-design-book-spine_23-2149320036.jpg?t=st=1709261183~exp=1709264783~hmac=2efd3dbc235fce0fad44b2c4bf801a70430e37fe8ee6c4232cc8cba03faa1e1f&w=740" },
    { name: "Project 2", url: "https://img.freepik.com/free-photo/international-day-education-cartoon-style_23-2151007489.jpg?t=st=1709261711~exp=1709265311~hmac=37ea9db374f17989af9bdd3f2aacfbb7ac89de75b4b3e351a1439d3402b65054&w=740" },
    { name: "Project 3", url: "https://img.freepik.com/free-photo/front-view-educational-objects-arrangement_23-2148721256.jpg?t=st=1709261774~exp=1709265374~hmac=d9af9b550d3101e5227371de558a93ca21dc0b4ec7ec4a3512f9842c668ea717&w=740" },
  ];
  function ProjectCard({ projectName, projectUrl }) {
    const [projectname, setProjectname] = React.useState(null)
    const [projecturl, setProjecturl] = React.useState(null)
    const handleprojectclick = () => {
      setProjectname(projectName);
      setProjecturl(projectUrl);
      console.log("pn", projectName, projectUrl);
      localStorage.setItem("classname", projectName, () => {
        JSON.parse(localStorage.getItem("classname"));
      });
      router.push('/teacher/prof/classroom');
    };

  return (
    <Card sx={{ borderRadius:'24px' }} onClick={handleprojectclick}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={projectUrl}
          style={{height:'200px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
            {projectName}
          </Typography>
        </CardContent>
      </CardActionArea>
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


  )
}
        