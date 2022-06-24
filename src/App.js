 import './App.css';
 import WorkExperience from './WorkExperience';
 import Certificates from './Certificates';
 import Education from "./Education";
 import Expertise from './Expertise';
 import React from 'react';
 

function App() {
  return (
    <div className="App">
      <Expertise />

      <WorkExperience />
      <br/>
      <br/>
      <Certificates/> 
      <br/>
      <br/>
      <Education/> 
    </div>
  );
}

export default App;
