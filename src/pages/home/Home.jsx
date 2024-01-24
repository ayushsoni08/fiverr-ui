import React from 'react'
import './Home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard';
import {cards} from '../../data';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map(card=>(
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="feauters">
        <div className="container">
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="title">
            <img src="./img/check.png" alt="" />
            The best for every budget
          </div>
          <p>
            Find high-quality services at every price point. No hourly rates, just project-based pricing.
          </p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Quality work done quickly
          </div>
          <p>
            Find the right freelancer to begin working on your project within minutes.
          </p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Protected payments, every time
          </div>
          <p>
            Always know what you'll pay upfront. Your payment isn't released until you approve the work.
          </p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            24/7 support
          </div>
          <p>
            Our round-the-clock support team is available to help anytime, anywhere.
          </p>
        </div>
        <div className="item">
          <video src="./img/video.mp4" controls />
        </div>
      </div>
    </div>
  )
}

export default Home