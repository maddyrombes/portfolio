import React from 'react'
import Logo from './Logo.js'
import me from '../images/me.jpg'
import javascript from '../images/logos/javascript.svg'
import css from '../images/logos/css.svg'
import html from '../images/logos/html.svg'
import react from '../images/logos/react.svg'
import jquery from '../images/logos/jquery.svg'
import git from '../images/logos/git.svg'
import github from '../images/logos/github.svg'
import node from '../images/logos/node.svg'
import express from '../images/logos/express.svg'
import postgresql from '../images/logos/postgresql.svg'
import sequelize from '../images/logos/sequelize.svg'
import json from '../images/logos/json.svg'
import ruby from '../images/logos/ruby.svg'
import rails from '../images/logos/rails.svg'

const About = () => {
  return (      
    <div className="about" id="about">
      <h3 className="about_header">ABOUT</h3>
      <p className="about_description">Full stack web developer with a passion for beautiful, responsive products.<br/>Always learning.</p>
      <a href="https://github.com/maddyrombes" target="blank"><img className="me_img" src={me} alt="maddy" /></a>
      <div className="about_logos">
        <Logo alt="javascript" className="about_logos-img" src={javascript} title="Javascript" />
        <Logo alt="css" className="about_logos-img" src={css} title="CSS3" />
        <Logo alt="html" className="about_logos-img" src={html} title="HTML5" />
        <Logo alt="react" className="about_logos-img" src={react} title="React.js" />
        <Logo alt="jquery" className="about_logos-img jquery" src={jquery} title="JQuery" />
        <Logo alt="git" className="about_logos-img" src={git} title="Git" />
        <Logo alt="github" className="about_logos-img" src={github} title="GitHub" />
        <Logo alt="node" className="about_logos-img" src={node} title="Node.js" />
        <Logo alt="express" className="about_logos-img express" src={express} title="Express.js" />
        <Logo alt="psql" className="about_logos-img" src={postgresql} title="PostgreSQL" />
        <Logo alt="sequelize" className="about_logos-img" src={sequelize} title="Sequelize" />
        <Logo alt="json" className="about_logos-img" src={json} title="JSON" />
        <Logo alt="ruby" className="about_logos-img" src={ruby} title="Ruby" />
        <Logo alt="rails" className="about_logos-img rails" src={rails} title="Ruby on Rails" />
      </div>
    </div>
  )
}

export default About