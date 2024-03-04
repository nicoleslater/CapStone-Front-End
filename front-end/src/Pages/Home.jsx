import React from 'react';
import './Home.css';
import guitar from '../images/guitar.jpeg';

function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={guitar} alt="guitar" className="image" />
      </div>
      <div className="text-container">
      <h2> Where Those Who Know</h2>
      <h2>Go to Grow</h2>
      <p>Embark on a journey where expertise meets evolution! Welcome to our dynamic platform, your destination to thrive and grow. Join the league of knowledge-seekers and experience the power of growth firsthand.</p>
      <button>Start Learning</button>
    </div>
    </div>
  )
}

export default Home;
