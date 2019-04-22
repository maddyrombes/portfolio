import React from 'react'
import TileTrial from '../images/tile-trial.png'
import EtsyBoard from '../images/etsy-board.png'
import Iterator from '../images/iterator.png'
import MariVanna from '../images/mari-vanna.png'

const Portfolio = () => {
    return (      
        <div className="portfolio" id="portfolio">
            <h3 className="portfolio_header">PORTFOLIO</h3>
            <div className="portfolio_images">
                <div className="portfolio_1">
                    <img alt="tile trial" className="portfolio_1_img" src={TileTrial}/>
                    <div className="portfolio_1_text">
                        <p className="portfolio_text-title">Tile Trial</p>
                        <p className="portfolio_text-description">A pure Javascript memory game.</p>
                    </div>
                    <a className="portfolio_text-link" href="https://maddyrombes.github.io/tile-trial/" target="blank">Play the game</a>
                    <a className="portfolio_text-link" href="https://github.com/maddyrombes/tile-trial" target="blank">View it on Github</a>
                </div>

                <div className="portfolio_2">
                    <img alt="etsy board" className="portfolio_2_img" src={EtsyBoard}/>
                    <div className="portfolio_2_text">
                        <p className="portfolio_text-title">EtsyBoard</p>
                        <p className="portfolio_text-description">A React app using Etsy's API.</p>
                    </div>
                    <a className="portfolio_text-link" href="https://etsy-board.herokuapp.com/" target="blank">Visit the site</a>
                    <a className="portfolio_text-link" href="https://github.com/maddyrombes/etsy-app" target="blank">View it on Github</a>
                </div>

                <div className="portfolio_3">
                    <img alt="iterator" className="portfolio_3_img" src={Iterator} />
                    <div className="portfolio_3_text">
                        <p className="portfolio_text-title">Iterator</p>
                        <p className="portfolio_text-description">A full-stack Medium clone with user authentication.</p>
                    </div>
                    <a className="portfolio_text-link" href="https://iterator.surge.sh/" target="blank">Visit the site</a>
                    <a className="portfolio_text-link" href="https://github.com/maddyrombes/Iterator" target="blank">View it on Github</a>
                </div>

                <div className="portfolio_4">
                    <img alt="mari vanna" className="portfolio_4_img" src={MariVanna} />
                    <div className="portfolio_4_text">
                        <p className="portfolio_text-title">Mari Vanna restaurant <br/> website redesign</p>
                        <p className="portfolio_text-description">UX collab</p>
                    </div>
                    <a className="portfolio_text-link" href="" target="blank">Deployed site coming soon</a>
                    <a className="portfolio_text-link" href="https://github.com/lizmoy/mari-vanna" target="blank">View it on Github</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio