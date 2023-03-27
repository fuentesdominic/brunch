import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const self = {
    name: 'Dominic Fuentes',
    image: 'https://i.imgur.com/ZZfDl7W.jpeg',
    linkedin: 'https://www.linkedin.com/in/dominicfuentes1/',
    github: 'https://github.com/fuentesdominic'
  }

  return (
    <div className='about'>
      <h1></h1>
      <p></p>
      <h2>Creator</h2>
      <div className='about-self'>
        <img src={self.image} alt={self.name} />
        <h3>{self.name}</h3>
        <div className='about-links'>
          <a href={self.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
          <a href={self.github}>
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
export default About