import React from 'react';
import './Review.css';

const reviews = [
  {
    quote: `MoyerProduction delivered exceptional cinematography for our feature film. Their attention to detail and creative vision elevated our project beyond expectations. The team's professionalism and technical expertise made the entire process seamless.`,
    author: 'Ethan Holloway',
  },
  {
    quote: `Working with MoyerProduction was a game-changer for our commercial campaign. Their state-of-the-art equipment and innovative approach resulted in stunning visuals that perfectly captured our brand essence. Highly recommended for premium production quality.`,
    author: 'Sophia Kensington',
  },
  {
    quote: `The MoyerProduction studio provided the perfect backdrop for our high-fashion shoot. Their infinity wall and lighting setup created magazine-quality images. The team's artistic direction and technical precision were invaluable to our project's success.`,
    author: 'Olivia Chen',
  },
 
];

const Review = () => (
  <section className="review">
    <h2>
      Results That <span>Speak</span>
    </h2>

    <div className="review__grid">
      {reviews.map(({ quote, author }) => (
        <article key={author} className="card">
          <div className="quote-mark" aria-hidden="true">“</div>
          <p className="card__quote">{quote}</p>
          <p className="card__author">— {author}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Review;