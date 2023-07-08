import React from 'react';
import './Footer.css'; 
import Subscribe from './subscribe'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-up">
            <img
              src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport-subscribe.png&w=256&q=75"
              alt="Footer Image"
            />
            <div className="center-content">
              <h1>Subscribe to our newsletter now!</h1>
              <p>Don’t miss out on the latest happenings at Cogoport.</p>
              <Subscribe />
            </div>
        </div>
        
        <div className="footer-middle">
          <div className="column">
            <h2>Products</h2>
            <ul>
              <li>Global trade Platform</li>
              <li>Ocean: FCL</li>
              <li>Ocean: LCL</li>
              <li>International Air</li>
              <li>Customs, CFS, and Handling</li>
              <li>Domestic Logistics</li>
              <li>Surface: FTL, PTL, Rail</li>
              <li>Trailer & Rail Container Haulage</li>
            </ul>
          </div>
          <div className="column">
            <h2>Partners</h2>
            <ul>
              <li>Global Partner Network</li>
              <li>Our Logistics Providers</li>
              <li>Freight Forwarders</li>
              <li>Transporters</li>
              <li>Custom Agents</li>
              <li>Partnership Program</li>
              <li>Channel Partners</li>
              <li>Overseas Agents</li>
            </ul>
          </div>
          <div className="column">
            <h2>Tools</h2>
            <ul>
              <li>Rate Discovery</li>
              <li>Freight Rate Trends</li>
              <li>Tracking</li>
              <li>HS Code Finder</li>
              <li>Personal Trade Assistant</li>
            </ul>
          </div>
          <div className="column">
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Leadership</li>
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div className="column">
            <h2>Knowledge Center</h2>
            <ul>
              <li>Blogs</li>
              <li>News & Updates</li>
              <li>Events</li>
              <li>Reports</li>
              <li>Notifications</li>
              <li>Resources</li>
              <li>Port info</li>
              <li>Shipping Terms</li>
              <li>Help Center</li>
              <li>Incoterms</li>
            </ul>
          </div>
        </div>
        <div className="footer-down">
          <div className="column-down">
            <ul>
              <li>Mandideep (IN) to Shuaiba</li>
              <li>Mandideep (IN) to Charleston, South Carolina</li>
              <li>Mandideep (IN) to Gothenburg</li>
              <li>Mandideep (IN) to Libreville</li>
              <li>Mandideep (IN) to Alexandria</li>
              <li>Mandideep (IN) to Sharjah (KHALID)</li>
              <li>Mandideep (IN) to Mukalla (YE)</li>
              <li>Mandideep (IN) to Bahrain</li>
              <li>Mandideep (IN) to Dakar</li>
              <li>Mandideep (IN) to Jeddah</li>
            </ul>
          </div>
          <div className="column-down">
            <ul>
              <li>Mandideep (IN) to Freetown</li>
              <li>Mandideep (IN) to Beira</li>
              <li>Mandideep (IN) to Rio de Janeiro</li>
              <li>Mandideep (IN) to Vancouver</li>
              <li>Mandideep (IN) to Helsingborg</li>
              <li>Mandideep (IN) to Umm Qasr South</li>
              <li>Mandideep (IN) to Puerto Quetzal</li>
              <li>Mandideep (IN) to San Antonio</li>
              <li>Mandideep (IN) to Iskenderun</li>
              <li>Mandideep (IN) to Kumport</li>
            </ul>
          </div>
          <div className="column-down">
            <ul>
              <li>Mandideep (IN) to Namibe</li>
              <li>Mandideep (IN) to Istanbul</li>
              <li>Mandideep (IN) to POINTE DES GALETS</li>
              <li>Mandideep (IN) to Maputo</li>
              <li>Mandideep (IN) to Jebel Ali</li>
              <li>Mandideep (IN) to Dammam</li>
              <li>Mandideep (IN) to Fos sur Mer</li>
              <li>Mandideep (IN) to Constanta</li>
              <li>Mandideep (IN) to Veracruz</li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
           <div className="footer-social-left">
            <p>© 2023 Cogo Universe PTE. All rights reserved.</p>
            <p>Terms and Conditions |Cookie policy |Privacy and Data Protection Policy</p>
           </div>    
           <div className="footer-social-right">

  <div className="social-icons">
  <p className="red-text">ENGLISH(IN)</p>
  <img
    src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fglobe.png&w=32&q=75"
    alt="Your Image"
  />
  <div className="insta-fb-link">
    <a href="your-linkedin-url">
      <img src="https://img.icons8.com/?size=1x&id=102748&format=png" />
    </a>
    <a href="your-facebook-url">
      <img src="https://img.icons8.com/?size=1x&id=87298&format=png" />
    </a>
    <a href="your-instagram-url">
    <img src="https://img.icons8.com/?size=1x&id=32292&format=png" />
    </a>
  </div>
  </div>
</div>

        </div>
        </div>
    </footer>
  );
};

export default Footer;
