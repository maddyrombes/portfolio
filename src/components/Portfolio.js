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
                    <img className="portfolio_img" src={TileTrial}/>
                </div>

                <div className="portfolio_2">
                    <img className="portfolio_img" src={EtsyBoard}/>
                </div>

                <div className="portfolio_3">
                    <img className="portfolio_img" src={Iterator} />
                </div>

                <div className="portfolio_4">
                    <img className="portfolio_img" src={MariVanna} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio