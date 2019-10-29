import React from 'react';
import CardReveal from './CardReveal'

const projects = [
  {
    id: 1,
    title: 'Tile Trial',
    description: 'A pure Javascript memory game.',
    deployedLink: 'https://maddyrombes.github.io/tile-trial/',
    githubLink: 'https://github.com/maddyrombes/tile-trial',
    imagePath: `${require('../images/tile-trial.png')}`
  },
  {
    id: 2,
    title: 'EtsyBoard',
    description: 'A React app using Etsy\'s API.',
    deployedLink: 'https://etsy-board.herokuapp.com/',
    githubLink: 'https://github.com/maddyrombes/etsy-app',
    imagePath: `${require('../images/etsy-board.png')}`
  },
  {
    id: 3,
    title: 'Iterator',
    description: 'A full-stack Medium clone with user authentication.',
    deployedLink: 'https://iterator.surge.sh/',
    githubLink: 'https://github.com/maddyrombes/Iterator',
    imagePath: `${require('../images/iterator.png')}`
  },
  {
    id: 4,
    title: 'Mari Vanna',
    description: 'A collaboration with UX design students.',
    deployedLink: 'https://mari-vanna.surge.sh/',
    githubLink: 'https://github.com/lizmoy/mari-vanna',
    imagePath: `${require('../images/mari-vanna.png')}`
  },
  {
    id: 5,
    title: 'Well Rounded',
    description: 'A mental health tracker created with React and Ruby on Rails.',
    deployedLink: 'http://elastic-vessel.surge.sh/',
    githubLink: 'https://github.com/maddyrombes/well-rounded',
    imagePath: `${require('../images/well-rounded.png')}`
  },
]

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h3 className="portfolio_header">PORTFOLIO</h3>
      <div className="portfolio_images">
      {projects.map(proj => (
        <CardReveal
          title={proj.title}
          description={proj.description}
          deployedLink={proj.deployedLink}
          githubLink={proj.githubLink}
          imagePath={proj.imagePath}
          key={proj.id} />
      ))}
      </div>
    </div>
  )
}

export default Portfolio;