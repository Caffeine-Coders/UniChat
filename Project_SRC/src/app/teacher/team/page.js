import "../components/dash.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
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
                sx={{ height: '50%' }}
                image="https://www.albany.edu/sites/default/files/styles/hero_slide_image/public/about-ourcampuses-hero-1v2.jpg?itok=ecR2NIkO"
                title="UAlbany"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                  Meet the Team
                </Typography>
                <Grid container spacing={4}>
                <Card sx={{width: '20%', display: 'flex', alignItems: 'center', flexDirection: 'column'}} elevation={0}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        sx={{ height: 220, borderRadius: 50, width: '80%',margin: 'auto'}}
                        image="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
                        alt="Image"
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                </CardContent>
            </Card>
 
              
          </div>
    );
  }