import React ,{useState} from 'react';
// import cogoportIcon from 'https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport_icon&w=16&q=75';
import './Banner.css';
import CloseButton from './CloseButton.jsx';
function Banner() {
    const [showBanner, setShowBanner] = useState(true);

  const handleToggleBanner = () => {
    setShowBanner(!showBanner);
  };
    return (
    <div className="banner">
   <img className="content-icon" src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport_icon&w=16&q=75" />
      Limited Time Offer: Get 15% off on all Cogo Assured Rates. <span> Book Today!</span>
      <CloseButton onClick={handleToggleBanner} />

    </div>
  );
}

export default Banner;
