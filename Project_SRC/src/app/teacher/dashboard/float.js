import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material';

import Papa from 'papaparse'
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

  const getEmailAndName = () => {
    if (parsedData) {
      return parsedData.map(row => {
        if (row['Email Address']) {
          return {
            email: row['Email Address'],
            name: row['First Name'] + ' ' + row['Last Name'],
          };
        }
        return null;
      }).filter(entry => entry !== null);
    }
    return [];
  };

export default function FloatingActionButtons() {
    const [hovering, setHovering] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false)
    const [filename,setfilename] = React.useState(null)
    const [parsedData, setParsedData] = React.useState(null);
    const [className, setClassName] = React.useState('');
    const handleHover = () => {
        setHovering(true);
    };

    const handleHoverOut = () => {
        setHovering(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        setfilename(null)
      };
      const csvParser = (file) =>{
        console.log(file)
        Papa.parse(file,{
            complete:function(results){
                console.log(results.data)
                setParsedData(results.data);
            },
            header:true, 
            skipEmptyLines:true,
            
        })
       
      }
      const handleFileName = (event) =>{
        const file = event.target.files[0];
        if (file) {
            setfilename(file.name);
            csvParser(file)
        }
      }
      const getEmailAndName = () => {
        if (parsedData) {
            const emailAndName = parsedData.map(row => {
                if (row['Email Address']) {
                    return {
                        email: row['Email Address'],
                        name: row['First Name'] + ' ' + row['Last Name'],
                    };
                }
                return null;
            }).filter(entry => entry !== null);
            return emailAndName;
        }
        return [];
    };
    const handleTemp = () =>{
      setOpen(false);
      setOpen2(true);
    }
    const handleClose2 = () =>{
      setOpen2(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const emailAndName = getEmailAndName();
        if (!className.trim()) {
          alert("Please enter a class name.");
          return;
        } else if (emailAndName.length === 0) {
          alert("Please upload a valid CSV file.");
          return;
        } else {
          console.log("class name",className);
          console.log("email name",emailAndName);
          handleTemp();
        }
    };

    
    return (
        <>
        <Box sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <Fab
                sx={{backgroundColor:hovering?'#5964f2':'#5964f2',
                '&.MuiFab-extended': {
                  backgroundColor: '#5964f2', // Background color when expanded
              },
              }}
                aria-label="add"
                variant={hovering?'extended':'circular'}
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}
                onClick={handleClickOpen}
            >
                <AddIcon />
                {hovering && (
                    <Typography sx={{ ml: 1, textTransform: 'capitalize' }}>
                        Classroom
                    </Typography>
                )}
            </Fab>
        </Box>
           <Dialog
           open={open}
           onClose={handleClose}
         >
           <DialogTitle>Create New Classroom</DialogTitle>
           <DialogContent>
             <DialogContentText>
               Please enter Class Details and upload CSV file for students.
             </DialogContentText>
             <TextField
               autoFocus
               required
               margin="dense"
               id="name"
               name="classname"
               label="Class Name & Number"
               type="text"
               fullWidth
               variant="standard"
               onChange={(e) => setClassName(e.target.value)}
             />
             <div class=" mt-4">
               <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{justifyContent:'justify', alignItems:'center', backgroundColor:'#5964f2','&:hover': {
        opacity:'80%',
        backgroundColor:'#5964f2' 
    },}}
    >
      Upload file
      <VisuallyHiddenInput type="file" onChange={handleFileName} required />
    
    </Button>
    <span class="ml-4 ">
    {filename? filename: ''}
    </span>
    </div>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose} sx={{color:'#5964f2', backgroundColor:hovering?'#d5d8fb':'transparent'}}>Cancel</Button>
             <Button type='submit' sx={{color:'#5964f2'}} onClick={(event) => handleSubmit(event)}>Create Class</Button>
           </DialogActions>
         </Dialog>
         <Dialog
           open={open2}
           onClose={handleClose2}
         >
           <DialogTitle>Classroom Created</DialogTitle>
           <hr />
           <DialogContent>
             <DialogContentText sx={{textAlign:'center', color:'black'}}>
               Class Name: {className}
             </DialogContentText>
             <div class=" mt-4">

    <Table>
            <TableHead >
              <TableRow >
                <TableCell sx={{ color:'black', fontWeight:'bold'}}>Email</TableCell>
                <TableCell sx={{ color:'black', fontWeight:'bold'}}>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getEmailAndName().map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.email}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </div>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose2} sx={{color:'#5964f2', backgroundColor:hovering?'#d5d8fb':'transparent'}}>Close</Button>
                 </DialogActions>
         </Dialog>
         </>
    );
}
