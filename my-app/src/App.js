import React from 'react';
import './App.css';

function App() {

  return (
    <div>
      <head>
       <link rel="stylesheet" href="app.css"></link>
      </head>
      <header>
        <h1 classNam='name-title'>Seth Behar</h1>
      </header>
      <body>
        <header className='section-title'>University of Florida</header>
          <section className='education-list'>
            <ul>
              <li>Bachelor of Science in Computer Science</li>
              <li>GPA 3.78</li>
              <li>Relevant Coursework</li>
            </ul>
          </section>
        <header className='section-title'>Experience</header>
          <section className='experience-list'>
            <ul>
              <li>TAMID Project Manager</li>
              <li>eBacon Software Engineer Internship</li>
            </ul>
          </section>
        <header className='section-title'>Skills</header>
          <section className='skills-list'>
            <ul>
              <li>Java</li>
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
        <header className='section-title'>Projects</header>
          <section className='projects-list'>
            <ul>
              <li>Unreal Engine Advertisment Rendering</li>
              <li>Minesweeper</li>
              <li>NFT Generator</li>
              <li>Auto Rebalance 401k Procedure</li>
            </ul>
          </section>
          <header className='section-title'>Contact</header>
            <section>
              <ul>
                <li>sethbehar@gmail.com</li>
                <li>Github</li>
                <li>Linkedin</li>
              </ul>
            </section>
      </body>
     </div>
  );
}

export default App;
