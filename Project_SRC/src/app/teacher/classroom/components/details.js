import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';

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
            {children}
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

export default function Details() {
const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    
  return (
    <Grid container spacing={4}>
        <Grid item xs={12}>
        <a href='/teacher/classroom'>
            <span class="flex text-sm" >
            <ArrowBackIcon style={{height:'20px'}}/> Classroom</span>
            </a>
            <div style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(https://img.freepik.com/free-vector/minimal-geometric-composition-cover_1217-2380.jpg?t=st=1709701426~exp=1709705026~hmac=731685fe10379ee015157584f7672d75c23539379b22a0564d4b50ae529c26db&w=996)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderRadius: '24px',
              zIndex: '0',
              marginLeft: 'auto',
              width: '100%', // Set width to 100%
              height: '30vh',
              position: 'relative',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: '1',
              color: 'white',
            }}>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                padding: '20px',
                color: 'white',
              }}>
                <h3 style={{ fontWeight: 'bolder', fontSize: '40px', letterSpacing: '2px' }}>UniChat Project!</h3>
                <span style={{}}>Grade Level : Masters</span><br/>
                <span style={{}}>Subject Areas : Software Engineering</span>
              </div>
            </div>
        </Grid>
        
        <Grid item xs={12}>
        
          <div class="flex rounded-md ml-6">
            <Typography sx={{fontSize:'25px', fontWeight:'5px'}} >
                Project Description/Goals
            </Typography>
          </div>
          <Divider variant="middle" sx={{color:'black'}}/>
          <div class="ml-6">
            <Typography variant="body1" component="p" sx={{fontSize:'20px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
            </Typography>
          </div>
        </Grid>
          <Grid item xs={12}>
          
          <div class="flex rounded-md ml-6">
            <Typography sx={{fontSize:'25px', fontWeight:'5px'}} >
                Members Associated with the Project
            </Typography>
          </div>
          <Divider variant="middle" sx={{color:'black'}}/>
          <div class="ml-6">
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Students" {...a11yProps(0)} />
                <Tab label="Co-Instructors" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
            <div class="mt-4 rounded-lg flex justify-between space-between">
              <h3 class="flex text-xl"  >
                <PersonIcon style={{ fontSize: 'inherit' }} />
                <span style={{ fontSize: 'inherit' }}>Forum Dipen Shah</span>
              </h3>
              <div class="flex items-center text-xl">
                <h3 class="mr-4">somemeial@gmail.com</h3>
                <button style={{ backgroundColor: 'transparent', border: 'none', padding: '5px' }}>
                  <DeleteIcon style={{ fontSize: 'inherit' }} />
                </button>
              </div>
            </div>
            <hr class=" mt-4 h-px  bg-gray-400 border-0"></hr>
            <div class="mt-4 rounded-lg flex justify-between space-between">
              <h3 class="flex text-xl"  >
                <PersonIcon style={{ fontSize: 'inherit' }} />
                <span style={{ fontSize: 'inherit' }}>Dheeraj Kumar Thanda</span>
              </h3>
              <div class="flex items-center text-xl">
                <h3 class="mr-4">somemeial@gmail.com</h3>
                <button style={{ backgroundColor: 'transparent', border: 'none', padding: '5px' }}>
                  <DeleteIcon style={{ fontSize: 'inherit' }} />
                </button>
              </div>
            </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <div class="mt-4 rounded-lg flex justify-between space-between">
              <h3 class="flex text-xl"  >
                <PersonIcon style={{ fontSize: 'inherit' }} />
                <span style={{ fontSize: 'inherit' }}>Prof. Forum Dipen Shah</span>
              </h3>
              <div class="flex items-center text-xl">
                <h3 class="mr-4">somemeial@gmail.com</h3>
                <button style={{ backgroundColor: 'transparent', border: 'none', padding: '5px' }}>
                  <DeleteIcon style={{ fontSize: 'inherit' }} />
                </button>
              </div>
            </div>
            <hr class=" mt-4 h-px  bg-gray-400 border-0"></hr>
            <div class="mt-4 rounded-lg flex justify-between space-between">
              <h3 class="flex text-xl"  >
                <PersonIcon style={{ fontSize: 'inherit' }} />
                <span style={{ fontSize: 'inherit' }}>Prof. Dheeraj Kumar Thanda</span>
              </h3>
              <div class="flex items-center text-xl">
                <h3 class="mr-4">somemeial@gmail.com</h3>
                <button style={{ backgroundColor: 'transparent', border: 'none', padding: '5px' }}>
                  <DeleteIcon style={{ fontSize: 'inherit' }} />
                </button>
              </div>
            </div>
            </CustomTabPanel>
          </Box>
          </div>
        </Grid>
        
    </Grid>
  );
}

