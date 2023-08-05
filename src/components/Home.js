import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className='primary-text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Nulla delectus amet nihil dolore deleniti enim cumque laborum tempore pariatur,
            voluptatum harum hic fugit rem omnis aspernatur. Labore alias veniam tenetur.
          </p>
          <button className="secondary-button">
            Order Now < FiArrowRight/>
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home