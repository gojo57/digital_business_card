import React from 'react'
import linkedin from '../Images/linkedin-box-fill.png'
import github from '../Images/github-fill (1).png'
import twitter from '../Images/twitter-fill (1).png'
import instagram from '../Images/instagram-fill.png'
import '../../styles.css'

function Footer() {
  return (
    <div className='footer'>
      <a href="https://www.linkedin.com/in/57akshatjha/"><img src={linkedin} alt="" /></a>
      <a href="https://github.com/gojo57"><img src={github} alt="" /></a>
      <a href="https://twitter.com/2022WasGood"><img src={twitter} alt="" /></a>
      <a href="https://www.instagram.com/akshatj_57/"><img src={instagram} alt="" /></a>
    </div>
  )
}

export default Footer