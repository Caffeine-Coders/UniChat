"use client";
import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Add from '@mui/icons-material/Add';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ticon from "../../../../../public/ticon.png"
import sicon from "../../../../../public/sicon.png"
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "../../components/dash.css"
import FilterListIcon from '@mui/icons-material/FilterList';
export default function Content() {
    const [classname, setClassname] = useState('');
    const [classnumber, setClassnumber] = useState('');
    const [hover, setHover] = useState(false);
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
  return (
    <>
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:'40px', display: 'flex', marginLeft: '10%', marginRight: '10%' }}>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <div class="flex rounded-md mt-8">
                <Typography variant="h2" component="h2" sx={{fontFamily: 'caveat'}}>
                    Welcome to {classnumber+ " " +classname}
                </Typography>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div class="flex rounded-md mt-8">
                <Typography variant="h5" component="h2" fontWeight="bold" letterSpacing="2px">
                    Overview
                </Typography>
                </div>
            </Grid>
            <Grid item xs={3}>
            <button class="focus:outline-none w-full hover:bg-gray-300 hover:rounded-xl ">
                <div class="bg-white rounded-xl h-40 shadow-lg">
                    <div style={{marginLeft:'20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%'}}>
                        <AddBoxOutlinedIcon sx={{ fontSize: 30, marginBottom: '15px' }} />
                        <Typography variant="h5" component="h2">
                            Create Project
                        </Typography>
                    </div>
                </div>
            </button>
            </Grid>
            <Grid item xs={3}>
            <button class="focus:outline-none w-full hover:bg-gray-300 hover:rounded-xl ">
                <div class="bg-white rounded-xl h-40 shadow-lg">
                    <div style={{marginLeft:'20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%'}}>
                        <img src={sicon.src} alt="sicon" style={{width: '30px', marginBottom: '15px'}} />
                        <Typography variant="h5" component="h2">
                            Add Students
                        </Typography>
                    </div>
                </div>
            </button>
            </Grid>
            <Grid item xs={3}>
            <button class="focus:outline-none w-full hover:bg-gray-300 hover:rounded-xl ">
                <div class="bg-white rounded-xl h-40 shadow-lg">
                    <div style={{marginLeft:'20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%'}}>
                        <img src={ticon.src} alt="ticon" style={{width: '30px', marginBottom: '15px'}} />
                        <Typography variant="h5" component="h2">
                            Add Co Instructors
                        </Typography>
                    </div>
                </div>
            </button>
            </Grid>
            <Grid item xs={3}>
            <button class="focus:outline-none w-full hover:bg-gray-300 hover:rounded-xl ">
                <div class="bg-white rounded-xl h-40 shadow-lg">
                    <div style={{marginLeft:'20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '100%'}}>
                        <Groups2OutlinedIcon sx={{ fontSize: 30, marginBottom: '15px' }} />
                        <Typography variant="h5" component="h2">
                            View Members
                        </Typography>
                        <Typography variant="h6" component="h2" color="gray">
                            3 members
                        </Typography>
                    </div>
                </div>
            </button>
            </Grid>
            <Grid item xs={12}>
                <div class="flex rounded-md mt-8">
                <Typography variant="h5" component="h2" fontWeight="bold" letterSpacing="2px">
                    Projects
                </Typography>
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
            {/* <Grid item xs={2}>
                <div class="flex rounded-md w-full">
                <Button 
                    onMouseHover={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    style={{backgroundColor: '#e3d0f5', color: hover ? 'blue':'black', borderRadius: '15px', height: '50px', width: '100%', background: 'linear-gradient(to right, transparent, transparent, gray'}} startIcon={<FilterListIcon />}>
                    
                </Button>
                </div>
            </Grid>  */}
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
        </Grid>
    </Box>
    </>
  );
}

