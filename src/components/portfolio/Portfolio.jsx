import React from 'react'
import IMG1 from '../../assets/portfolio1.webp'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Personal Portfolio",
    github: "https://github.com/Shrutihere/personal-portfolio-vercel",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 2,
    image: IMG1,
    title: "Book Suggester",
    github: "https://github.com/Shrutihere/Book-Suggester",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 3,
    image: IMG1,
    title: "Typing Speed Test",
    github: "https://github.com/Shrutihere/Typing-Speed-Test",
    demo: "https://dribble.com/Alien_pixels"
  },
  {
    id: 4,
    image: IMG1,
    title: "Movie Recommender System",
    github: "https://github.com/Shrutihere/Movie-Recommender-system",
    demo: "https://dribble.com/Alien_pixels"
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' >Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        


        
      </div>

    </section>
  )
}

export default Portfolio