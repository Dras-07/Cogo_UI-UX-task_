import React from 'react';
import './blog-card.css';
const BlogCard = ({ imageSrc, redHeading, blackHeading, content, date }) => {
  return (
    <div className="blog-card">
      <img src={imageSrc} alt="Blog" className="blog-image" />
      <h2 className="red-heading">{redHeading}</h2>
      <h3 className="black-heading">{blackHeading}</h3>
      <p className="content">{content}</p>
      <div className="footer">
      <button className="read-more-btn">
          Read More <span className="arrow">&#8594;</span>
        </button>
        <span className="date">{date}</span>
      </div>
    </div>
  );
};

export default BlogCard;
