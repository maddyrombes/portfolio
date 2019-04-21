import React from 'react'
import css from '../images/logos/css.png'
import git from '../images/logos/git.png'
import github from '../images/logos/github.png'
import heroku from '../images/logos/heroku.png'
import html from '../images/logos/html.png'
import illustrator from '../images/logos/illustrator.svg'
import indesign from '../images/logos/indesign.png'
import javascript from '../images/logos/javascript.png'
import photoshop from '../images/logos/photoshop.jpg'
import postgresql from '../images/logos/postgresql.png'
import rails from '../images/logos/rails.png'
import react from '../images/logos/react.png'
import ruby from '../images/logos/ruby.png'
import sequelize from '../images/logos/sequelize.svg'
import zeplin from '../images/logos/zeplin.png'

const About = () => {
    return (      
        <div className="about" id="about">
            <h3 className="about_header">ABOUT</h3>
            <p className="about_description">Web Developer with a passion for beautiful, responsive products.</p>
            <div className="about_logos">
                <img className="about_logos-img"  src={javascript} />
                <img className="about_logos-img"  src={react} />
                <img className="about_logos-img" src={css} />
                <img className="about_logos-img"  src={html} />
                <img className="about_logos-img"  src={git} />
                <img className="about_logos-img"  src={github} />
                <img className="about_logos-img"  src={heroku} />
                <img className="about_logos-img"  src={postgresql} />
                <img className="about_logos-img"  src={sequelize} />
                <img className="about_logos-img"  src={rails} />
                <img className="about_logos-img"  src={ruby} />
                <img className="about_logos-img"  src={zeplin} />
                <img className="about_logos-img"  src={photoshop} />
                <img className="about_logos-img"  src={illustrator} />
                <img className="about_logos-img"  src={indesign} />
            </div>
        </div>
    )
}

export default About