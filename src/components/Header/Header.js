import React from 'react';
import './Header.css';
import { Box, Button, Typography } from '@mui/material';


const Header = () => {
  return (

    <div className='header'>

<Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center"
      sx={{
        backgroundColor: 'rgb(25, 25, 25);'
      }}
    >
      {/* Left side text */}
      <Typography zIndex={1} variant="h5" color='white' margin={2} >My Profile</Typography>

      {/* Right side buttons */}
      <Box display="flex" gap={3} margin={2} >
        <Button variant="outlined" sx={{
                          borderColor: 'rgb(255, 255, 255)',
                          width: '120px',
                          height: '30px',
                          borderRadius: '25px',
                          color: 'white',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgb(25, 25, 25)',
                            transform: 'scale(0.95)',
                          },
                          textTransform: 'none',
                          marginTop: '5px'
                      }}>Home</Button>
        <Button variant="outlined" sx={{
                          borderColor: 'rgb(255, 255, 255)',
                          width: '120px',
                          height: '30px',
                          borderRadius: '25px',
                          color: 'white',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgb(25, 25, 25)',
                            transform: 'scale(0.95)',
                          },
                          textTransform: 'none',
                          marginTop: '5px'
                      }}>About</Button>
        <Button variant="outlined" sx={{
                          borderColor: 'rgb(255, 255, 255)',
                          width: '120px',
                          height: '30px',
                          borderRadius: '25px',
                          color: 'white',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgb(25, 25, 25)',
                            transform: 'scale(0.95)',
                          },
                          textTransform: 'none',
                          marginTop: '5px'
                      }}>Services</Button>
        <Button variant="outlined" sx={{
                          borderColor: 'rgb(255, 255, 255)',
                          width: '120px',
                          height: '30px',
                          borderRadius: '25px',
                          color: 'white',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgb(25, 25, 25)',
                            transform: 'scale(0.95)',
                          },
                          textTransform: 'none',
                          marginTop: '5px'
                      }}>Contact</Button>
      </Box>
    </Box>

      {/* <Box
        // display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ backgroundColor: '#f0f0f0' }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          MySite
        </Typography>

        <Box display="flex" gap={3}>
          <Button variant="outlined" sx={{
                        borderColor: 'rgb(125, 125, 125)',
                        width: '120px',
                        height: '30px',
                        borderRadius: '25px',
                        color: 'white',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgb(25, 25, 25)',
                          transform: 'scale(0.95)',
                        },
                        textTransform: 'none'
                    }}>Home</Button>
          <Button variant="outlined">About</Button>
          <Button variant="outlined">Services</Button>
          <Button variant="outlined">Contact</Button>
        </Box>
      </Box> */}
    </div>
  );
};

export default Header;
