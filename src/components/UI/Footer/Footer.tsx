import React from 'react'
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '80px',
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
            }}
        >
            <Typography
                variant='h6'
                sx={{
                    fontWeight: 'bold',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: '20px',
                }}>
                Welcome Traveler!
            </Typography>

            <Typography
                variant='h6'
                sx={{
                    fontWeight: 'bold',
                    color: '#fff',
                    textAlign: 'center',
                    marginTop: '10px',
                }}>
                This is a FlyBondi Travels App made with Next.js, TypeScript, Material-UI... and more!
            </Typography>
        </Box >
    )
}

export default Footer