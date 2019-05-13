import React from 'react'
import me from '../images/me.jpg'
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
            <p className="about_description">Full stack web developer with a passion for beautiful, responsive products.<br/>Always learning.</p>
            <img className="me_img" src={me} alt="maddy" />
            <div className="about_logos">
                <img alt="js" className="about_logos-img" src={javascript} />
                <img alt="css" className="about_logos-img css" src={css} />
                <img alt="html" className="about_logos-img html" src={html} />
                <img alt="react" className="about_logos-img" src={react} />
                <img alt="git" className="about_logos-img" src={git} />
                <img alt="github" className="about_logos-img github" src={github} />
                <img alt="heroku" className="about_logos-img heroku" src={heroku} />
                <img alt="psql" className="about_logos-img" src={postgresql} />
                <img alt="sequelize" className="about_logos-img" src={sequelize} />
                <img alt="rails" className="about_logos-img" src={rails} />
                <img alt="ruby" className="about_logos-img ruby" src={ruby} />
                <img alt="zeplin" className="about_logos-img" src={zeplin} />
                <img alt="ps" className="about_logos-img adobe" src={photoshop} />
                <img alt="illustrator" className="about_logos-img adobe" src={illustrator} />
                <img alt="indesign" className="about_logos-img adobe" src={indesign} />
            </div>
        </div>
    )
}

export default About