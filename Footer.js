import React from 'react'

const Footer = () => {
  return (
    <Footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>we are famiy owned mediterraneran restaurant,focused on traditional recipes served with a modern twist</p>

        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href=""></a>Menu</li>
            <li><a href="/"></a>Reservation</li>
            <li><a href="/"></a>order online</li>
            <li><a href="/"></a>LogIn</li>
          </ul>
        </div>
        <div>
          <h3>contact</h3>
          <ul>
            <li>address : <br /> 123 Towncity,usa</li>
            <li>phone : <br /> ++ 456 789</li>
            <li>email : <br /> littlelemon@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links </h3>
          <ul>
          <li><a href="/">FaceBook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href=""></a>Twitter</li>
          </ul>
        </div>
      </section>
      
    </Footer>
  )
}

export default Footer
