import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates
                buying and selling of products or services over the internet
                services as a virtual marketplace where businesses and individuals
                showcase their products, interact with customers and conduct
                transactions without the need for pysical presence. E-coomerce
                websites have gained immense popularity due to their convinience,
                accessibility and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services a
                detailed descriptions, images, prices and any available variances
                (eg., sizes, colors) Each product usually has its own description
                with relevant information</p>
        </div>

    </div>
  )
}

export default DescriptionBox