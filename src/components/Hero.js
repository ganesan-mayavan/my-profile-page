
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center" style={{ minHeight: '90vh', background: '#f8f9fa' }}>
      <div className="container text-center">
        <h1>Hello, I'm <span className="text-primary">Ganesan M - Profile</span></h1>
        <p className="lead">I'm a Java Full Stack Developer</p>
        <a href="#portfolio" className="btn btn-primary">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
