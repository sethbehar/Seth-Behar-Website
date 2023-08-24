import React from 'react';
import ParticleComponent from './components/ParticleComponent';
import CloudComponent from './components/CloudComponent';
import './App.css';
import MainHeaderComponent from './components/MainHeaderComponent';

function App() {

  return (
    <div className='container'>
      <ParticleComponent />
      <div className='content'>
      <head>
       <link rel="stylesheet" href="app.css"></link>
      </head>
      <div className='main-header'>
        <MainHeaderComponent />
      </div>
      <body>
        <header className='title section-title'>University of Florida</header>
          <section className='education-list'>
            <ul>
              <li>Bachelor of Science in Computer Science</li>
              <li>GPA 3.68</li>
            </ul>
          </section>
        <header className='title section-title'>Experience</header>
          <section className='experience-list'>
            <ul>
              <li>eBacon Software Engineer Internship</li>
              <li>TAMID Group Project Manager</li>
            </ul>
          </section>
        <header className='title section-title'>Skills</header>
          <section className='skills-list'>
              <CloudComponent />
          </section>
        <header className='title section-title'>Projects</header>
          <section className='projects-list'>
            <ul>
              <li>Automated 401k Rebalances</li>
              <li>Unreal Engine Advertisment Rendering</li>
              <li><a href='https://borrowedfuel.web.app/' target="_blank" rel="noopener noreferrer">Borrowed Fuel Calculator Web App</a></li>
              <li>Minesweeper</li>
            </ul>
          </section>
          <header className='title section-title'>Contact</header>
            <section>
              <ul>
                <li>sethbehar@gmail.com</li>
                <li><a href='https://github.com/sethbehar' target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href='https://www.linkedin.com/in/seth-behar/' target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              </ul>
            </section>
      </body>
     </div>
     </div>
  );
}

export default App;
