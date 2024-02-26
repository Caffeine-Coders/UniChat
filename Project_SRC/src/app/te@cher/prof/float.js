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
    const handleHover = () => {
        setHovering(true);
    };

    const handleHoverOut = () => {
        setHovering(false);
    };

    const handleAddClass = () =>{
        setaddClass(true)
    };
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleFileName = (event) =>{
        const file = event.target.files[0];
        if (file) {
            setfilename(file.name);
        }
      }
    
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
           PaperProps={{
             component: 'form',
             onSubmit: (event) => {
               event.preventDefault();
               const formData = new FormData(event.currentTarget);
               const formJson = Object.fromEntries(formData.entries());
               const email = formJson.email;
               console.log(email);
               handleClose();
               
             },
           }}
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
      <VisuallyHiddenInput type="file" onChange={handleFileName} />
    
    </Button>
    <span class="ml-4 ">
    {filename? filename: ''}
    </span>
    </div>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose}>Cancel</Button>
             <Button type="submit">Create Class</Button>
           </DialogActions>
         </Dialog>
         </>
    );
}
