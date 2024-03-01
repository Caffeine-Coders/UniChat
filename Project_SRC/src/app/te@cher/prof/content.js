'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import bg from '../../../../public/dashimage.jpg'
import Navdash from './navbar'
import { Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
  position:'relative',
  // borderRadius: theme.shape.borderRadius,
 
  marginTop:'1%',
  borderRadius:'24px',
  backgroundColor:'white',
  '&:hover': {
    backgroundColor: 'white',
  },
  width:'100%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(1),
    // width: 'auto',
  },
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
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center horizontally
}));

export default function Content() {
return (
  <>
  <Navdash/>
  <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:'48px' }}>
  <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} >
     
        {/* <img src={bg.src} className="h-3/4 w-4/5 mx-auto rounded-xl" alt="Background"></img> */}
        <div style={{  
  backgroundImage: `url(${bg.src})`, 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  backgroundPositionY:'center',
  borderRadius:'24px',
  // backgroundPosition: 'center',
  zIndex: '0',
  marginLeft:'auto',
  height: '50vh', position: 'relative', top: '50%', left:'30%', transform: 'translate(-50%, -50%)', zIndex: '1', color: 'white', width: '80%' }}>
           <div style={{
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '20px',
    color: 'white',
  }}>
           <h3 style={{ fontWeight: 'bolder', fontSize: '34px', letterSpacing: '2px' }}>Hi Forum!</h3>
            <span style={{}} >Here's what's happening in your classes</span>
            <Search>
            <SearchIconWrapper>
              <SearchIcon style={{color:'black'}}/>
            </SearchIconWrapper>
             <StyledInputBase
              placeholder="Search for a Class..."
              inputProps={{ 'aria-label': 'Search for a Class...' }}
              style={{color:'black'}}
            />
          </Search>  
          </div>
    </div>
              </Grid>
              <Grid item xs={12}>
              <div style={{  
 
  borderRadius:'24px',
  // backgroundPosition: 'center',
  zIndex: '0',
  marginLeft:'auto',
  height: '20vh', position: 'relative', top: '50%', left:'30%', transform: 'translate(-50%, -50%)', zIndex: '1', color: 'black', width: '80%' }}>
           <div style={{
    position: 'absolute',
            width:'100%',
            borderRadius:'24px'
  }}>
           <h3 style={{ fontWeight: 'bolder', borderBottom:'2px solid gray', fontSize:'20px', letterSpacing: '2px' }}>Quick actions</h3>
           <div class="mt-2  pl-4 py-2  rounded-lg flex justify-between space-between shadow-lg">
                <h4 class="flex font-bold tracking-wider ">
                  Create a new class
                </h4>
                {/* <button class="mr-4 bg-discordpurple-300 px-4 rounded-lg font-medium">Create</button> */}
                <Button variant="contained" style={{marginRight:'10px', borderRadius:'24px', backgroundColor:'#692ea3'}}>Contained</Button>
            </div>
          </div>
    </div>
              </Grid>
              <Grid item xs={12}>
              <div style={{  
 
  borderRadius:'24px',
  // backgroundPosition: 'center',
  zIndex: '0',
  marginLeft:'auto',
  height: 'auto', position: 'relative', top: '50%', left:'30%', transform: 'translate(-50%, -50%)', zIndex: '1', color: 'black', width: '80%' }}>
           <div style={{
    position: 'absolute',
            width:'100%',
            borderRadius:'24px'
  }}>
           <h3 style={{ fontWeight: 'bolder', borderBottom:'2px solid gray', fontSize:'20px', letterSpacing: '2px' }}>Your Classes</h3>
           
           </div>
       
       </div>
     {/* </div>
</div> */}
           {/* <div class="mt-2  pl-4 py-2  rounded-lg flex justify-between space-between shadow-lg">
           <div class="flex flex-wrap mx-auto"> */}
       </Grid>
       <Grid container spacing={2} style={{position:'relative',width:'80%', marginLeft:'10%', marginTop:'3%', display:'flex', justifyContent:'space-between' }}>
       <Grid item sx={4} >
           <Card sx={{ maxWidth: 340,width:'300px', borderRadius:'24px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-vector/hand-drawn-flat-design-book-spine_23-2149320036.jpg?t=st=1709261183~exp=1709264783~hmac=2efd3dbc235fce0fad44b2c4bf801a70430e37fe8ee6c4232cc8cba03faa1e1f&w=740"
          style={{height:'140px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
            680 Master's Project
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sx={4}>
    <Card sx={{ maxWidth: 340,  borderRadius:'24px',width:'300px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/international-day-education-cartoon-style_23-2151007489.jpg?t=st=1709261711~exp=1709265311~hmac=37ea9db374f17989af9bdd3f2aacfbb7ac89de75b4b3e351a1439d3402b65054&w=740"
          style={{height:'140px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
           520 Cryptography
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item sx={4}>
    <Card sx={{ maxWidth: 340,  borderRadius:'24px' ,width:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/front-view-educational-objects-arrangement_23-2148721256.jpg?t=st=1709261774~exp=1709265374~hmac=d9af9b550d3101e5227371de558a93ca21dc0b4ec7ec4a3512f9842c668ea717&w=740"
          style={{height:'140px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
           610 Artificial Intelligence
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
              {/* </Grid> */}
          </Grid>
      </Box>
      </Box>
  </Box>
  </>
  )
}