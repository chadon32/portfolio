import React from "react"

import { Link } from "gatsby"

import SocialLinks from "../constants/socialLinks"

const Hero = () => {


  return (
  <header className= "hero">
  <div className = "section-center hero-center">
<article className="hero-info">
  <div>
    <div className="underline">  </div>
      <h1> I'm Chad</h1>
      <h4> A Full Stack Web Developer</h4>
      <Link to ='./contact' className="btn">
        contact me
      </Link>
      <SocialLinks/>
  
  </div>
</article>


  </div>
</header>
  )
}

export default Hero
