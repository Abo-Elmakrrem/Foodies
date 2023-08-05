import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">
                What they are Saying
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aspernatur iusto doloremque beatae molestia
            </p>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis deleniti qui porro.
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2>John Doe</h2>
            </div>
        </div>
    </div>
  )
}

export default Testimonial