import React from 'react';
import './Hello.css';
import ProfileImage from '../../assets/Ganesan_M_without_bg.png';
import resumeFile from '../../assets/Ganesan_M_Full_Stack_Developer_Resume.pdf';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

export default function Hello() {

    const getResume = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'Ganesan_M_Full_Stack_Developer_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (

    <div className='hello'>
        <div className="split-container">
            <div className="left-pane">
                <p className='hello-text'>Hello I'm</p> 
                <p className='name-text'>Ganesan M</p>
                <p className='role-text'>Java Full Stack Developer</p>

                <Button variant="outlined" endIcon={<DownloadIcon />} onClick={getResume} 
                    sx={{
                        borderColor: 'rgb(125, 125, 125)',
                        width: '250px',
                        height: '50px',
                        borderRadius: '25px',
                        color: 'white',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgb(25, 25, 25)',
                          transform: 'scale(0.95)',
                        },
                        textTransform: 'none'
                    }}
                >
                    Get Resume
                </Button>
            </div>

            <div className="right-pane">
                
                <div className='profile-image-container'>
                    <img src={ProfileImage} alt="My Profile" className="profile-image" />
                </div>
                
            </div>
        </div>
    </div>

    );
}