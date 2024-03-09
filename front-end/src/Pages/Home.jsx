import React, { useState } from 'react';
import './Home.css';
import image from '../images/image.jpeg';
import Tidbit from '../images/Tidbit.png';
import Modal from '../Components/Modal';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="logo-container">
        <img src={Tidbit} alt="Tidbit Logo" className="logo" />
      </div>
      <div className="home-container">
        <div className="image-container">
          <img src={image} alt="image" className="image" />
        </div>
        <div>
          <h2 className="home-header-title">Where Those Who Know</h2>
          <h2 className="home-header-subtitle">Go to <span className="highlighted-text">Grow</span></h2>
          <p className="text">Embark on an odyssey through the realms of knowledge, where every corner holds secrets waiting to be revealed. From the intricate landscapes of technology to the vibrant tapestries of art, from the precise calculations of mathematics to the ever-evolving world of fashion, our platform beckons you to explore.</p>
          <button className="start-learning-button" onClick={openModal}>Start Learning</button>
          {modalOpen && <Modal onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
