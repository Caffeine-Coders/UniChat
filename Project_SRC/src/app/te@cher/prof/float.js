import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
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

export default function FloatingActionButtons() {
    const [hovering, setHovering] = React.useState(false);
    const [open, setOpen] = React.useState(false);
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
          handleClose();
        }
    };
    return (
        <>
        <Box sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <Fab
                color="primary"
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
      sx={{justifyContent:'justify', alignItems:'center'}}
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
             <Button onClick={handleClose}>Cancel</Button>
             <Button type='submit' onClick={(event) => handleSubmit(event)}>Create Class</Button>
           </DialogActions>
         </Dialog>
         </>
    );
}
