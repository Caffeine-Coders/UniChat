import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';

export default function FloatingActionButtons() {
    const [hovering, setHovering] = React.useState(false);

    const handleHover = () => {
        setHovering(true);
    };

    const handleHoverOut = () => {
        setHovering(false);
    };

    return (
        <Box sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <Fab
                color="primary"
                aria-label="add"
                variant={hovering?'extended':'circular'}
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}
            >
                <AddIcon />
                {hovering && (
                    <Typography sx={{ ml: 1, textTransform: 'capitalize' }}>
                        Classroom
                    </Typography>
                )}
            </Fab>
        </Box>
    );
}
