import React from 'react'
import Logo from './Logo.js'
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

const Technologies = () => {
  return (      
    <div id="technologies">
      <h3 className="tech_header">TECHNOLOGIES</h3>
      <div className="tech_logos">
        <Logo alt="javascript" className="tech_logos-img" src={javascript} title="Javascript" />
        <Logo alt="css" className="tech_logos-img" src={css} title="CSS3" />
        <Logo alt="html" className="tech_logos-img" src={html} title="HTML5" />
        <Logo alt="react" className="tech_logos-img" src={react} title="React.js" />
        <Logo alt="jquery" className="tech_logos-img jquery" src={jquery} title="JQuery" />
        <Logo alt="git" className="tech_logos-img" src={git} title="Git" />
        <Logo alt="github" className="tech_logos-img" src={github} title="GitHub" />
        <Logo alt="node" className="tech_logos-img" src={node} title="Node.js" />
        <Logo alt="express" className="tech_logos-img express" src={express} title="Express.js" />
        <Logo alt="psql" className="tech_logos-img" src={postgresql} title="PostgreSQL" />
        <Logo alt="sequelize" className="tech_logos-img" src={sequelize} title="Sequelize" />
        <Logo alt="json" className="tech_logos-img" src={json} title="JSON" />
        <Logo alt="ruby" className="tech_logos-img" src={ruby} title="Ruby" />
        <Logo alt="rails" className="tech_logos-img rails" src={rails} title="Ruby on Rails" />
      </div>
    </div>
  )
}

export default Technologies