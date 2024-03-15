import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Search from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Student, Assignment, Grades, Feedback_from_ChatGPT) {
  return { Student, Assignment, Grades, Feedback_from_ChatGPT };
}

const rows = [
    createData('Satwik Bhasin', 'Assignment 1', '93/100', 'The solution provided correctly identifies whether the relation is reflexive, symmetric, antisymmetric. However, there is error in the explaination for transitivity. The correct answer should be that R is not transitive, instead in the solution it has been determined as transitive.')
];


export default function Grades() {

    
  return (
    <>
    <a href='/teacher/classroom'>
            <span class="flex text-sm" >
            <ArrowBackIcon style={{height:'20px'}}/> Classroom</span>
            </a>
            <div style={{height: '85vh', width: '100%', borderRadius: '20px', overflow: 'hidden', position: 'relative', paddingTop:'10px' }}>
        <div style={{ position: "relative", height:'100%', borderRadius: '10px' }}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#b7b7b7'}}> 
            <TableCell align="center" style={{ fontWeight:'bold'}}>Student Name</TableCell>
            <TableCell align="center" style={{ fontWeight:'bold'}}>Assignment Name</TableCell>
            <TableCell align="center" style={{ fontWeight:'bold'}}>Total Grades</TableCell>
            <TableCell align="center" style={{ fontWeight:'bold'}}>Feedback from Chat GPT</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {row.Student}
              </TableCell>
              <TableCell align="center">{row.Assignment}</TableCell>
              <TableCell align="center">{row.Grades}</TableCell>
              <TableCell align="center">{row.Feedback_from_ChatGPT}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
      </>
  );
}

