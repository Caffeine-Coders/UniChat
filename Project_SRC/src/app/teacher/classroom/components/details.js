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
const [memberStudents, setMemberStudents] = React.useState([]) 
const [memberStudentsEmails, setMemberStudentsEmails] = React.useState([]) 
const [memberTeachers, setMemberTeachers] = React.useState([])
const [memberTeachersEmails, setMemberTeachersEmails] = React.useState([])
const [pname,setpname] = React.useState("")
const [pgoal,setpgoal] = React.useState("")
const [grade,setgrade] = React.useState("")
const [subject,setsubject] = React.useState("")
let tempData=[]
let tempTData = []
let tempEmail = []
let tempTEmail = []
let chat = []
  React.useEffect(() => {
      if (typeof window !== 'undefined') {
        tempData  = localStorage.getItem('projectSnames')
        tempTData = localStorage.getItem('teachernames')
        tempEmail = localStorage.getItem('projectSemails')
        tempTEmail = localStorage.getItem('teacheremails')
        if (tempData!==null && (tempData.length)>0){
        const tempArray = tempData.split(',')
        console.log("arr",tempArray)
        setMemberStudents(tempArray)
        const temp2Array = tempEmail.split(',')
        setMemberStudentsEmails(temp2Array)
        console.log("members found",memberStudents)
        }
        if (tempTData!==null && (tempTData.length)>0){
          const tempTArray = tempTData.split(',')
          console.log("got it teacher",tempTArray)
          setMemberTeachers(tempTArray)
          const tempT2Array = tempTEmail.split(',')
          setMemberTeachersEmails(tempT2Array)
        }
      }
      
      let pname = localStorage.getItem("projectname")
      if (pname){
        pname = pname.replace(/"/g, "")
      }
      setpname(pname)

      let pgoal = localStorage.getItem("projectgoal")
      if (pgoal){
        pgoal = pgoal.replace(/"/g,"")
      }
      setpgoal(pgoal)
      const grade = localStorage.getItem("classnumber")
      setgrade(grade)
      const subject = localStorage.getItem("classname")
      setsubject(subject)
  }, []);


  
  return (
    <Grid container spacing={4}>
        <Grid item xs={12}>
        <a href='/teacher/classroom'>
            <span class="flex text-sm" >
            <ArrowBackIcon style={{height:'20px'}}/> Classroom</span>
            </a>
            <div style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(https://img.freepik.com/free-vector/gradient-shapes-dark-background_23-2148408859.jpg)`,
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
                <h3 style={{ fontWeight: 'bolder', fontSize: '40px', letterSpacing: '2px' }}>{pname}!</h3>
                <span style={{}}>Grade Level : {grade}</span><br/>
                <span style={{}}>Subject Areas : {subject}</span>
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
              {pgoal}
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
            {memberStudents.map((student, index) => (
              <>
              <div key={index} className="mt-4 rounded-lg flex justify-between space-between">
                <h3 className="flex text-xl">
                  <PersonIcon style={{ fontSize: 'inherit', marginTop:'4px', marginRight:'4px' }} />
                  <span style={{ fontSize: 'inherit' }}>{student}</span>
                </h3>
                <div className="flex items-center text-xl">
                  <h3 className="mr-4">{memberStudentsEmails[index]}</h3>
                  <button style={{ backgroundColor: 'transparent', border: 'none', padding: '5px' }}>
                    <DeleteIcon style={{ fontSize: 'inherit' }} />
                  </button>
                </div>
              </div>
               <hr class=" mt-4 h-px  bg-gray-400 border-0"></hr>
               </>
            ))}
            
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            {memberTeachers.map((teacher, index) => (
              <>
              <div key={index} className="mt-4 rounded-lg flex justify-between space-between">
                <h3 className="flex text-xl">
                <PersonIcon style={{ fontSize: 'inherit', marginTop:'4px', marginRight:'4px' }} />
                  <span style={{ fontSize: 'inherit' }}>{teacher}</span>
                </h3>
                <div className="flex items-center text-xl">
                  <h3 className="mr-4">{memberTeachersEmails[index]}</h3>
                  <button style={{ backgroundColor: 'transparent', border: 'none', padding: '5px' }}>
                    <DeleteIcon style={{ fontSize: 'inherit' }} />
                  </button>
                </div>
              </div>
               <hr class=" mt-4 h-px  bg-gray-400 border-0"></hr>
               </>
            ))}
            </CustomTabPanel>
          </Box>
          </div>
        </Grid>
        
    </Grid>
  );
}

