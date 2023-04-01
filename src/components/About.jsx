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
      <h1>The Thought Process</h1>
      <p>I started my coding journey by completing a code-along through General Assembly. I would end up finishing a couple of very small and beginner level projects. The last one I completed was something very basic in realtions to this application. I decided to leave General Assembly the same way I was welcomed. This gives you, the user, and myself a good understanding on how much knowledge I have gained on Computer Engineering in these short three months.</p>
      <h2>Creator</h2>
      <div className='about-self'>
        <img className='aboutImage' src={self.image} alt={self.name} />
        <h3>{self.name}</h3>
        <div className='about-links'>
          <a className='about-link' href={self.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
          <a className='about-link' href={self.github}>
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
export default About