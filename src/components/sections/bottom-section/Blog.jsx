import React from 'react';
import BlogCard from './blog-card.jsx'; 
import './Blog.css';
var blogimageone="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&w=384&q=75";
var blogimagetwo="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEng_2405_Banner.png&w=384&q=75";
var blogimagethree="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEng_2205_Banner.png&w=384&q=75"

const BlogContainer = () => {
  return (
    <div className="blog-container-main">
      <div className="blog-container-1">
        <h1>Blogs</h1>
      </div>
      <div className="blog-container-2">
        <BlogCard
          imageSrc={blogimageone}
          redHeading="Expert Speak"
          blackHeading="Cogoport: A Global Trade Platform"
          content="Cogoport leverages technology and caters to enterprises of all sizes. Our solutions improve predictability and enhance human capabilities."
          date="July 5, 2023"
        />
        <BlogCard
          imageSrc={blogimagetwo}
          redHeading="Industry Basics"
          blackHeading="Understanding Lean Supply Chain Management: Definition and Considerations"
          content="Lean Supply Chain Management represents the extension of Lean Thinking across the entire supply chain. So, what are the benefits and key"
          date="July 6, 2023"
        />
        <BlogCard
          imageSrc={blogimagethree}
          redHeading="Industry Basics"
          blackHeading="Exploring Types of Supply Chain Management Strategies & Logistics"
          content="What are the types of supply chain management? How can we effectively apply them to your business and customer service? Let's find out"
          date="July 7, 2023"
        />
      </div>
      <div className="blog-container-3">
        <button className="view-all-button">View All</button>
      </div>
    </div>
  );
};

export default BlogContainer;


