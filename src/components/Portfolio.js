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
                    <img className="portfolio_1_img" src={TileTrial}/>
                    <p className="portfolio_1_text">Tile Trial</p>
                </div>

                <div className="portfolio_2">
                    <img className="portfolio_2_img" src={EtsyBoard}/>
                    <p className="portfolio_2_text">EtsyBoard</p>
                </div>

                <div className="portfolio_3">
                    <img className="portfolio_3_img" src={Iterator} />
                    <p className="portfolio_3_text">Iterator</p>
                </div>

                <div className="portfolio_4">
                    <img className="portfolio_4_img" src={MariVanna} />
                    <p className="portfolio_4_text">Mari Vanna</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio