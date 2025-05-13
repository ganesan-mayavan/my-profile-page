import React from 'react';
import './MyProfile.css';
import Hello from './Hello/Hello';
import Header from './Header/Header';
import Experience from './Experience/Experience'


export default function MyProfile() {
  return (
    <div className="wave-container">
      <div className="wave-layer">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#1b1b1b"
            fillOpacity="1"
            d="M0,96L60,128C120,160,240,224,360,234.7C480,245,600,203,720,165.3C840,128,960,96,1080,106.7C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <svg viewBox="0 0 1440 320">
          <path
            fill="#141414"
            fillOpacity="1"
            d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,197.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div >

        <Header />

        <div className='main-content'>
          <Hello />
          <Experience />
        </div>
        

      </div>

        
    </div>
  );
}
