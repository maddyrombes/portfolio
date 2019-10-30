import React from 'react';
import resume from '../images/resume.pdf';

const Resume = () => { 
  return (
    <div id="resume">
      <h3 className="resume_header">RÉSUMÉ</h3>
      <iframe className="resume" title="resume" src={resume} />
    </div>
  )
}

export default Resume;
