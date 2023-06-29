import React from 'react';
import ParticleComponent from './components/ParticleComponent';
import './App.css';

function App() {

  return (
    <div className='container'>
      <ParticleComponent />
      <div className='content'>
      <head>
       <link rel="stylesheet" href="app.css"></link>
      </head>
      <header className='main-header'>
        <h1 className='title name-title'>Seth Behar</h1>
      </header>
      <body>
        <header className='title section-title'>University of Florida</header>
          <section className='education-list'>
            <ul>
              <li>Bachelor of Science in Computer Science</li>
              <li>GPA 3.78</li>
              <li>Relevant Coursework</li>
            </ul>
          </section>
        <header className='title section-title'>Experience</header>
          <section className='experience-list'>
            <ul>
              <li>eBacon Software Engineer Internship</li>
              <li>TAMID Project Manager</li>
            </ul>
          </section>
        <header className='title section-title'>Skills</header>
          <section className='skills-list'>
            <ul>
              <li >Java</li>
              <li>C++</li>
              <li>Python</li>
              <li>React</li>
              <li>SQL</li>
              <li>Nodejs</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Git</li>
            </ul>
          </section>
        <header className='title section-title'>Projects</header>
          <section className='projects-list'>
            <ul>
              <li>Unreal Engine Advertisment Rendering</li>
              <li>Minesweeper</li>
              <li>NFT Generator</li>
              <li>Auto Rebalance 401k Procedure</li>
            </ul>
          </section>
          <header className='title section-title'>Contact</header>
            <section>
              <ul>
                <li>sethbehar@gmail.com</li>
                <li><a href='https://github.com/sethbehar'>Github</a></li>
                <li><a href='https://www.linkedin.com/in/seth-behar/'>Linkedin</a></li>
              </ul>
            </section>
      </body>
     </div>
     </div>
  );
}

export default App;
