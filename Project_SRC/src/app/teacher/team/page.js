import "../components/dash.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import d from './d.jpg'
import f from './f.jpg'
import Typography from '@mui/material/Typography';
import { Box, Grid } from "@mui/material";
export default function Team() {
    return (
        <div style={{ 
            position: 'fixed', 
            top: '25px', 
            bottom: '25px', 
            left: '25px', 
            right: '25px', 
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: 'column',
            alignItems: 'center', 
            height: '100%' 
          }}>
            <Card sx={{ width: '100%', height: '100%' }}>
              <CardMedia
                sx={{ height: '30%' }}
                image="https://www.albany.edu/sites/default/files/styles/hero_slide_image/public/about-ourcampuses-hero-1v2.jpg?itok=ecR2NIkO"
                title="UAlbany"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                  Meet the Team
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs= {3}>
                    <Box display="flex" justifyContent="center">
                <Card sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}} elevation={0}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        sx={{ height: 200, borderRadius: 50, width: '80%',margin: 'auto'}}
                        image={f.src}
                        
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Forum Dipen Shah
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            forumshah2023@gmail.com
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Box>
                </Grid>
                <Grid item xs= {3}>
                <Box display="flex" justifyContent="center">
                <Card sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}} elevation={0}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        sx={{ height: 200, borderRadius: 50, width: '80%',margin: 'auto'}}
                        image={d.src}
                        alt="Image"
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Dheeraj Kumar Thanda
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            thandadheerajkumar@gmail.com
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Box>
                </Grid>
                <Grid item xs= {3}>
                <Box display="flex" justifyContent="center">
                <Card sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}} elevation={0}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        sx={{ height: 200, borderRadius: 50, width: '80%',margin: 'auto'}}
                        image="https://avatars.githubusercontent.com/u/93511515?v=4"
                        alt="Image"
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Satwik Bhasin
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            sbhasin@albany.edu
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Box>
                </Grid>
                <Grid item xs= {3}>
                    <Box display="flex" justifyContent="center">
                <Card sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}} elevation={0}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        sx={{ height: 200, borderRadius: 50, width: '80%',margin: 'auto'}}
                        image="https://media.licdn.com/dms/image/D5603AQFwiIu2-6-tQQ/profile-displayphoto-shrink_800_800/0/1676321390019?e=1718236800&v=beta&t=3Q1beMu9A_L2gvun-9LPTL96PyvWsJMni1vAFFj8JUE"
                        alt="Image"
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" align="center">
                            Sai Vishnu Anudeep Kadiyala
                            
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          skadiyala@albany.edu
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Box>
                </Grid>
                </Grid>
                </CardContent>
            </Card>
 
              
          </div>
    );
  }