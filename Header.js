import React from 'react'
import bannerImg from '../images/restaurantfood.jpg'
function Header() {
  return (
    <header className='Header'>
        <section>
            <div className="banner">
            <h2>Little lemon</h2>
            <h3>Chicao</h3>
            <p>We are family meditarian restarant,focused on traditional recipes served with the modern twist</p>
           <link to="/booking"> <button arai-label='onClick'>Reserve Table</button></link>
            </div>
            <div className="banner.img">
              <img src="{bannerImg}" alt="" />
            </div>
        </section>
    </header>
  )
}

export default Header
